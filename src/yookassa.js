import YooKassa from 'yookassa'

const shopId = '371150'
const secretKey = 'test_j3G_6WeKg9Nik7xfJnECBZkT0ypeQMexKtKfM6_6o0o' // Замените на ваш секретный ключ

const yookassa = new YooKassa(shopId, secretKey)

export default yookassa
