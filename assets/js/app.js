/**
 * Created by anastasya on 10.5.16.
 */

$('#find').submit(function(event) {
  event.preventDefault();
  $.ajax({
    url : "/login",
    method: 'POST',
    data: {
      firstName: $(this).find('#inputName').val(),
    },
    success: function(response) {
      console.log('Login result:', response);
      if (response.result)
        $( "#find" ).append( "<div class='success'>File is generated</div>" );
      else  {
        $( "#find" ).append( "<div class='error'>File is't generated</div>" );
      }
    },
    error: function(error) {
      console.log('Error:' + error);
    }
  })
});
