module.exports = function(source) {
  this.cacheable();
  return source.replace(/"url"\s*:\s*"([^"]*)"/g, function(match, path) {
    return '"url":require("' + path + '")';
  });
}
