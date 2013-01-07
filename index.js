
function clearTransitions(element) {
    var saved =
        element.style.transition ||
        element.style.WebkitTransition ||
        element.style.MozTransition ||
        element.style.MsTransition || '';

    element.style.WebkitTransition = 'none';
    element.style.MozTransition = 'none';
    element.style.MsTransition = 'none';
    //element.style.transition = 'none';

    return saved;
}

function recoverTransitions(element, saved) {
    element.style.MozTransition = saved;
    element.style.WebkitTransition = saved;
    element.style.MsTransition = saved;
    //element.style.transtion = saved;
}

function slideUp(element) {
    var saved = clearTransitions(element);

    // save actual element height
    element.style.height = element.clientHeight;

    element._saved_height = element.style.height;

    // transitions don't enable/disable immediately
    setTimeout(function() {
        recoverTransitions(element, saved);

        // after transition is set
        // make height go to 0
        setTimeout(function() {
            element.style.height = 0;
        }, 10);
    }, 10);
}

function slideDown(element) {

    element.addEventListener('webkitTransitionEnd', clear);
    element.addEventListener('mozTransitionEnd', clear);

    // need to recover saved height
    element.style.height = element._saved_height;

    function clear() {
        element.removeEventListener('webkitTransitionEnd', clear);
        element.removeEventListener('mozTransitionEnd', clear);

        var saved = clearTransitions(element);

        element.style.removeProperty('height');
        setTimeout(function() {
            recoverTransitions(element, saved);
        }, 10);
    }
}

module.exports.slideUp = slideUp;
module.exports.slideDown = slideDown;

