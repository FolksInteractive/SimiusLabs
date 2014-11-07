Mail = {};

Mail.siteName = "Simius Labs";

Mail.from = "Admin <francis@simiuslabs.com>";

Mail.render = function(template, params){
  return SSR.render(template, params);
}

Mail.compileTemplate = function(templateName, stringTemplateContent){
  return SSR.compileTemplate(templateName, stringTemplateContent);
}

Mail.send = function(params){
  params = params || {};

  _.defaults(params, {
    'to': to,
    'from': Mail.from,
    'subject': subject,
    'html': html
  })

  Email.send(params);
}