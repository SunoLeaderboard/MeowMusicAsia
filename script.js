// Artist data
const artists = [
    {
        name: 'nyx',
        followers: '12K',
        achievements: [
            'Meow music asia主理人',
            'Suno總排行(Popular Users)中排行第七'
        ],
        works: [
            { title: 'Mad Mad World', url: 'https://suno.com/s/Cdambhe8oJudA0WX' },
            { title: 'Don\'t Care Anymore', url: 'https://www.youtube.com/watch?v=JgbFql5XNpQ' }
        ]
    },
    {
        name: 'ChillVibeCircuits',
        followers: '767',
        achievements: [
            'SSC5半決賽',
            'SSC6半決賽'
        ],
        works: [
            { title: 'Beyond the Screen', url: 'https://suno.com/song/7064a52a-ae66-4649-b5f9-7b7ced82ea52' },
            { title: '红尘，仙缘', url: 'https://youtu.be/qjcKJZZWqQE?feature=shared' }
        ]
    },
    {
        name: '裴芸PuiWan',
        followers: '954',
        achievements: [],
        works: [
            { title: '孤海 (V2)', url: 'https://suno.com/song/b3ef97c8-1a41-4ff5-8337-47472ef65f06' },
            { title: '白骨洞', url: 'https://suno.com/song/3a0b7724-0c8e-4d70-8579-a57cf223e716' }
        ]
    },
    {
        name: '🔱AL ren',
        followers: '840',
        achievements: [],
        works: [
            { title: '清麗如卿 | My Teacher', url: 'https://suno.com/song/cef75013-0097-46ab-8101-355ceeac205b' },
            { title: '老朋友 | Old Friend', url: 'https://suno.com/song/25e778f7-2731-4e0c-b681-ccd4eb370a2b' }
        ]
    },
    {
        name: 'GameIsHere🐢',
        followers: '2.6K',
        achievements: [
            'SSC5半決賽',
            'SSC6總決賽第19名',
            'Testing Ground主理人',
            'AIMAC中一員',
            '爆肝做這個網站的人:)'
        ],
        works: [
            { title: 'Space', url: 'https://suno.com/song/f434929e-a6b2-4437-a597-45ffece514b1' },
            { title: 'The Gaze Pt.II', url: 'https://suno.com/s/cdcyIVOjHHI7yUCH' }
        ]
    },
    {
        name: 'Wine loves flowers',
        followers: '3.8K',
        achievements: [
            'SSC5半決賽',
            'SSC6總決賽第14名'
        ],
        works: [
            { title: 'I am separated from the world✨', url: 'https://suno.com/song/682349a7-fc02-46f1-8fbd-aed67dee2c6e' },
            { title: 'daily社畜✨', url: 'https://suno.com/s/dre1IgGHt2UZHVBo' }
        ]
    },
    {
        name: '桂花巷子/Osmanthus Alley',
        followers: '1.6K',
        achievements: [
            'SSC5半決賽',
            'SSC6半決賽'
        ],
        works: [
            { title: 'Kung Fu鴨', url: 'https://suno.com/song/20e4acb5-a9ec-43ab-bf0a-41a35db63686' },
            { title: '山の魂', url: 'https://suno.com/song/142b1d6e-b6c0-455b-a830-68445c6b1990' }
        ]
    },
    {
        name: 'MidnightHour',
        followers: '404',
        achievements: [],
        works: [
            { title: 'Poutine Pudding', url: 'https://suno.com/song/560eed74-88b2-4c6d-bbde-1dbb11bf075e' },
            { title: 'Y.B.B.C.', url: 'https://suno.com/song/045861e5-5ce6-495f-a2f6-fe42d0582e6f' }
        ]
    },
    {
        name: '海洋# Ocean',
        followers: '217',
        achievements: [],
        works: [
            { title: '"Lambada Style" Fall in love with blonde beauty', url: 'https://suno.com/s/IztcVLsCe3frgJKF' },
            { title: '一個人的美', url: 'https://suno.com/song/8f5d6c6f-ab05-43eb-a33a-2fd65c17aa4c' }
        ]
    },
    {
        name: 'EricWei',
        followers: '179',
        achievements: [],
        works: [
            { title: '如果是勇者欣梅爾的話，他一定也會這麼做', url: 'https://suno.com/song/afc96bf5-a315-4dd0-861e-1428b0f1e96d' },
            { title: '什麼都無法捨棄的人，什麼也改變不了', url: 'https://suno.com/song/5815f764-6f72-4606-90d8-089e3d4dd06c' }
        ]
    },
    {
        name: 'iLoveSuno',
        followers: '2.1K',
        achievements: [
            'AI音樂元老'
        ],
        works: [
            { title: '醉打蔣門神', url: 'https://suno.com/song/f5a86119-2283-4e9a-86ae-9c96476f1450' },
            { title: '宮保雞丁', url: 'https://suno.com/s/fMacjQlMrRm2QFSZ' }
        ]
    },
    {
        name: '雪國',
        followers: '25',
        achievements: [],
        works: [
            { title: '當雪花飄落', url: 'https://suno.com/song/98f99dc9-e6dc-4985-908d-b999275217c7' },
            { title: '"Love Again" | Full Track (Cover)', url: 'https://suno.com/s/uVXa7sxPuickct85' }
        ]
    }
];

