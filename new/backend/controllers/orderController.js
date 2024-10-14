const axios = require('axios');

const sendWhatsAppMessage = async (orderDetails) => {
  const message = `Pesanan Baru:\n${orderDetails.map(item => 
    `${item.name} - ${item.quantity} x Rp${item.price}`
  ).join('\n')}`;

  try {
    await axios.post('https://graph.facebook.com/v13.0/YOUR_PHONE_NUMBER_ID/messages', {
      messaging_product: 'whatsapp',
      to: '+6285880231697',
      type: 'text',
      text: { body: message }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('WhatsApp message sent successfully');
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
  }
};

// Gunakan fungsi ini setelah order berhasil dibuat
