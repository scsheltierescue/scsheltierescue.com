var currentOffset = 0,
    isFirstGetPetsAPICall = true;

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
  var $btnMore = $("#btnMore"),
      url = "petfinder.php",
      data = {
        offset: currentOffset
      };

  spinnerStart($btnMore);

  // Retrieve the Petfinder API pet data
  $.getJSON(url, data)
    .done(petfinderDone)
    .fail(petfinderFail)
    .always(petfinderAlways);
}

function petfinderDone(data, textStatus, jqXHR) {
  if (data.petfinder.lastOffset && data.petfinder.pets) {
    currentOffset = parseInt(data.petfinder.lastOffset.$t, 10);
    var pets = normalizeToArray(data.petfinder.pets.pet),
        context = { pets: [] },
        maxOffset = 25; //equals 'count' value from petfinder.php

    pets.forEach(function(pet) {
      context.pets.push(formatPet(pet));
    });

    spinnerStop();
    if(isFirstGetPetsAPICall || (pets && pets.length)) {
      $("#pets").append(Handlebars.templates['pet'](context));
    }

     // Check if we pulled the maximum amount of pets
    if(pets && (pets.length == null || pets.length === maxOffset)) {
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
  var petContext = { options: [] },
      name = pet.name.$t,
      sex = pet.sex.$t,
      desc = pet.description.$t.trim(),
      options = normalizeToArray(pet.options.option),
      isFirst = true,
      optListItem;

  options.forEach(function(option) {
    optListItem = formatOptionListItem(option, sex);
    if(optListItem) {
      petContext.options.push(optListItem);
    }
  });

  petContext.photos = [];
  if(pet.media.photos && pet.media.photos.photo.length) {
    var photos = pet.media.photos.photo;

    photos.forEach(function(photo) {
      if(photo['@size'] == "x") {
        petContext.photos.push({
          first: isFirst,
          src: photo.$t,
          alt: name + photo['@id']
        });
        isFirst = false;
      }
    });
  }

  petContext.name = name;
  petContext.sex = sex;
  petContext.desc = sanitizePetDesc(desc);

  return petContext;
}

function formatOptionListItem(option, sex) {
  var listchild = {};
  switch (option.$t) {
    case "altered":
      if(sex === "M") {
        listchild.text = "Neutered: ";
      } else if(sex === "F") {
        listchild.text = "Spayed: ";
      } else {
        listchild.text = "Spayed/Neutered: ";
      }
      listchild.icon = true;
      break;
    case "hasShots":
      listchild.text = "Shots Current: ";
      listchild.icon = true;
      break;
    case "housebroken":
    case "housetrained":
      listchild.text = "Housebroken: ";
      listchild.icon = true;
      break;
    case "specialNeeds":
      listchild.text = "Special Needs";
      break;
    case "noKids":
      listchild.text = "No Kids";
      break;
    case "noCats":
      listchild.text = "No Cats";
      break;
    case "noDogs":
      listchild.text = "No Dogs";
      break;
    default:
      listchild = null;
  };
  return listchild;
}

function sanitizePetDesc(desc) {
  if(desc.match("^<div>") && desc.match("</div>$")) {
    desc = desc.replace(/^<div>/,"<p>").replace(/<\/div>$/,"</p>");
  } else if(!desc.match("^<") && !desc.match(">$")) {
    desc = "<p>" + desc + "</p>";
  }
  return desc;
}

/**
  Normalize a petfinder response (Array/Object) property into an Array

    [{foo:1}, {bar:2}] => [{foo:1},{bar:2}]
    {foo:1}            => [{foo:1}]
    undefined          => []
*/
function normalizeToArray(prop) {
  if(prop && $.isPlainObject(prop)) { prop = [prop]; }
  return prop || [];
}

function spinnerStart($btnMore) {
  $btnMore.addClass("invisible");
  $("#spinner").show()
}

function spinnerStop() {
  $("#spinner").hide();
}