// Render artists
function renderArtists() {
    const grid = document.getElementById('artistsGrid');
    
    artists.forEach((artist, index) => {
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="artist-header">
                <h3 class="artistartist-name">${artist.name}</h3>
                <span class="followfollowers">${artist.followers} 追蹤數</span>
            </div>
            <div class="artist-info">
                ${artist.achievements.length > 0 ? `
                    <ul class="achievements">
                        ${artist.achievements.slice(0, 2).map(achievement => `<li>${achievement}</li>`).join('')}
                        ${artist.achievements.length > 2 ? '<li>...</li>' : ''}
                    </ul>
                ` : ''}
                <div class="representative-works">
                    <h4>代表作品</h4>
                    <div class="works-list">
                        ${artist.works.slice(0, 2).map(work => `
                            <a href="${work.url}" class="work-link" target="_blank">${work.title}</a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(artist));
        grid.appendChild(card);
    });
    
    // Add intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    });
    
    document.querySelectorAll('.artist-card').forEach(card => {
        observer.observe(card);
    });
}

// Modal functions
function openModal(artist) {
    const modal = document.getElementById('artistModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2 class="modal-artist-name">${artist.name}</h2>
        <p class="modal-followers">${artist.followers} 追蹤數</p>
        
        ${artist.achievements.length > 0 ? `
            <div class="modal-section">
                <h3>成就與經歷</h3>
                <ul class="modal-achievements">
                    ${artist.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        ` : ''}
        
        <div class="modal-section">
            <h3>代表作品</h3>
            <div class="modal-works">
                ${artist.works.map(work => `
                    <div class="modal-work">
                        <a href="${work.url}" target="_blank">${work.title}</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('artistModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Smooth scrolling
function scrollToArtists() {
    document.getElementById('artists').scrollIntoView({
        behavior: 'smooth'
    });
}

// Navigation
document.addEventListener('DOMContentLoaded', () => {
    renderArtists();
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            
            // Update active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Scroll to section
            if (target === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        const sections = ['home', 'artists'];
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const element = section === 'home' ? 
                document.querySelector('.hero') : 
                document.getElementById(section);
            
            if (element) {
                const top = element.offsetTop;
                const bottom = top + element.offsetHeight;
                
                if (scrollPos >= top && scrollPos <= bottom) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    document.querySelector(`[href="#${section}"]`).classList.add('active');
                }
            }
        });
    });
    
    // Close modal on outside click
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('artistModal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

// Add parallax effect to background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.neon-background');
    const speed = scrolled * 0.5;
    
    parallax.style.transform = `translateY(${speed}px)`;
});