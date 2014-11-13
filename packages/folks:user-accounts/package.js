Package.describe({
  name: 'folks:user-accounts',
  summary: "Accounts template package",
  version: "0.0.0",
  git: 'https://github.com/FolksInteractive/SimiusLabs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    "folks:email",
    "folks:user",
    "useraccounts:core@1.2.2",
    "underscore",
    "templating",
    "fourseven:scss@0.9.5"
  ], ["client", "server"], {weak : false});

  api.imply([
    "useraccounts:core",
    "folks:email",
    "underscore",
    "templating",
  ], ["client", "server"]);

  // Client
  api.addFiles([
    "views/accounts.scss",
    "views/at_error.html",
    "views/at_error.js",
    "views/at_form.html",
    "views/at_form.js",
    "views/at_input.html",
    "views/at_input.js",
    "views/at_oauth.html",
    "views/at_oauth.js",
    "views/at_pwd_form.html",
    "views/at_pwd_form.js",
    "views/at_pwd_form_btn.html",
    "views/at_pwd_form_btn.js",
    "views/at_pwd_link.html",
    "views/at_pwd_link.js",
    "views/at_result.html",
    "views/at_result.js",
    "views/at_sep.html",
    "views/at_sep.js",
    "views/at_signin_link.html",
    "views/at_signin_link.js",
    "views/at_signup_link.html",
    "views/at_signup_link.js",
    "views/at_social.html",
    "views/at_social.js",
    "views/at_terms_link.html",
    "views/at_terms_link.js",
    "views/at_title.html",
    "views/at_title.js",
    "views/full_page_at_form.html",
  ], ["client"]);

  // Lib
  api.addFiles([
    "accounts.js",
    "t9n.js",
  ], ["client", "server"]);

  // Server
  api.addFiles([
    "email.js",
    "email_templates/invite.js",
  ], ["server"]);

  api.addFiles([
    "email_templates/invite.html"
  ], ["server"], {isAsset : true});
});
