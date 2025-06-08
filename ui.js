// UI Components module
import { openModal } from './modal.js';

export function createArtistCard(artist, index) {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="artist-header">
            <h3 class="artist-name">${artist.name}</h3>
            <span class="followers">${artist.followers}</span>
        </div>
        <div class="artist-info">
            ${artist.achievements.length > 0 ? `
                <div class="achievements-section">
                    <h4>成就與經歷</h4>
                    <ul class="achievements">
                        ${artist.achievements.slice(0, 2).map(achievement => `<li>${achievement}</li>`).join('')}
                        ${artist.achievements.length > 2 ? '<li>...</li>' : ''}
                    </ul>
                </div>
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
    return card;
}

export function renderArtists(artistsData) {
    const grid = document.getElementById('artistsGrid');

    // Clear existing content
    grid.innerHTML = '';

    // Create executives section
    const executivesSection = document.createElement('div');
    executivesSection.className = 'artist-section';
    executivesSection.innerHTML = `
        <h3 class="artist-section-title">執事團</h3>
        <div class="artists-grid-section" id="executivesGrid"></div>
    `;
    grid.appendChild(executivesSection);

    // Create members section
    const membersSection = document.createElement('div');
    membersSection.className = 'artist-section';
    membersSection.innerHTML = `
        <h3 class="artist-section-title">一般成員</h3>
        <div class="artists-grid-section" id="membersGrid"></div>
    `;
    grid.appendChild(membersSection);

    const executivesGrid = document.getElementById('executivesGrid');
    const membersGrid = document.getElementById('membersGrid');

    // Render executives
    artistsData.executives.forEach((artist, index) => {
        const card = createArtistCard(artist, index);
        executivesGrid.appendChild(card);
    });

    // Render members
    artistsData.members.forEach((artist, index) => {
        const card = createArtistCard(artist, index + artistsData.executives.length);
        membersGrid.appendChild(card);
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
        // Reset animation state before observing if needed, or just observe
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });

    // Stop observing elements that have already animated to improve performance
    observer.callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };
}

export function scrollToArtists() {
    document.getElementById('artists').scrollIntoView({
        behavior: 'smooth'
    });
}