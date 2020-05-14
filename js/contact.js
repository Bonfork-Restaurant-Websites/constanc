
if ($('#contact-form').length) {
    $('#contact-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.getElementById('alert-success').style.display = 'block';
                        console.log("success");
                    },

                    error: function(){
                        document.getElementById('alert-error').style.display = 'block';
                        console.log("error");
                    }
                });
            }
        });
    });
}