let rollUpBtn = document.querySelector('#scroll_top');

const scroll = () => {
    if (window.scrollY !== 0) {
        setTimeout(() => {
            window.scrollTo(0, window.scrollY - 50);
            scroll();
        }, 5);
    }
}

rollUpBtn.addEventListener('click', scroll);