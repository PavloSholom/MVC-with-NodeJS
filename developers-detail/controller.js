
var developersHelper = require('../helpers/developers');

module.exports = function(req, res) {
  var developerId = req.params.developerId;
  var developer = developersHelper.getDeveloperById(developerId);
  res.send(`Developers ${developer.name}`);
};
