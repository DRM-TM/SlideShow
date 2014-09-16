
var items, speed;

items = $('ul li')
speed = 500;
$(document).ready(function (e) {

    items.each(function (i, element) {
        $(element).delay(speed * i).fadeIn(speed);
    })

})