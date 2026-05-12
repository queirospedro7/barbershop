# 💈 Queiros Barber Shop - Landing Page Premium

> Barbearia premium em Fragoso. Website moderno com animações profissionais e formulário de contacto.

![Version](https://img.shields.io/badge/version-4.0-gold)
![Status](https://img.shields.io/badge/status-production-green)

---

## ✨ Características

### 🎨 Design Moderno
- **Animações Profissionais** - Efeitos suaves com scroll reveal
- **Design Responsivo** - Perfeito em desktop, tablet e mobile
- **Gradientes Premium** - Paleta de cores sofisticada com dourado e mogno
- **Tipografia Elegante** - Playfair Display + Montserrat

### 🚀 Funcionalidades
- ✅ Landing page completa com seções:
  - Hero com animações de entrada
  - Serviços com cards interativos
  - Galeria de trabalhos
  - Sobre o barbeiro
  - Formulário de contacto
- ✅ Formulário com validação em tempo real
- ✅ Notificações toast elegantes
- ✅ Scroll suave entre seções
- ✅ Navbar com efeito de scroll
- ✅ Menu mobile animado

### 🎭 Animações Implementadas
- **Hero**: Reveal progressivo com fade-up
- **Títulos**: Animação de linha por linha
- **Cards**: Hover com elevação 3D
- **Galeria**: Zoom-in com overlay gradiente
- **Formulário**: Inputs com linha animada
- **Botões**: Efeito ripple
- **Scroll**: Reveal suave ao scroll

---

## 📁 Estrutura do Projeto

```
barber/
├── index.html                 # Página principal
├── css/
│   └── styles.css            # Estilos completos
├── js/
│   └── app.js                # JavaScript funcional
├── img/
│   └── logo.png              # Logo da barbearia
└── README.md                 # Este arquivo
```

---

## 🚀 Como Usar

### 1. Abrir o Projeto

#### Opção A: Servidor Local (Recomendado)
```bash
# Se tiver Node.js instalado
npx serve .

# Ou use o Live Server do VS Code
# Ou qualquer servidor HTTP local
```

#### Opção B: Abrir Diretamente
- Abra `index.html` no navegador

### 2. Personalizar Conteúdo

#### Informações da Barbearia
Edite `index.html` e altere:
- Nome da barbearia
- Endereço e contactos
- Horários de funcionamento
- Preços dos serviços
- Texto sobre o barbeiro

#### Cores e Estilos
Edite `css/styles.css`:
```css
:root {
  --mogno: #2E1B13;      /* Cor principal */
  --ouro: #B8914D;       /* Cor de destaque */
  --cinza: #F5F5F0;      /* Cor de fundo */
}
```

#### Imagens
Substitua as URLs das imagens do Unsplash pelas suas próprias:
- Hero background
- Galeria de trabalhos
- Foto do barbeiro

### 3. Configurar Email

Para ativar o envio real de emails no formulário de contacto, edite `js/app.js` e integre com:
- **EmailJS** (gratuito, 200 emails/mês)
- **Formspree** (gratuito, 50 emails/mês)
- **Backend próprio** com Nodemailer

---

## 🎨 Personalização Avançada

### Adicionar Nova Seção
```html
<section id="nova-secao" class="section">
  <div class="container">
    <p class="section-subtitle reveal">Subtítulo</p>
    <h2 class="section-title reveal">Título Principal</h2>
    <span class="gold-line reveal"></span>
    <!-- Seu conteúdo aqui -->
  </div>
</section>
```

### Modificar Serviços
Edite a seção `#servicos` em `index.html`:
```html
<div class="service-card reveal reveal-delay-1">
  <div class="service-icon"><i class="fa fa-cut"></i></div>
  <h3 class="service-name">Nome do Serviço</h3>
  <p class="service-desc">Descrição do serviço...</p>
  <p class="service-price">€XX <span>/ sessão</span></p>
</div>
```

---

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: > 900px
- **Tablet**: 600px - 900px
- **Mobile**: < 600px

### Testar Responsividade
1. Abra o site no navegador
2. Pressione F12 (DevTools)
3. Clique no ícone de dispositivo móvel
4. Teste em diferentes tamanhos

---

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com Grid e Flexbox
- **JavaScript ES6+** - Funcionalidades interativas
- **Font Awesome 6** - Ícones
- **Google Fonts** - Tipografia (Playfair Display + Montserrat)

---

## 🎯 Versão 4.0 - Landing Page Limpa

### ✅ Removido
- ❌ Sistema de login/autenticação
- ❌ Dashboard administrativo
- ❌ Sistema de marcações online
- ❌ Gestão de utilizadores
- ❌ Base de dados simulada

### ✅ Mantido
- ✨ Design premium e elegante
- ✨ Animações suaves
- ✨ Formulário de contacto
- ✨ Galeria de trabalhos
- ✨ Seção sobre o barbeiro
- ✨ Responsividade total
- ✨ Menu mobile

---

## 📊 Performance

- ⚡ **Carregamento rápido** - Código otimizado
- 🎨 **Animações suaves** - 60 FPS
- 📱 **Mobile-first** - Otimizado para dispositivos móveis
- ♿ **Acessível** - Semântica HTML correta
- 🔍 **SEO-friendly** - Meta tags e estrutura otimizada

---

## 🐛 Resolução de Problemas

### Animações não funcionam
- Verifique se o JavaScript está carregado
- Confirme que não há erros no console (F12)

### Formulário não envia
- Verifique o console do navegador (F12)
- Confirme que todos os campos estão preenchidos
- Integre com serviço de email (EmailJS, Formspree)

### Estilos não aplicados
- Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique se o caminho do CSS está correto
- Confirme que não há erros no console

### Imagens não carregam
- Verifique a conexão com internet (imagens do Unsplash)
- Substitua por imagens locais se necessário
- Confirme os caminhos das imagens

---

## 📞 Contactos

**Queiros Barber Shop**
- 📍 Rua da Barbearia, 42, Fragoso
- 📞 +351 912 345 678
- 📧 info@queiros.pt
- 🌐 [Instagram](#) | [Facebook](#) | [TikTok](#)

---

## 📄 Licença

Este projeto é propriedade da Queiros Barber Shop.

---

## 🙏 Créditos

- **Imagens**: [Unsplash](https://unsplash.com)
- **Ícones**: [Font Awesome](https://fontawesome.com)
- **Fontes**: [Google Fonts](https://fonts.google.com)

---

**Versão**: 4.0 - Landing Page Limpa  
**Data**: Janeiro 2025  
**Status**: ✅ Produção

---

## 🚀 Próximos Passos

1. ✅ Substituir imagens do Unsplash por fotos reais
2. ✅ Configurar envio de email (EmailJS ou Formspree)
3. ✅ Adicionar Google Analytics (opcional)
4. ✅ Configurar domínio próprio
5. ✅ Otimizar imagens para web
6. ✅ Adicionar favicon personalizado
7. ✅ Testar em diferentes navegadores

---

**Desenvolvido com ❤️ para Queiros Barber Shop**
