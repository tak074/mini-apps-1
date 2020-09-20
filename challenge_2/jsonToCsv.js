var csvConverter = function(data) {
  // let csv = 'data:text/csv;charset=utf-8,';
  let csv = '';
  let parsed = JSON.parse(data);
  let keys = Object.keys(parsed);

  (function findAllKeys(obj){
    if (obj['children'].length !== 0) {
      for (var i = 0; i < obj['children'].length; i++) {
        let currChild = obj['children'][i];
        for (var k in currChild) {
          if (keys.indexOf(k) === -1) {
            keys.push(k);
          }
        }
        findAllKeys(currChild);
      }
    }
  })(parsed);

  let copy = keys.slice();
  let removeIndex = keys.indexOf('children');
  copy.splice(removeIndex, 1);

  let line = copy.join(',');
  csv += line;

  (function recurse(currObj) {
    let children = {};
    let arr = [];
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === 'children') {
        children = currObj['children'];
        continue;
      }
      arr.push(currObj[keys[i]]);
    }

    csv += ',\n' + arr.join(',');

    if(!!children) {
      children.forEach((child) => {
        recurse(child);
      })
    }
  })(parsed);

  return csv;
};

module.exports.csvConverter = csvConverter;