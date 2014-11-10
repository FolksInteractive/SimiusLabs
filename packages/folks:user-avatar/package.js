Package.describe({
  name: 'folks:user-avatar',
  summary: "Add avatar to user",
  version: "0.0.2",
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use([
    "folks:user",
    "cfs:standard-packages",
    "cfs:graphicsmagick",
    "cfs:filesystem",
    "underscore",
  ], ["client", "server"]);

  api.imply([
    "folks:user@0.0.0",
    "cfs:standard-packages@0.0.2",
    "cfs:graphicsmagick@0.0.1",
    "underscore",
  ], ["client", "server"]);

  api.addFiles([
    'avatar.js',
    'methods.js',
    'model.js'
  ], ["client", "server"]);
});