import React, {useState as state} from 'react'

const switchMode = () => {
        if (localStorage.getItem('Siriusmode') === "true") {
            localStorage.setItem('Siriusmode', "false");
            document.body.classList.remove('darktheme');

        } else {
            localStorage.setItem('Siriusmode', "true");
            document.body.classList.add('darktheme');
        }
    
}

export default switchMode

