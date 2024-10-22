(function (){
    "use strict";

    const submenus = document.querySelectorAll('ul li ul');
    const menu = document.querySelectorAll('.menulink');

    // create a function that loops through the submenus and hides them
    function hideSubmenu() {
        for (let i = 0; i < submenus.length; i++) {
            submenus[i].className = 'hide-menu';
        }
    }

    hideSubmenu();

    // loop through the menus and show them when clicked
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', function (event) {
            event.preventDefault();

            // get the unordered list of the menu clicked
            const thisMenu = this.parentNode.querySelector('ul');
            
            // if the menu clicked is hidden, show its submenu
            if (thisMenu.classList.contains('hide-menu')) {
            // close other submenus, except the one clicked
                hideSubmenu();
                thisMenu.className = 'show-menu';
            }
            // if the menu clicked is not hidden, set it to hidden
            else {
                thisMenu.className = 'hide-menu';
            }
        });
    }
})();