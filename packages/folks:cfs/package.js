Package.describe({
  name: 'folks:cfs',
  summary: 'Package for Modulus tempstore',
  version: '0.0.0',
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use([
    "cfs:standard-packages",
  ], 'server');

  api.imply([
    "cfs:standard-packages@0.0.2",
  ], 'server');

  api.addFiles('cfs.js', 'server');
});