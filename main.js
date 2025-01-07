$(document).ready(function () {
    $('.popup-link').magnificPopup({
        midClick: true, 
        closeBtnInside: true, 
        removalDelay: 300,
        mainClass: 'mfp-fade', 
    });

    // Optional: Close popup on button click
    $('.close-popup').on('click', function () {
        $.magnificPopup.close();
    });
});