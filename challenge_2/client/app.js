// const $ = require('jquery');

function handleSubmit() {
  var fd = new FormData();
  fd.append( 'file', input.files[0] );
  console.log('file', fd);
  debugger;
  $.ajax({
    type: "POST",
    url: '/',
    data: fd,
    dataType: 'json',
    success: function(result) {
      console.log(result);
    },
    error: function(xhr, status, error) {
      console.log('Error: ', error.message);
    }
  });
}

