Package.describe({
  name: "folks:email",
  summary: "Email package",
  version: "0.0.0",
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "meteorhacks:ssr",
    "email"
  ], ["client", "server"]);

  api.imply([
    "meteorhacks:ssr@1.2.0",
    "email",
  ], ["client", "server"]);

  // Client
  api.addFiles([], ["client"]);

  // Lib
  api.addFiles([], ["client", "server"]);

  // Server
  api.addFiles([
    'email.js'
  ], ["server"]);

  api.export('Mail', 'server');
});