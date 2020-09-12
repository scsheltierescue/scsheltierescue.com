var currentPage = 0;
var isFirstGetPetsAPICall = true;

/**
  Start Here
 */
getPets();
$("#btnMore").on('click', function() {
  isFirstGetPetsAPICall = false;
  getPets();
});

/**
  Call petfinder.php to get a list of available dogs.
  Next, append the data to the HTML document.
 */
function getPets() {
  var $btnMore = $("#btnMore");
  var url = "/petfinder.php";
  var data = {
    page: currentPage += 1
  };

  spinnerStart($btnMore);

  // Retrieve the Petfinder API pet data
  $.getJSON(url, data)
    .done(petfinderDone)
    .fail(petfinderFail)
    .always(petfinderAlways);
}

function petfinderDone(data, textStatus, jqXHR) {
  if (data && data.animals) {
    var pets = data.animals; //normalizeToArray(data.animals),
    var context = { pets: [] };

    pets.forEach(function(pet) {
      context.pets.push(formatPet(pet));
    });

    spinnerStop();
    if (isFirstGetPetsAPICall || (pets && pets.length)) {
      $("#pets").append(Handlebars.templates['pet'](context));
    }

     // Check if we pulled the maximum amount of pets
    if (data.pagination && data.pagination.current_page < data.pagination.total_pages) {
      $("#btnMore").removeClass("invisible");
    }
  } else {
    petfinderFail();
  }
}

function petfinderFail(jqXHR, textStatus, errorThrown) {
  spinnerStop();
  $("#pets").html(Handlebars.templates['pet-error-alert']);
}

function petfinderAlways() {
  $(document).foundation();
}

function formatPet(pet) {
  var petContext = { options: [] };
  var name = pet.name;
  var sex = pet.gender;
  // var desc = pet.description.trim();
  var options = pet.attributes; //normalizeToArray(pet.options.option),
  var environment = pet.environment;
  var isFirst = true;
  var optListItem;

  Object.keys(options).forEach(function(option) {
    optListItem = formatOptionListItem(option, options[option], sex);
    if (optListItem && optListItem.text) {
      petContext.options.push(optListItem);
    }
  });
  Object.keys(environment).forEach(function(option) {
    optListItem = formatOptionListItem(option, environment[option], sex);
    if (optListItem && optListItem.text) {
      petContext.options.push(optListItem);
    }
  });
  petContext.options.sort(function(a, b) {
    return (a.order > b.order) ? 1 : -1;
  });

  petContext.photos = [];
  if (pet.photos) {
    pet.photos.forEach(function(photo, idx) {
      if (photo.large) {
        petContext.photos.push({
          first: isFirst,
          src: photo.large,
          alt: name + idx
        });
        isFirst = false;
      }
    });
  }

  petContext.name = name;
  petContext.sex = sex;
  // petContext.desc = sanitizePetDesc(desc);
  petContext.petfinderUrl = pet.url;

  return petContext;
}

function formatOptionListItem(option, value, sex) {
  var listchild = {};
  switch (option) {
    case "spayed_neutered":
      if (value) {
        if (sex === "Male") {
          listchild.text = "Neutered: ";
        } else if (sex === "Female") {
          listchild.text = "Spayed: ";
        } else {
          listchild.text = "Spayed/Neutered: ";
        }
        listchild.icon = true;
        listchild.order = 2;
      }
      break;
    case "shots_current":
      if (value) {
        listchild.text = "Shots Current: ";
        listchild.icon = true;
        listchild.order = 3;
      }
      break;
    case "house_trained":
      if (value) {
        listchild.text = "Housetrained: ";
        listchild.icon = true;
        listchild.order = 4;
      }
      break;
    case "special_needs":
      if (value) {
        listchild.text = "Special Needs";
        listchild.order = 1;
      }
      break;
    case "children":
      if (value === false) {
        listchild.text = "No Kids";
        listchild.order = 5;
      }
      break;
    case "cats":
      if (value === false) {
        listchild.text = "No Cats";
        listchild.order = 6;
      }
      break;
    case "dogs":
      if (value === false) {
        listchild.text = "No Dogs";
        listchild.order = 7;
      }
      break;
    default:
      listchild = null;
  };
  return listchild;
}

// function sanitizePetDesc(desc) {
//   if(desc.match("^<div>") && desc.match("</div>$")) {
//     desc = desc.replace(/^<div>/,"<p>").replace(/<\/div>$/,"</p>");
//   } else if(!desc.match("^<") && !desc.match(">$")) {
//     desc = "<p>" + desc + "</p>";
//   }
//   return desc;
// }

/**
  Normalize a petfinder response (Array/Object) property into an Array

    [{foo:1}, {bar:2}] => [{foo:1},{bar:2}]
    {foo:1}            => [{foo:1}]
    undefined          => []
*/
// function normalizeToArray(prop) {
//   if(prop && $.isPlainObject(prop)) { prop = [prop]; }
//   return prop || [];
// }

function spinnerStart($btnMore) {
  $btnMore.addClass("invisible");
  $("#spinner").show()
}

function spinnerStop() {
  $("#spinner").hide();
}
