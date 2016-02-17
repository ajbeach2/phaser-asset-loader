module.exports = function(source){
  this.cacheable();
  var s = source;
  var re = /"url":\s*\".*,/g;
  var m;
  do {
    m = re.exec(source);
    if (!!m) {
      var path = m[0].split(':')[1].trim().slice(0, -1);
      s = s.replace(path, 'require(' + path + ')');
    }
  } while (m);
  return s;
}
