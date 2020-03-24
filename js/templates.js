(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['name-age-block'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <div class=\"large-12 columns\">\n    <fieldset>\n      <div class=\"large-9 columns\">\n        <div class=\"row collapse\">\n          <div class=\"small-4 medium-3 columns\">\n            <label for=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_name\" class=\"prefix required\">Name</label>\n          </div>\n          <div class=\"small-8 medium-9 columns\">\n            <input id=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_name\" name=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_name\" type=\"text\" required>\n            <small class=\"error\">Required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"large-3 columns\">\n        <div class=\"row collapse\">\n          <div class=\"small-4 medium-3 columns\">\n            <label for=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_age\" class=\"prefix required\">Age</label>\n          </div>\n          <div class=\"small-5 medium-6 columns\">\n            <input id=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_age\" name=\"family_member_"
    + alias2(alias1(depth0, depth0))
    + "_age\" type=\"number\" pattern=\"number\" required>\n            <small class=\"error\">Required</small>\n          </div>\n          <div class=\"small-3 columns\">\n            <span class=\"postfix\">years</span>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"times")||(depth0 && lookupProperty(depth0,"times"))||alias2).call(alias1,(lookupProperty(helpers,"plus")||(depth0 && lookupProperty(depth0,"plus"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"num") : depth0),-1,{"name":"plus","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":22}}}),{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":31,"column":10}}})) != null ? stack1 : "");
},"useData":true});
templates['num-cats-dogs-block'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <div class=\"large-12 columns num-of-cats-and-dogs-block-fieldset\">\n    <fieldset>\n      <div class=\"row\">\n        <div class=\"large-5 columns\">\n          <div class=\"row collapse\">\n            <div class=\"small-4 columns\">\n              <label for=\"cats_dogs_name_"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"prefix required\">Name</label>\n            </div>\n            <div class=\"small-8 columns\">\n              <input id=\"cats_dogs_name_"
    + alias2(alias1(depth0, depth0))
    + "\" name=\"cats_dogs_name_"
    + alias2(alias1(depth0, depth0))
    + "\" type=\"text\" required>\n              <small class=\"error\">Required</small>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"large-3 columns\">\n          <div class=\"row collapse\">\n            <div class=\"small-4 columns\">\n              <label for=\"cats_dogs_type_"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"prefix required\">Type</label>\n            </div>\n            <div class=\"small-8 columns\">\n              <select id=\"cats_dogs_type_"
    + alias2(alias1(depth0, depth0))
    + "\" name=\"cats_dogs_type_"
    + alias2(alias1(depth0, depth0))
    + "\" required>\n                <option value selected> Please Select </option>\n                <option value=\"dog\"> Dog </option>\n                <option value=\"cat\"> Cat </option>\n              </select>\n              <small class=\"error\">Required</small>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"large-4 columns\">\n          <div class=\"row collapse\">\n            <div class=\"small-4 columns\">\n              <label for=\"cats_dogs_breed_"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"prefix required\">Breed</label>\n            </div>\n            <div class=\"small-8 columns\">\n              <input id=\"cats_dogs_breed_"
    + alias2(alias1(depth0, depth0))
    + "\" name=\"cats_dogs_breed_"
    + alias2(alias1(depth0, depth0))
    + "\" type=\"text\" required>\n              <small class=\"error\">Required</small>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"large-6 columns\">\n          <div class=\"row collapse\">\n            <div class=\"small-4 medium-4 columns\">\n              <label for=\"cats_dogs_age_"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"prefix required\">Age</label>\n            </div>\n            <div class=\"small-5 medium-5 columns\">\n              <input id=\"cats_dogs_age_"
    + alias2(alias1(depth0, depth0))
    + "\" name=\"cats_dogs_age_"
    + alias2(alias1(depth0, depth0))
    + "\" type=\"number\" required>\n              <small class=\"error\">Required</small>\n            </div>\n            <div class=\"small-3 columns\">\n              <span class=\"postfix\">years</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"large-6 columns\">\n          <div class=\"row collapse\">\n            <div class=\"small-4 columns\">\n              <label for=\"cats_dogs_sex_"
    + alias2(alias1(depth0, depth0))
    + "\" class=\"prefix required\">Sex</label>\n            </div>\n            <div class=\"small-8 columns text-center\">\n              <select id=\"cats_dogs_sex_"
    + alias2(alias1(depth0, depth0))
    + "\" name=\"cats_dogs_sex_"
    + alias2(alias1(depth0, depth0))
    + "\" required>\n                <option value selected> Please Select </option>\n                <option value=\"male-neutered\"> Male / Neutered</option>\n                <option value=\"male-not-neutered\"> Male / Not Neutered</option>\n                <option value=\"female-spayed\"> Female / Spayed</option>\n                <option value=\"female-not-spayed\"> Female / Not Spayed</option>\n              </select>\n              <small class=\"error\">Required</small>\n            </div>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"large-12 columns\">\n  <label for=\"cats_dogs_name_1\" class=\"required\">Please fill out <strong>all</strong> the required information for <strong>each</strong> cat and dog. If you have more than 6, simply fill in the additional information in the form field below.</label>\n</div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"times")||(depth0 && lookupProperty(depth0,"times"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"num") : depth0),{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":88,"column":10}}})) != null ? stack1 : "");
},"useData":true});
templates['num-vets-block'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "  <div class=\"large-12 columns num-of-vets-block-fieldset\">\n    <fieldset>\n      <div class=\"large-8 columns\">\n        <div class=\"row collapse\">\n          <div class=\"small-4 columns\">\n            <label for=\"vet_"
    + alias2(alias1(depth0, depth0))
    + "_clinic_name\" class=\"prefix required\">Clinic Name</label>\n          </div>\n          <div class=\"small-8 columns\">\n            <input id=\"vet_"
    + alias2(alias1(depth0, depth0))
    + "_clinic_name\" name=\"vet_"
    + alias2(alias1(depth0, depth0))
    + "_clinic_name\" type=\"text\" required>\n            <small class=\"error\">Required</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"large-4 columns\">\n        <div class=\"row collapse\">\n          <div class=\"small-4 columns\">\n            <label for=\"vet_"
    + alias2(alias1(depth0, depth0))
    + "_phone\" class=\"prefix required\">Phone</label>\n          </div>\n          <div class=\"small-8 columns\">\n            <input id=\"vet_"
    + alias2(alias1(depth0, depth0))
    + "_phone\" name=\"vet_"
    + alias2(alias1(depth0, depth0))
    + "_phone\" type=\"tel\" required>\n            <small class=\"error\">Number Required</small>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"large-12 columns\">\n  <label for=\"vet_1_clinic_name\" class=\"required\">Please list <strong>each</strong> vet clinic name and associated phone number.</label>\n</div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"times")||(depth0 && lookupProperty(depth0,"times"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"num") : depth0),{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":32,"column":10}}})) != null ? stack1 : "");
},"useData":true});
templates['pet-error-alert'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"petfinder-api-error\" data-alert class=\"alert-box alert\">\n  <p>\n    Oops, something went wrong! Please try again later or go directly to our <a href=\"http://www.petfinder.com/pet-search?shelterid=SC92\">Petfinder site</a>.\n    <a href=\"#\" class=\"close\">&times;</a>\n  </p>\n</div>\n";
},"useData":true});
templates['pet'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"pet-box clearfix panel\">\n    <div class=\"clearfix pet-header\">\n      <h2 class=\"pet-name\"><span class=\"label\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":47},"end":{"line":4,"column":55}}}) : helper)))
    + "</span></h2>\n      <ul class=\"options\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"options") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":14,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n    <div class=\"clearfix pet-body\">\n      <ul class=\"clearing-thumbs clearing-feature\" data-clearing>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"photos") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":25,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\n      "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":27,"column":16}}}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"icon") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":12,"column":19}}})) != null ? stack1 : "")
    + "          </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <span>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":9,"column":28}}}) : helper)))
    + " <i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <strong>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":11,"column":22},"end":{"line":11,"column":30}}}) : helper)))
    + "</strong>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"first") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":14},"end":{"line":20,"column":63}}})) != null ? stack1 : "")
    + ">\n            <a href="
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":21,"column":27}}}) : helper)))
    + " class=\"th\">\n              <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":22,"column":23},"end":{"line":22,"column":30}}}) : helper)))
    + " alt="
    + alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":22,"column":35},"end":{"line":22,"column":42}}}) : helper)))
    + ">\n            </a>\n          </li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "class=\"clearing-featured-img\"";
},"10":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"alert-box\" data-alert>\n    <p>There are currently no available dogs</p>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pets") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":34,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();