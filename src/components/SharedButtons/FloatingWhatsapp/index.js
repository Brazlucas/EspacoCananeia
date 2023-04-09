import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function floatingWhatsapp() {
  return (
    <>
      <FloatingWhatsApp
        {
        ...{
            phoneNumber: '5511998992034',
            accountName: 'Espaço Cananeia',
            statusMessage: 'Normalmente responde em 1 hora',
            chatMessage: 'Olá! Como podemos te ajudar? :) 🤝',
            placeholder: 'Digite uma mensagem..',
            avatar: 'images/logo.png'
          }
        }
      />
    </>
  )
}