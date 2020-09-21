
function download() {
  let csv = document.getElementById('output').innerHTML;
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'file.csv';
  hiddenElement.click();
}

