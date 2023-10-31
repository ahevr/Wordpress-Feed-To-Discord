const axios = require('axios');
const discordWebhookURL = ''; // Discord Webhook URL'si

async function sendToDiscord(message) {
    try {
      const response = await axios.post(discordWebhookURL, { content: message });
      console.log('Discord mesajı gönderildi:', response.data);
    } catch (error) {
      console.error('Discord mesajı gönderme hatası:', error.response.data);
    }
  }

module.exports = { sendToDiscord };
