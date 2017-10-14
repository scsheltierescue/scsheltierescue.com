$(document).foundation();

$('#name').on('keyup', function() {
  $('#family_member_1_name').val(this.value);
});
$('#how_many_cats_dogs').on('change', function() {
  updateCatsDogsBlock($('#how_many_cats_dogs').val());
});
$('#people_at_residence').on('change', function() {
  updatePeopleBlock($('#people_at_residence').val());
});
$('#how_many_vets').on('change', function() {
  updateVetsBlock($('#how_many_vets').val());
});

Handlebars.registerHelper('times', function(n, block) {
  var accum = '';
  for(var i = 1; i <= (n); ++i)
    accum += block.fn(i);
  return accum;
});
Handlebars.registerHelper('plus', function(a, b, block) {
   return Number(a) + Number(b)
});

function updateCatsDogsBlock(numCatsDogs) {
  if (parseInt(numCatsDogs, 10) > 0) {
    var context = { num: numCatsDogs };
    return $("#num_of_cats_and_dogs").html(Handlebars.templates['num-cats-dogs-block'](context));
  }
  return $("#num_of_cats_and_dogs").html('');
}
function updatePeopleBlock(numPeople) {
  var context = { num: numPeople };
  $("#num_of_people").html(Handlebars.templates['name-age-block'](context));
}
function updateVetsBlock(numVets) {
  if (parseInt(numVets, 10) > 0) {
    var context = { num: numVets };
    return $("#num_of_vets").html(Handlebars.templates['num-vets-block'](context));
  }
  return $("#num_of_vets").html('');
}
