
var fx = require('../');

var button = document.querySelector('#toggle');
var content = document.querySelector('#content');

button.addEventListener('click', function(ev) {
    fx.slideUp(content);

    setTimeout(function() {
        fx.slideDown(content);
    }, 1000);
});

