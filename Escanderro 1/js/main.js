// Language switcher functionality
function toggleLanguage() {
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLang = document.querySelector('.lang-option.active').dataset.lang;
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    
    // Update active state
    langOptions.forEach(option => {
        if (option.dataset.lang === newLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Update all text content
    updateLanguage(newLang);
}

function updateLanguage(lang) {
    const translations = {
        ru: {
            services: 'Услуги',
            prices: 'Цены',
            contacts: 'Контакты',
            heroTitle: 'Создаю биты, которые запомнятся',
            heroSubtitle: 'Качественные биты в стилях Trap, Drill, Hip-Hop',
            aboutTitle: 'О себе',
            aboutText: 'Привет! Я ESCANDERRO — музыкальный продюсер с многолетним опытом создания битов для артистов разных уровней. Специализируюсь на современных жанрах: Trap, Drill, Hip-Hop. Мой подход — это сочетание технического мастерства и креативности.',
            servicesTitle: 'Мои услуги',
            beatCreation: 'Создание битов',
            beatCreationDesc: 'Уникальные биты в любом стиле. От мелодичного Trap до жесткого Drill. Работаю с самыми современными звуками и техниками.',
            mixing: 'Сведение',
            mixingDesc: 'Профессиональное сведение треков. Балансировка всех элементов композиции для получения чистого и мощного звучания.',
            mastering: 'Мастеринг',
            masteringDesc: 'Финальная обработка для релиза. Доведение трека до коммерческого уровня громкости и качества звучания.',
            pricesTitle: 'Цены',
            popular: 'Популярно',
            order: 'Заказать',
            contactsTitle: 'Контакты',
            email: 'Email',
            phone: 'Телефон',
            emailDesc: 'Для коммерческих предложений и сотрудничества',
            phoneDesc: 'Звонки только по предварительной договоренности',
            soundcloudDesc: 'Слушайте мои последние работы',
            telegramPriority: 'Telegram — приоритетный способ связи',
            // Pricing cards
            basicWav: 'Базовый WAV',
            basicMp3: 'Базовый MP3',
            fullRights: 'Полные права',
            mixMaster: 'Сведение и мастеринг',
            perBeat: '/ бит',
            perTrack: '/ трек',
            wavFormat: 'WAV формат',
            mp3Format: 'MP3 320kbps',
            noExclusive: 'Без эксклюзивных прав',
            catalogBeat: 'Готовый бит из каталога',
            basicLicense: 'Базовая лицензия',
            wavStems: 'WAV + Stems',
            exclusiveRights: 'Эксклюзивные права',
            customBeat: 'Кастомный бит под заказ',
            revisions3: '3 правки включены',
            prioritySupport: 'Приоритетная поддержка',
            proMixing: 'Профессиональное сведение',
            industryMastering: 'Индустриальный мастеринг',
            freeRevisions: '3 бесплатные правки',
            delivery24: 'Доставка 24-48 часов',
            radioQuality: 'Радио-качество'
        },
        en: {
            services: 'Services',
            prices: 'Prices',
            contacts: 'Contact',
            heroTitle: 'Creating beats that will be remembered',
            heroSubtitle: 'Quality beats in Trap, Drill, Hip-Hop styles',
            aboutTitle: 'About me',
            aboutText: "Hi! I'm ESCANDERRO — a music producer with years of experience creating beats for artists of all levels. I specialize in modern genres: Trap, Drill, Hip-Hop. My approach combines technical mastery with creativity.",
            servicesTitle: 'My Services',
            beatCreation: 'Beat Creation',
            beatCreationDesc: 'Unique beats in any style. From melodic Trap to hard Drill. Working with the most modern sounds and techniques.',
            mixing: 'Mixing',
            mixingDesc: 'Professional track mixing. Balancing all elements of the composition for clean and powerful sound.',
            mastering: 'Mastering',
            masteringDesc: 'Final processing for release. Bringing the track to commercial loudness and sound quality.',
            pricesTitle: 'Prices',
            popular: 'Popular',
            order: 'Order',
            contactsTitle: 'Contact',
            email: 'Email',
            phone: 'Phone',
            emailDesc: 'For business inquiries and collaboration',
            phoneDesc: 'Calls by appointment only',
            soundcloudDesc: 'Listen to my latest works',
            telegramPriority: 'Telegram is the priority contact method',
            // Pricing cards
            basicWav: 'Basic WAV',
            basicMp3: 'Basic MP3',
            fullRights: 'Full Rights',
            mixMaster: 'Mix & Master',
            perBeat: '/ beat',
            perTrack: '/ track',
            wavFormat: 'WAV format',
            mp3Format: 'MP3 320kbps',
            noExclusive: 'Non-exclusive rights',
            catalogBeat: 'Ready beat from catalog',
            basicLicense: 'Basic license',
            wavStems: 'WAV + Stems',
            exclusiveRights: 'Exclusive rights',
            customBeat: 'Custom beat to order',
            revisions3: '3 revisions included',
            prioritySupport: 'Priority support',
            proMixing: 'Professional mixing',
            industryMastering: 'Industry-standard mastering',
            freeRevisions: '3 free revisions',
            delivery24: '24-48 hour delivery',
            radioQuality: 'Radio-ready quality'
        }
    };
    
    const t = translations[lang];
    
    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update prices based on language
    const priceElements = document.querySelectorAll('.pricing-price[data-currency]');
    priceElements.forEach(element => {
        const priceText = element.textContent;
        if (lang === 'en') {
            // Convert to EUR
            if (priceText.includes('₽4,000')) {
                element.innerHTML = '€40 <span data-lang-key="perBeat">/ beat</span>';
            } else if (priceText.includes('₽2,500')) {
                element.innerHTML = '€25 <span data-lang-key="perBeat">/ beat</span>';
            } else if (priceText.includes('₽15,000')) {
                element.innerHTML = '€150 <span data-lang-key="perBeat">/ beat</span>';
            } else if (priceText.includes('₽5,000')) {
                element.innerHTML = '€50 <span data-lang-key="perTrack">/ track</span>';
            }
        } else {
            // Convert back to RUB
            if (priceText.includes('€40')) {
                element.innerHTML = '₽4,000 <span data-lang-key="perBeat">/ бит</span>';
            } else if (priceText.includes('€25')) {
                element.innerHTML = '₽2,500 <span data-lang-key="perBeat">/ бит</span>';
            } else if (priceText.includes('€150')) {
                element.innerHTML = '₽15,000 <span data-lang-key="perBeat">/ бит</span>';
            } else if (priceText.includes('€50')) {
                element.innerHTML = '₽5,000 <span data-lang-key="perTrack">/ трек</span>';
            }
        }
    });
    
    // Update navigation
    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(item => {
        const text = item.textContent.trim();
        if (text === 'Услуги' || text === 'Services') item.textContent = t.services;
        if (text === 'Цены' || text === 'Prices') item.textContent = t.prices;
        if (text === 'Контакты' || text === 'Contact') item.textContent = t.contacts;
    });
    
    // Update other elements without data-lang-key
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    
    const aboutTitle = document.querySelector('.about-card h3');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    
    const aboutText = document.querySelector('.about-card p');
    if (aboutText) aboutText.textContent = t.aboutText;
    
    // Update section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        if (title.textContent.includes('услуг') || title.textContent.includes('Service')) {
            title.textContent = t.servicesTitle;
        }
        if (title.textContent.includes('Цен') || title.textContent.includes('Price')) {
            title.textContent = t.pricesTitle;
        }
        if (title.textContent.includes('Контакт') || title.textContent.includes('Contact')) {
            title.textContent = t.contactsTitle;
        }
    });
    
    // Update service cards
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards[0]) {
        serviceCards[0].querySelector('h3').textContent = t.beatCreation;
        serviceCards[0].querySelector('p').textContent = t.beatCreationDesc;
    }
    if (serviceCards[1]) {
        serviceCards[1].querySelector('h3').textContent = t.mixing;
        serviceCards[1].querySelector('p').textContent = t.mixingDesc;
    }
    if (serviceCards[2]) {
        serviceCards[2].querySelector('h3').textContent = t.mastering;
        serviceCards[2].querySelector('p').textContent = t.masteringDesc;
    }
    
    // Update contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    if (contactCards[0]) {
        contactCards[0].querySelector('h3').textContent = t.email;
        contactCards[0].querySelector('p').textContent = t.emailDesc;
    }
    if (contactCards[1]) {
        contactCards[1].querySelector('h3').textContent = t.phone;
        contactCards[1].querySelector('p').textContent = t.phoneDesc;
    }
    if (contactCards[2]) {
        contactCards[2].querySelector('h3').textContent = 'SoundCloud';
        contactCards[2].querySelector('p').textContent = t.soundcloudDesc;
    }
    
    // Update telegram priority text
    const telegramPriority = document.querySelector('p[data-lang-key="telegramPriority"]');
    if (telegramPriority) telegramPriority.textContent = t.telegramPriority;
    
    // Update Telegram QR image based on language
    const telegramQrImage = document.querySelector('.telegram-qr-image');
    if (telegramQrImage) {
        if (lang === 'en') {
            telegramQrImage.src = './images/TG_EU.png';
        } else {
            telegramQrImage.src = './images/TG_RU.png';
        }
    }
}

