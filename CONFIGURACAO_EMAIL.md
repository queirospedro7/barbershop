# 📧 Configuração do Envio de Email

## EmailJS - Serviço Gratuito (200 emails/mês)

### 1. Criar Conta
1. Aceda a [EmailJS](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme o email de verificação

### 2. Configurar Serviço de Email
1. No dashboard, vá a **Email Services**
2. Clique em **Add New Service**
3. Escolha o seu provedor (Gmail, Outlook, etc.)
4. Siga as instruções para conectar
5. Copie o **Service ID** (ex: `service_abc123`)

### 3. Criar Template
1. Vá a **Email Templates**
2. Clique em **Create New Template**
3. Use este template:

```
Assunto: Nova Mensagem de {{from_name}}

De: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado via formulário de contacto
Queiros Barber Shop
```

4. Copie o **Template ID** (ex: `template_xyz789`)

### 4. Obter Public Key
1. Vá a **Account** → **General**
2. Copie a **Public Key** (ex: `user_abc123xyz`)

### 5. Configurar no Código
Abra `js/app.js` e substitua na linha 185:

```javascript
service_id: 'SEU_SERVICE_ID',      // Cole aqui o Service ID
template_id: 'SEU_TEMPLATE_ID',    // Cole aqui o Template ID
user_id: 'SEU_PUBLIC_KEY',         // Cole aqui a Public Key
```

### 6. Testar
1. Abra `index.html` no navegador
2. Preencha o formulário de contacto
3. Clique em "Enviar Mensagem"
4. Verifique o email configurado no EmailJS

---

## Alternativa: Formspree (50 emails/mês)

### Configuração Rápida
1. Aceda a [Formspree](https://formspree.io/)
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Copie o endpoint (ex: `https://formspree.io/f/abc123`)

### Código Alternativo
Substitua o código do formulário em `js/app.js`:

```javascript
try {
  const response = await fetch('https://formspree.io/f/SEU_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: nome,
      email: email,
      message: msg
    })
  });
  
  if (response.ok) {
    showToast('success', 'Mensagem enviada!', 'Entraremos em contacto em breve.');
    contactForm.reset();
  } else {
    throw new Error('Erro ao enviar');
  }
} catch (error) {
  showToast('error', 'Erro ao enviar', 'Por favor, tente novamente.');
} finally {
  setLoading('btn-contact', false);
}
```

---

## ✅ Funcionalidades Implementadas

### 📞 Telefone com Opções
- Ao passar o rato sobre o número de telefone, aparece popup com:
  - **WhatsApp**: Abre conversa no WhatsApp Web
  - **Ligar**: Inicia chamada telefónica

### 📍 Mapa ao Hover
- Ao passar o rato sobre a morada, aparece mapa do Google Maps
- **IMPORTANTE**: Substitua as coordenadas no iframe em `index.html`:
  - Procure por `info-location` 
  - Edite o `src` do iframe com as coordenadas corretas de Fragoso

### 📧 Envio de Email Real
- Formulário integrado com EmailJS
- Validação em tempo real
- Notificações toast elegantes
- Loading state no botão

---

## 🔧 Personalização

### Alterar Número de Telefone
Em `index.html`, procure por `+351 912 345 678` e substitua pelo número real.

### Alterar Coordenadas do Mapa
1. Aceda ao [Google Maps](https://www.google.com/maps)
2. Procure pela morada: "Rua da Barbearia, 42, Fragoso"
3. Clique em "Partilhar" → "Incorporar um mapa"
4. Copie o código iframe
5. Cole em `index.html` na seção `.location-map`

---

**Desenvolvido para Queiros Barber Shop** 💈
