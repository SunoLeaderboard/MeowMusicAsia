// Modal functionality module
export function openModal(artist) {
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

export function closeModal() {
    const modal = document.getElementById('artistModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

export function initializeModalHandlers() {
    const modal = document.getElementById('artistModal');
    const closeButton = modal.querySelector('.close');

    // Close modal on close button click
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close modal on outside click
    window.addEventListener('click', (e) => {
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
}

