Package.describe({
  name : "folks:product-provider",
  summary: "Product prodiver example package",
  version: "0.0.0",
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "folks:product-import",    
  ]);

  api.imply([
    "folks:product-import",    
  ]);

  // Lib
  api.addFiles([
    'provider.js'
  ],['client', 'server']);

});