/**
 * Created by anastasya on 10.5.16.
 */

$('#find').submit(function(event) {
  event.preventDefault();
  $.ajax({
    url : "/login",
    method: 'POST',
    data: {
      firstName: $(this).find('#name').val(),
    },
    success: function(response) {
      console.log('Login result:', response);

    },
    error: function(error) {
      console.log('Error:' + error);
    }
  })
});
