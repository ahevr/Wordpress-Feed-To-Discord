const cron = require('node-cron');
const fs = require('fs');
const { fetchRSS } = require('./services/rss');
const { sendToDiscord } = require('./services/discord');

const storageFile = 'sentItems.json'; // Gönderilen öğelerin saklandığı dosya

// Her 1 dakikada bir çalıştırma
cron.schedule('* * * * *', async () => {
  const items = await fetchRSS();
  const sentItems = loadSentItems();

  if (items.length > 0) {
    // Gönderilmemiş öğeleri kontrol et
    for (const item of items) {
      if (!sentItems.includes(item.link)) {
        const message = `${item.title}\n${item.link}`;
        sendToDiscord(message);
        console.log('RSS öğesi Discord\'a gönderildi.');
        sentItems.push(item.link);
      }
    }

    // Gönderilen öğeleri kaydet
    saveSentItems(sentItems);
  } else {
    console.log('RSS beslemesi boş veya alınamadı.');
  }
});

function loadSentItems() {
  try {
    const data = fs.readFileSync(storageFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function saveSentItems(sentItems) {
  fs.writeFileSync(storageFile, JSON.stringify(sentItems), 'utf8');
}


