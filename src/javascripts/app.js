var ENTER_KEY = 13;
var ESC_KEY = 27;
var app = {
  views: {},
  models: {},
  collections: {},
  routes: {},
  router: {},
  appView: null,
  todos: null,
  initialize: function () {
    app.todos = new app.collections.Todos();
    app.appView = new app.views.App();
    app.router = new app.routes.TodoRouter();
    Backbone.history.start();
    return this;
  }
};
$(function () {
  app.initialize();
});