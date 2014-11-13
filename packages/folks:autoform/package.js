Package.describe({
  name: 'folks:autoform',
  summary: 'Folks\'s Autoform template',
  version: '0.0.0',
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');


  api.use([
    "aldeed:autoform",
    "templating",
  ], ["client", "server"]);

  api.imply([
    "aldeed:autoform@4.0.1",
    "templating",
  ], ["client", "server"]);

  //Client
  api.addFiles([
    'template.html',
    'template.js',
    'template.css',
  ], 'client');
});