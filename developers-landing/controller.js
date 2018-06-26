var developersHelper = require('../helpers/developers');

module.exports = function(req, res) {
  var developers = developersHelper.getAllDevelopers();
  var developerIds = Object.keys(developers);
  var developerName = developerIds.map(function(id) {
    return developers[id].name;
  });
  var developerNameString = developerName.join(', ');
  res.send(`Developers ${developerNameString}`);
};
