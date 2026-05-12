/* ══════════════════════════════════════════════════
   QUEIROS BARBER SHOP - JAVASCRIPT AVANÇADO
   ══════════════════════════════════════════════════ */

// ── Loading Screen ────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 800);
    }
  }, 2200);
});

// ── Navbar scroll effect ──────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu toggle ────────────────────────────
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── Scroll reveal avançado ────────────────────────
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ── Parallax avançado no hero ─────────────────────
const heroSection = document.getElementById('hero');
if (heroSection) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const heroBg = document.querySelector('.hero-bg');
    
    if (scrolled < window.innerHeight) {
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
      }
      if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0002})`;
      }
    }
  }, { passive: true });
}

// ── Partículas flutuantes no hero ─────────────────
function createParticles() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: rgba(184, 145, 77, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      pointer-events: none;
      animation: particleFloat ${Math.random() * 10 + 10}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
      z-index: 1;
    `;
    hero.appendChild(particle);
  }
}
createParticles();

// ── Efeito de texto digitado no hero ──────────────
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  element.style.opacity = '1';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

setTimeout(() => {
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) {
    const originalText = heroSub.textContent;
    typeWriter(heroSub, originalText, 80);
  }
}, 2000);

// ── Animação da linha dourada ─────────────────────
const goldLines = document.querySelectorAll('.gold-line');
const goldObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      goldObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

goldLines.forEach(line => goldObserver.observe(line));

// ── Active nav link on scroll ─────────────────────
const sections = ['servicos', 'galeria', 'sobre', 'contacto'];
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 120;
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}, { passive: true });

// ── Toast notifications ───────────────────────────
function showToast(type, title, msg) {
  const icons = { 
    success: 'fa-check-circle', 
    error: 'fa-times-circle', 
    info: 'fa-info-circle' 
  };
  
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon"><i class="fa ${icons[type]}"></i></div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
    <div class="toast-progress"></div>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

// ── Form validation helpers ───────────────────────
function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isPhone(value) {
  // Remove espaços e caracteres especiais
  const cleaned = value.replace(/[\s\-\(\)]/g, '');
  // Aceita: 9 dígitos (912345678) ou com prefixo +351 (351912345678)
  return /^(\+351)?9\d{8}$/.test(cleaned);
}

function formatPhone(value) {
  const cleaned = value.replace(/[\s\-\(\)]/g, '');
  if (cleaned.startsWith('+351')) return cleaned;
  if (cleaned.startsWith('351')) return '+' + cleaned;
  if (cleaned.startsWith('9')) return '+351' + cleaned;
  return value;
}

function showError(errorId, show) {
  const errorEl = document.getElementById(errorId);
  if (!errorEl) return;
  show ? errorEl.classList.add('visible') : errorEl.classList.remove('visible');
}

function setLoading(btnId, loading) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  loading ? btn.classList.add('loading') : btn.classList.remove('loading');
  btn.disabled = loading;
}

// ── Contact form submission com EmailJS ──────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('c-nome').value.trim();
    const email = document.getElementById('c-email').value.trim();
    const telefone = document.getElementById('c-telefone').value.trim();
    const msg = document.getElementById('c-msg').value.trim();
    
    let valid = true;
    
    if (!nome || nome.length < 2) {
      showError('err-c-nome', true);
      document.getElementById('err-c-nome').textContent = 'Nome deve ter pelo menos 2 caracteres.';
      valid = false;
    } else {
      showError('err-c-nome', false);
    }
    
    if (!isEmail(email)) {
      showError('err-c-email', true);
      document.getElementById('err-c-email').textContent = 'Email inválido. Ex: nome@exemplo.com';
      valid = false;
    } else {
      showError('err-c-email', false);
    }
    
    if (!isPhone(telefone)) {
      showError('err-c-telefone', true);
      document.getElementById('err-c-telefone').textContent = 'Telefone inválido. Ex: 912345678 ou +351912345678';
      valid = false;
    } else {
      showError('err-c-telefone', false);
    }
    
    if (!msg) {
      showError('err-c-msg', true);
      valid = false;
    } else {
      showError('err-c-msg', false);
    }
    
    if (!valid) return;
    
    setLoading('btn-contact', true);
    
    // Envio real via EmailJS
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_8wu0ev9',
          template_id: 'template_36dihyg',
          user_id: 'goZlzfj4JlBD89tu-',
          template_params: {
            from_name: nome,
            from_email: email,
            from_phone: formatPhone(telefone),
            message: msg,
            to_name: 'Queiros Barber Shop',
            to_email: 'testequeirospedro@outlook.com'
          }
        })
      });
      
      if (response.ok) {
        showToast('success', 'Mensagem enviada!', 'Entraremos em contacto em breve.');
        contactForm.reset();
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      showToast('error', 'Erro ao enviar', 'Por favor, tente novamente ou contacte-nos diretamente.');
    } finally {
      setLoading('btn-contact', false);
    }
  });
}

// ── Smooth scroll for anchor links ───────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        toggleMobile();
      }
    }
  });
});

// ── Gallery Carousel com Drag e Auto-scroll ────────────────────
const galleryCarousel = document.querySelector('.gallery-carousel');
const galleryTrack = document.querySelector('.gallery-track');
const galleryProgressBar = document.querySelector('.gallery-progress-bar');

