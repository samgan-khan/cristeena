define([
    'jquery',
    'jq_validations',
    'methods',
    'jq_form'
], function ($, validation, methods) {
    let userForm = $("#user-form");
    userForm.validate({
        ignore: ":hidden",
        rules: {
            email: {
                email: true
            },
            password: "required",
            confirm_password: {
                equalTo: "#password"
            }
        },
        errorClass: 'has-error',
        validClass: 'has-success',
        highlight: function(element, errorClass, validClass) {
            $(element).parent()
                .removeClass(validClass)
                .addClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parent()
                .removeClass(errorClass)
                .addClass(validClass);
        },
    });

    userForm.ajaxForm(function(response) {
        if (response['status']) {
            methods.notify(
                response['title'],
                response['message'],
                'success'
            );
            methods.redirect(
                2,
                '/' + $("meta[name=role]").data('slug') + '/' + $("meta[name=module]").attr('content')
            );
        } else {
            methods.notify(
                response['title'],
                response['message'],
                'error'
            );
        }
    });


    /**
     * fill edit form data.
     */
    if (userForm.data('activity') === 'edit') {
        $.get('/api/users/view/' + userForm.data('slug'), function (response) {
                if (response['status']) {
                    $('#email').val(response['user']['email']);
                    $('#name').val(response['user']['name']);
                    if (!$.isEmptyObject(response['user']['profile_image'])) {
                        $('#preview_image').attr('src', '/img/profile/' + response['user']['profile_image']);
                    }
                } else {
                    methods.notify(
                        response['title'],
                        response['message'],
                        'error'
                    );
                    methods.redirect(
                        2,
                        '/' +  $("meta[name=role]").data('slug') +'/' + $("meta[name=module]").attr('content')
                    );
                }
            }
        );
    }

    /**
     * preview profile image.
     */
    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                $('#preview_image').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#profile_image").change(function() {
        readURL(this);
    });
});
