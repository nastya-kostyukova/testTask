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
      $('.result').remove();
      if (response.result)
        $( "#find" ).append( "<div class='result'><div class='success'>File is generated</div></div>" );
      else  {
        $( "#find" ).append( "<div class='result'><div class='error'>File is't generated</div></div>" );
      }
    },
    error: function(error) {
      console.log('Error:' + error);
    }
  })
});
