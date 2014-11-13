Package.describe({
  name: 'folks:user-manage',
  summary: "User management package",
  version: "0.0.0",
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "folks:user",
    "iron:router",
    "aldeed:autoform",
    "meteorhacks:subs-manager",
    "tap:i18n",
    "underscore",
    "templating",
    "reactive-var",
    "reywood:bootstrap3-sass",
  ], ["client", "server"], {weak : false});

  api.imply([
    "folks:user",
    "iron:router",
    "aldeed:autoform",
    "meteorhacks:subs-manager",
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
    'user.js',
    'router.js',
    'en.i18n.json',
  ], ["client", "server"]);

  // Server
  api.addFiles([
    "publications.js",
  ], ["server"]);
});

Package.onTest(function(api) {
  api.use('tinytest');
});
