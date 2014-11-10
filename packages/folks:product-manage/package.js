Package.describe({
  summary: "Product management package",
  version: "0.0.0",
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "folks:product",
    "iron:router",
    "meteorhacks:subs-manager",
    "aldeed:autoform",
    "tap:i18n",
    "underscore",
    "templating",
    "reactive-var",
    "reywood:bootstrap3-sass",
  ], ["client", "server"], {weak : false});

  api.imply([
    "folks:product",
    "iron:router",
    "meteorhacks:subs-manager",
    "aldeed:autoform@4.0.1",
    "tap:i18n",
    "underscore",
    "templating",
  ], ["client", "server"]);

  // Client
  api.addFiles([
    "views/manage.scss",
    "views/details.html",
    "views/details.js",
    "views/list.html",
    "views/list.js",
    "views/table.html",
    "views/table.js",
    "views/search.html",
    "views/search.js",
  ], ["client"]);

  // Lib
  api.addFiles([
    'manage.js',
    'product.js',
    'en.i18n.json'
  ], ["client", "server"]);

  // Server
  api.addFiles([
    "publications.js",
  ], ["server"]);
});

Package.onTest(function(api) {
  api.use('tinytest');
});
