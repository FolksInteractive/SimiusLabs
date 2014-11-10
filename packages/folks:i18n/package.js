Package.describe({
  name: 'folks:i18n',
  summary: 'i18n package',
  version: '1.0.0',
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "tap:i18n",
    "tap:i18n-db",
  ], ["client", "server"]);

  api.imply([
    "tap:i18n@1.0.7",
    "tap:i18n-db",
    "aldeed:simple-schema@1.1.0",
  ], ["client", "server"]);

  // Lib
  api.add_files([
    "i18n.js",
    "en.i18n.json",
    "simpleschema.js",
    "simpleschema.en.i18n.json",
    "simpleschema.fr.i18n.json",
  ], ['client', 'server']);

  api.export(["i18n"], ['client', 'server']);
});