export const checkmode = () => {
    if (localStorage.getItem('Siriusmode') === null) {
        localStorage.setItem('Siriusmode', "false");
    }

    if (localStorage.getItem('Siriusmode') === "true") {
        document.body.classList.add('darktheme');
    } else {
        document.body.classList.remove('darktheme');
    }
}