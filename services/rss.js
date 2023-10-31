const Parser = require('rss-parser');
const parser = new Parser();

async function fetchRSS() {
  const feedURL = ''; // WordPress RSS besleme URL'si
  try {
    const feed = await parser.parseURL(feedURL);
    return feed.items;
  } catch (error) {
    console.error('RSS beslemesi çekme hatası:', error);
    return [];
  }
  
}

module.exports = { fetchRSS };
