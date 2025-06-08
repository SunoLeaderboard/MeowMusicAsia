// Main application entry point
import { artists } from './data.js';
import { renderArtists, scrollToArtists } from './ui.js';
import { initializeModalHandlers } from './modal.js';
import { initializeNavigation, initializeParallax } from './navigation.js';

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    renderArtists(artists);
    initializeNavigation();
    initializeModalHandlers();
    initializeParallax();

    // Attach event listener to the CTA button
    const ctaButton = document.getElementById('scrollToArtistsButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', scrollToArtists);
    }
});