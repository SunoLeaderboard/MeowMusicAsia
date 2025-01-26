document.addEventListener('DOMContentLoaded', () => {
  const rankingsDiv = document.getElementById('rankings');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const closeBtn = document.querySelector('.close');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  let chart = null;

  // Render artist cards
  artistData.forEach((artist, index) => {
    const card = document.createElement('div');
    card.className = `artist-card rank-${index + 1}`;
    
    const initialValue = artist.noHistory ? '無資料' : artist.data[0];
    const growthValue = artist.noHistory ? '無資料' : `+${artist.growth}`;
    
    // Generate tags HTML if artist has tags
    const tags = artistTags[artist.name] || [];
    const tagsHTML = tags.map(tag => {
      let tagClass = '';
      if (tag === 'SSC6決賽') tagClass = 'tag-ssc6-final';
      else if (tag === 'SSC6') tagClass = 'tag-ssc6';
      else if (tag === 'AMC') tagClass = 'tag-amc';
      return `<span class="artist-tag ${tagClass}">${tag}</span>`;
    }).join('');
    
    card.innerHTML = `
      <div class="artist-info">
        <div class="rank">#${index + 1}</div>
        <div class="name">
          ${artist.name}
          <div class="tags-container">${tagsHTML}</div>
        </div>
      </div>
      <div class="stats">
        <div class="stat">
          <div class="stat-label">初始追蹤數</div>
          <div class="stat-value">${initialValue}</div>
        </div>
        <div class="stat">
          <div class="stat-label">增長數</div>
          <div class="stat-value">${growthValue}</div>
        </div>
        <div class="stat">
          <div class="stat-label">當前追蹤數</div>
          <div class="stat-value">${artist.current}</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => showArtistDetails(artist));
    rankingsDiv.appendChild(card);
  });

  function showArtistDetails(artist) {
    modal.style.display = 'block';
    modalTitle.innerText = artist.name;
    
    // Reset to stats tab
    document.querySelector('[data-tab="stats"]').click();
    
    // Update stats content
    const statsContent = document.getElementById('stats-content');
    if (!artist.noHistory) {
      // Create chart container and canvas if they don't exist
      statsContent.innerHTML = `
        <div class="chart-container">
          <canvas id="growth-chart"></canvas>
        </div>
      `;
      showGrowthChart(artist);
    } else {
      statsContent.innerHTML = '<p>此藝術家無歷史數據</p>';
    }
    
    // Update songs content
    updateSongsContent(artist);
  }

  function showGrowthChart(artist) {
    const canvas = document.getElementById('growth-chart');
    const ctx = canvas.getContext('2d');
    
    if (chart) {
      chart.destroy();
    }

    const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: '個人成長',
            data: artist.data,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: '平均成長',
            data: averageGrowth,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '追蹤數成長趨勢'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  function updateSongsContent(artist) {
    const topSongContainer = document.getElementById('top-song-container');
    const popularSongsContainer = document.getElementById('popular-songs-container');
    
    topSongContainer.innerHTML = '';
    popularSongsContainer.innerHTML = '';
    
    const artistSongs = songData[artist.name];
    
    if (artistSongs) {
      if (artistSongs.topSong) {
        topSongContainer.innerHTML = `
          <div class="song-card">
            <div class="song-title">${artistSongs.topSong.title}</div>
            <a href="${artistSongs.topSong.url}" target="_blank" class="song-link">聆聽</a>
          </div>
        `;
      }
      
      if (artistSongs.popularSongs.length > 0) {
        artistSongs.popularSongs.forEach(song => {
          popularSongsContainer.innerHTML += `
            <div class="song-card">
              <div class="song-title">${song.title}</div>
              <a href="${song.url}" target="_blank" class="song-link">聆聽</a>
            </div>
          `;
        });
      } else {
        popularSongsContainer.innerHTML = '<p>暫無其他熱門曲目</p>';
      }
    } else {
      topSongContainer.innerHTML = '<p>暫無冠軍曲目</p>';
      popularSongsContainer.innerHTML = '<p>暫無熱門曲目</p>';
    }
  }

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(`${tabId}-content`).classList.add('active');
    });
  });

  // Close modal handlers
  closeBtn.onclick = () => {
    modal.style.display = 'none';
    if (chart) {
      chart.destroy();
      chart = null;
    }
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      if (chart) {
        chart.destroy();
        chart = null;
      }
    }
  };
});