
$(document).ready(function(){
    $('.js-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: $('.js-prev'),
        nextArrow: $('.js-next'),
        appendDots: $('.js-pagination')
    });

    $('.form__check-input').prop('checked', false);
    $('.form__btn').prop('disabled', true);


    $('.form__check-input').click(function(){
        $('.form__btn').prop("disabled", !$('.form__btn').prop("disabled"));
    });


    $('.form__content').submit(function(e) {

        var telegram = $('.form__input--telegram').val();
        var email = $('#email').val();

        if (!telegram) {
            e.preventDefault();
            $('.error').text('Поле пустое');
            $('.form__input--telegram').prop('placeholder','');
            $('.form__input--telegram').css({'border' : '1px solid red'});
        } else {
            var telegramValidate = /@([A-Za-z0-9_]{1,15})/;
            var phoneValidate = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            if(telegramValidate.test(telegram) || phoneValidate.test(telegram)) {
                $('.error').remove();
            } else {
                e.preventDefault();
                $('.error').text('Нужно ввести номер телефона или @name');
                $('.form__input--telegram').prop('placeholder','');
                $('.form__input--telegram').css({'border' : '1px solid red'});
            }
        }

        if(!email) {
            e.preventDefault();
            $('.error-mail').text('Введите email');
            $('#email').css({'border' : '1px solid red'});
        }

    });
});