if (galleryCarousel && galleryTrack) {
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let autoScrollInterval;
  let velocity = 0;
  let lastPos = 0;
  let lastTime = Date.now();
  
  // Auto-scroll com mais velocidade
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (!isDragging) {
        currentTranslate -= 2.5;
        const minTranslate = -(galleryTrack.scrollWidth - galleryCarousel.offsetWidth);
        
        if (currentTranslate < minTranslate) {
          currentTranslate = 0;
        }
        
        prevTranslate = currentTranslate;
        galleryTrack.style.transform = `translateX(${currentTranslate}px)`;
        updateProgressBar();
      }
    }, 20);
  }
  
  startAutoScroll();
  
  // Mouse events
  galleryCarousel.addEventListener('mousedown', dragStart);
  galleryCarousel.addEventListener('mouseup', dragEnd);
  galleryCarousel.addEventListener('mouseleave', dragEnd);
  galleryCarousel.addEventListener('mousemove', drag);
  
  // Touch events
  galleryCarousel.addEventListener('touchstart', dragStart);
  galleryCarousel.addEventListener('touchend', dragEnd);
  galleryCarousel.addEventListener('touchmove', drag);
  
  function dragStart(event) {
    isDragging = true;
    startPos = getPositionX(event);
    lastPos = startPos;
    lastTime = Date.now();
    velocity = 0;
    animationID = requestAnimationFrame(animation);
    galleryCarousel.classList.add('dragging');
    galleryTrack.style.transition = 'none';
  }
  
  function drag(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime;
      
      if (timeDelta > 0) {
        velocity = (currentPosition - lastPos) / timeDelta;
      }
      
      currentTranslate = prevTranslate + currentPosition - startPos;
      
      const maxTranslate = 0;
      const minTranslate = -(galleryTrack.scrollWidth - galleryCarousel.offsetWidth);
      
      if (currentTranslate > maxTranslate) currentTranslate = maxTranslate;
      if (currentTranslate < minTranslate) currentTranslate = minTranslate;
      
      lastPos = currentPosition;
      lastTime = currentTime;
    }
  }
  
  function dragEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    
    // Aplicar momentum
    const momentum = velocity * 15;
    currentTranslate += momentum;
    
    const maxTranslate = 0;
    const minTranslate = -(galleryTrack.scrollWidth - galleryCarousel.offsetWidth);
    
    if (currentTranslate > maxTranslate) currentTranslate = maxTranslate;
    if (currentTranslate < minTranslate) currentTranslate = minTranslate;
    
    prevTranslate = currentTranslate;
    galleryCarousel.classList.remove('dragging');
    galleryTrack.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    galleryTrack.style.transform = `translateX(${currentTranslate}px)`;
    updateProgressBar();
    
    setTimeout(() => {
      galleryTrack.style.transition = 'none';
    }, 600);
  }
  
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }
  
  function animation() {
    galleryTrack.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animation);
  }
  
  function updateProgressBar() {
    const maxTranslate = galleryTrack.scrollWidth - galleryCarousel.offsetWidth;
    const progress = Math.abs(currentTranslate) / maxTranslate * 100;
    if (galleryProgressBar) {
      galleryProgressBar.style.width = `${Math.min(progress, 100)}%`;
    }
  }
}

// ── Galeria com modal profissional ────────────────
const galleryImages = [
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=90',
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&q=90',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=90',
  'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1200&q=90',
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=90',
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&q=90',
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&q=90',
  'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1200&q=90'
];

let currentImageIndex = 0;

function createThumbnails() {
  const container = document.getElementById('galleryThumbnails');
  container.innerHTML = '';
  
  galleryImages.forEach((src, index) => {
    const thumb = document.createElement('div');
    thumb.className = `gallery-thumb ${index === currentImageIndex ? 'active' : ''}`;
    thumb.innerHTML = `<img src="${src}" alt="Thumbnail ${index + 1}">`;
    thumb.onclick = () => {
      currentImageIndex = index;
      updateGalleryImage();
    };
    container.appendChild(thumb);
  });
}

function openGallery(index) {
  currentImageIndex = index;
  const modal = document.getElementById('galleryModal');
  const img = document.getElementById('galleryModalImg');
  const counter = document.getElementById('galleryCounter');
  
  img.src = galleryImages[currentImageIndex];
  counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
  createThumbnails();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  const modal = document.getElementById('galleryModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateGalleryImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateGalleryImage();
}

function updateGalleryImage() {
  const img = document.getElementById('galleryModalImg');
  const counter = document.getElementById('galleryCounter');
  
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = galleryImages[currentImageIndex];
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    img.style.opacity = '1';
    
    document.querySelectorAll('.gallery-thumb').forEach((thumb, index) => {
      thumb.classList.toggle('active', index === currentImageIndex);
    });
  }, 150);
}

document.querySelectorAll('.gallery-item').forEach((item, index) => {
  item.addEventListener('click', () => openGallery(index));
});

document.getElementById('galleryModal').addEventListener('click', (e) => {
  if (e.target.id === 'galleryModal') {
    closeGallery();
  }
});

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('galleryModal');
  if (!modal.classList.contains('open')) return;
  
  if (e.key === 'Escape') closeGallery();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
});
