(function(window, document) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {

        var mobileToggle = document.getElementById('mobileToggle'),
            primaryNav = document.getElementById('primaryNavigation');

        mobileToggle.addEventListener('click', function() {
            primaryNav.classList.toggle('sidebar__list--visible');
        });

    });


})(window, document);
