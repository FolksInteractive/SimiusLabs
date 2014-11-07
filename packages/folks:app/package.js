Package.describe({
  summary: "App package",
  version: "0.0.0",
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "templating",
    "iron:router",
    "meteorhacks:fast-render",
  ], ["client", "server"]);

  api.imply([
    "iron:router@1.0.1",
  ], ["client", "server"]);

  // Client
  api.add_files([
    "helpers.js",
  ], ['client']);

  // Lib
  api.add_files([
    "app.js",
    "router.js",
  ], ['client', 'server']);

  api.export("App", ['client', 'server']);
});