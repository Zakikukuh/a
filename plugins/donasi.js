let handler = async m => m.reply(`Gopay:088902849350
Ovo:089515113218
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler