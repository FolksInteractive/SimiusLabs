Package.describe({
  name: 'folks:product-import',
  summary: 'Produc import package',
  version: '0.0.0',
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Npm.depends({
  'events' : '1.0.2',
  'util' : '0.10.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "folks:product",    
    "mongo",
    "underscore",
    "check"
  ]);

  api.imply([
    "folks:product",     
    "mongo",
    "underscore",
    "check" 
  ]);


  // Lib
  api.addFiles([
    'import.js',
    'permissions.js',
  ], ['client', 'server']);

  // Server
  api.addFiles([
    'methods.js',
    'stream.js'
  ], ['server']);

  api.export(["Product", "Products"], ['client', 'server'])
});