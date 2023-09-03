export const checkmode = () => {
    if (localStorage.getItem('SuperMode') === null) {
        localStorage.setItem('SuperMode', "false");
    }

    if (localStorage.getItem('SuperMode') === "true") {
        document.body.classList.add('darktheme');
    } else {
        document.body.classList.remove('darktheme');
    }
}