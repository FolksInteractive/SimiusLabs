Package.describe({
  name : "folks:product",
  summary: "Product package",
  version: "0.0.0",
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "folks:user",
    "folks:i18n",
    "iron:router",
    "aldeed:simple-schema",
    "underscore",
  ], ["client", "server"]);

  api.imply([
    "folks:i18n",
    "aldeed:simple-schema@1.1.0",
    "underscore",
  ], ["client", "server"]);

  // Client
  api.addFiles([], ["client"]);

  // Lib
  api.addFiles([
    'product.js',
    'schemas.js',
    'permissions.js',
    'methods.js',
    'en.i18n.json',
  ], ['client', 'server']);

  // Server
  api.addFiles([], ["server"]);

  api.export(["Product", "Products"], ['client', 'server'])
});