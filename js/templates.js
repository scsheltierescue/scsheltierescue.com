(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['name-age-block'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "  <div class=\"large-12 columns\">\n    <fieldset>\n      <div class=\"large-9 columns\">\n        <div class=\"row collapse\">\n          <div class=\"small-3 columns\">\n            <label for=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_name\" class=\"prefix required\">Name</label>\n          </div>\n          <div class=\"small-9 columns\">\n            <input id=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_name\" name=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_name\" type=\"text\" required>\n            <small class=\"error\">Required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"large-3 columns\">\n        <div class=\"row collapse\">\n          <div class=\"small-3 columns\">\n            <label for=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_age\" class=\"prefix required\">Age</label>\n          </div>\n          <div class=\"small-9 columns\">\n            <input id=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_age\" name=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_age\" type=\"text\" pattern=\"number\" required>\n            <small class=\"error\">Number Required</small>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.times || (depth0 && depth0.times) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.num : depth0),{"name":"times","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['pet-error-alert'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"petfinder-api-error\" data-alert class=\"alert-box alert\">\n  <p>\n    Oops, something went wrong! Please try again later or go directly to our <a href=\"http://www.petfinder.com/pet-search?shelterid=SC92\">Petfinder site</a>.\n    <a href=\"#\" class=\"close\">&times;</a>\n  </p>\n</div>\n";
},"useData":true});
templates['pet'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "  <div class=\"pet-box clearfix panel\">\n    <div class=\"clearfix pet-header\">\n      <h2 class=\"pet-name\"><span class=\"label\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></h2>\n      <ul class=\"options\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n    <div class=\"clearfix pet-body\">\n      <ul class=\"clearing-thumbs clearing-feature\" data-clearing>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.photos : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n      "
    + ((stack1 = ((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "          <li>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "          </li>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "              <span>"
    + this.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + " <span class=\"icon-checkmark\"></span></span>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "              <strong>"
    + this.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</strong>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <li "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.first : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n            <a href="
    + alias3(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + " class=\"th\">\n              <img src="
    + alias3(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + " alt="
    + alias3(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"alt","hash":{},"data":data}) : helper)))
    + ">\n            </a>\n          </li>\n";
},"8":function(depth0,helpers,partials,data) {
    return "class=\"clearing-featured-img\"";
},"10":function(depth0,helpers,partials,data) {
    return "  <div class=\"alert-box\" data-alert>\n    <p>There are currently no available dogs</p>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pets : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
})();