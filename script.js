async function fetchPairingCode() {
  const codeElement = document.getElementById("code");
  const statusElement = document.getElementById("status");

  try {
    const response = await fetch("/pair-code");
    const data = await response.json();

    if (data.code) {
      codeElement.textContent = data.code;
      statusElement.textContent = "Go to WhatsApp → Linked Devices → Enter Code";
} else {
      codeElement.textContent = "Not available";
      statusElement.textContent = "Bot is not ready yet.";
}
} catch (error) {
    codeElement.textContent = "Error";
    statusElement.textContent = "Could not fetch pairing code.";
}
}

fetchPairingCode();
