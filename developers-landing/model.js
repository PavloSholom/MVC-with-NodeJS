module.exports = function(title, subtitle, developers) {
  return {
    title: title || 'Developers',
    subtitle: subtitle || 'Look at this nerds',
    developers: developers || []
  };
}
