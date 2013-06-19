
/*
	richisCore v1.0
	@Author @richistron
	@description coffeeScript and backbone core
	@License MIT
*/

(function() {
  var APP, App, app;

  APP = window.APP || {};

  /*
  	document view
  */

  App = Backbone.View.extend({
    Routers: new (Backbone.Router.extend({
      initialize: function() {
        var _this = this;
        this.sectionCollection = new APP.Collections.sectionCollection;
        this.sectionCollectionView = new APP.Views.sectionCollectionView({
          el: $("#container"),
          collection: this.sectionCollection
        });
        this.defaultSection = "blogs";
        return this.sectionCollection.fetch({
          success: function() {
            var section;
            section = window.location.hash;
            if (section === "") {
              section = _this.defaultSection;
            } else {
              section = section.replace("#", "");
            }
            return _this.sectionCollectionView.showSection(section);
          }
        });
      },
      routes: {
        "(:idStr)": "index"
      },
      index: function(id) {
        if (id == null) id = "blogs";
        return this.sectionCollectionView.showSection(id);
      }
    })),
    events: {
      "click #navigation a": function(e) {
        e.preventDefault();
        return Backbone.history.navigate(e.target.hash, {
          trigger: true
        });
      },
      "click footer a": function(e) {
        var link;
        e.preventDefault();
        link = e.currentTarget.href;
        return window.open(link, "_blank");
      }
    },
    start: function() {
      return Backbone.history.start({
        pushState: false
      });
    }
  });

  APP.loading = "<img src=\"/img/loading.gif\" alt=\"loading...\" />";

  window.APP = APP;

  /*
  	new app
  */

  app = new App({
    el: document.body
  });

  $(document).ready(function() {
    return app.start();
  });

}).call(this);
