$(document).foundation();

$('#name').on('keyup', function() {
  $('#family_member_1_name').val(this.value);
});
$('#people_at_residence').on('change', function() {
  updatePeopleBlock($('#people_at_residence').val());
});

Handlebars.registerHelper('times', function(n, block) {
  var accum = '';
  for(var i = 2; i <= (n); ++i)
    accum += block.fn(i);
  return accum;
});

function updatePeopleBlock(numPeople) {
  var context = { num: numPeople };
  $("#num_of_people").html(Handlebars.templates['name-age-block'](context));
}