// Flip card functionality
function toggleFlip(card) {
    card.classList.toggle('flipped');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling with language support
    document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const text = this.textContent.trim();
            let targetId = '';
            
            // Check for both Russian and English text
            if (text === 'Услуги' || text === 'Services') targetId = 'services';
            if (text === 'Цены' || text === 'Prices') targetId = 'pricing';
            if (text === 'Контакты' || text === 'Contact') targetId = 'contact';
            
            const target = document.getElementById(targetId);
            if (target) {
                const headerHeight = 120; // Header height + offset
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Telegram button click handler
    document.querySelectorAll('.telegram-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            window.open('https://t.me/escanderro', '_blank');
        });
    });

    // Telegram QR block click handler
    const telegramQrBlock = document.querySelector('.telegram-qr-block');
    if (telegramQrBlock) {
        telegramQrBlock.addEventListener('click', function() {
            window.open('https://t.me/escanderro', '_blank');
        });
    }

    // Parallax effect for patterns
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const header = document.querySelector('.header');
        const patternLeft = document.querySelector('.pattern-left');
        const patternRight = document.querySelector('.pattern-right');
        const decorativeLines = document.querySelector('.decorative-lines');
        
        // Change header on scroll
        if (scrollTop > 50) {
            header.style.background = 'rgba(250, 249, 245, 0.5)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.background = 'rgba(250, 249, 245, 0.3)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.02)';
        }
        
        // Parallax for patterns - infinite scroll effect
        if (patternLeft && patternRight) {
            const parallaxSpeed = 0.5; // Slower parallax speed
            const patternHeight = 400 * window.innerHeight / 100; // 400vh в пикселях
            
            // Создаем бесконечный эффект
            const leftY = (scrollTop * parallaxSpeed) % patternHeight;
            const rightY = (scrollTop * parallaxSpeed) % patternHeight;
            
            patternLeft.style.transform = `translateY(-${leftY}px)`;
            patternRight.style.transform = `translateY(-${rightY}px)`;
        }
        
        // Parallax for decorative lines
        if (decorativeLines) {
            decorativeLines.style.transform = `translateY(${scrollTop * 0.2}px)`;
        }
    });
    VanillaTilt.init(document.querySelectorAll(".category-btn, .telegram-btn, .pricing-card"), {
        max: 3,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
        perspective: 500,
        scale: 1.02,
        gyroscope: true
    });

    // Animate on scroll - Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.service-card, .contact-card, .pricing-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Category buttons click handler
    document.querySelectorAll('.category-btn, .mobile-category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.querySelector('.category-text')?.textContent || this.textContent;
            console.log('Category clicked:', category);
            // Here you can add functionality to filter beats by category
            // For example, redirect to a filtered page or show/hide content
        });
    });

    // Pricing buttons click handler
    document.querySelectorAll('.pricing-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerHeight = 120;
                const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileMenu = document.querySelector('.mobile-menu');
        const burgerMenu = document.querySelector('.burger-menu');
        const overlay = document.querySelector('.mobile-menu-overlay');
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                burgerMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // Header resize on very small screens
    function adjustHeaderForSmallScreens() {
        const header = document.querySelector('.header');
        const windowWidth = window.innerWidth;
        
        if (windowWidth < 400) {
            header.style.height = '70px';
        } else if (windowWidth < 768) {
            header.style.height = '80px';
        } else if (windowWidth < 900) {
            header.style.height = '80px';
        } else if (windowWidth < 1024) {
            header.style.height = '120px';
        } else if (windowWidth < 1200) {
            header.style.height = '140px';
        } else {
            header.style.height = '164px';
        }
    }

    // Call on load and resize
    adjustHeaderForSmallScreens();
    window.addEventListener('resize', adjustHeaderForSmallScreens);

    // Debounce function for resize events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Debounced resize handler
    const debouncedResize = debounce(adjustHeaderForSmallScreens, 250);
    window.addEventListener('resize', debouncedResize);

        // Добавить в конец DOMContentLoaded
    // 3D эффект для стеклянных элементов
    VanillaTilt.init(document.querySelectorAll(".glass, .category-btn, .telegram-btn, .pricing-card"), {
        max: 3,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
        perspective: 500,
        scale: 1.02,
        gyroscope: true
    });

});