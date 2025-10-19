const mineflayer = require('mineflayer')

let bot

function createBot() {
  bot = mineflayer.createBot({
    host: 'THE-_-GHOST.aternos.me', // 🧩 عنوان السيرفر
    port: 42741,                    // 🧩 البورت
    username: 'bot',                // 🧩 اسم البوت
    version: '1.21.5'               // 🧩 إصدار ماينكرافت
  })

  bot.on('login', () => {
    console.log(`✅ دخل البوت باسم ${bot.username}`)
    setTimeout(() => {
      bot.chat('/login hasan11')
      console.log('🔐 تم إرسال أمر /login')
    }, 3000)
  })

  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    console.log(`${username}: ${message}`)
  })

  function antiAFK() {
    bot.setControlState('forward', true)
    setTimeout(() => bot.setControlState('forward', false), 2000)
  }
  setInterval(antiAFK, 60000)

  bot.on('end', () => {
    console.log('⚠️ تم قطع الاتصال.. سيتم إعادة الاتصال بعد 5 ثوانٍ')
    setTimeout(createBot, 5000)
  })

  bot.on('kicked', (reason) => console.log(`❌ تم طرد البوت: ${reason}`))
  bot.on('error', (err) => console.log(`🚨 خطأ: ${err}`))
}

createBot()
