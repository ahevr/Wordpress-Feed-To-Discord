
# Discord RSS Bot

Discord RSS Bot, RSS beslemelerini Discord sunucularına iletmek için kullanılan bir Node.js uygulamasıdır.

## Açıklama

Bu bot, belirlediğiniz RSS beslemelerini düzenli aralıklarla çeker ve bu içerikleri belirlediğiniz Discord kanallarına gönderir. Projeyi kullanarak Discord sunucularınızı güncel tutabilirsiniz.

## Özellikler

- Birden çok RSS beslemesini izleyebilir.
- RSS içeriğini zenginleştirilmiş metin veya gömme bağlantılarla Discord'a gönderebilir.
- Gönderilen içeriği özelleştirmek için şablonlar kullanabilirsiniz.

## Kullanım

Proje kullanımı oldukça basittir. İşte temel adımlar:

- Proje dizinine gidin ve bağımlılıkları yükleyin ``npm install``,
- Discord Webhook URL'sini services/discord.js dosyasında ayarlayın,
- RSS besleme URL'lerini services/rss.js dosyasında ayarlayın,
- Botu başlatmak için aşağıdaki komutu çalıştırın: ``node index.js``

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir çekme isteği açın. Her türlü katkıya açığız!
