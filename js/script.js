(() => {
  'use strict';

  const images = [
    { id: 1,  title: 'Mountain Sunrise',     category: 'nature',     description: 'Golden rays piercing through misty mountain peaks at dawn.',    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { id: 2,  title: 'Forest Canopy',         category: 'nature',     description: 'Sunlight filtering through ancient redwood trees.',              url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80' },
    { id: 3,  title: 'Ocean Waves',           category: 'nature',     description: 'Crashing waves at golden hour along the rugged coastline.',       url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80' },
    { id: 4,  title: 'Autumn Pathway',        category: 'nature',     description: 'A serene path lined with vibrant autumn foliage.',               url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80' },
    { id: 5,  title: 'Waterfall Serenity',    category: 'nature',     description: 'Cascading water in a lush tropical rainforest.',                url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80' },
    { id: 6,  title: 'Starry Night Sky',      category: 'nature',     description: 'Milky Way galaxy arching over a tranquil lake.',                url: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80' },
    { id: 7,  title: 'NYC Skyline',           category: 'city',       description: 'Manhattan skyline glowing against the twilight sky.',            url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80' },
    { id: 8,  title: 'Tokyo Nights',          category: 'city',       description: 'Neon-lit streets of Shibuya in the heart of Tokyo.',              url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80' },
    { id: 9,  title: 'Paris Elegance',        category: 'city',       description: 'Eiffel Tower framed by charming Parisian rooftops.',            url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80' },
    { id: 10, title: 'London Bridge',         category: 'city',       description: 'Tower Bridge illuminated against the London night sky.',         url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80' },
    { id: 11, title: 'Dubai Marina',          category: 'city',       description: 'Ultramodern architecture reflecting in the marina waters.',      url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
    { id: 12, title: 'Venice Canals',         category: 'city',       description: 'Gondola drifting through the serene Venetian canals.',          url: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80' },
    { id: 13, title: 'Majestic Lion',         category: 'animals',    description: 'A regal lion surveying the African savanna.',                   url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80' },
    { id: 14, title: 'Graceful Dolphin',      category: 'animals',    description: 'Dolphin leaping through crystal clear ocean waters.',           url: 'https://images.unsplash.com/photo-1570488344355-5e2b1b4c0c9e?w=800&q=80' },
    { id: 15, title: 'Colorful Macaw',        category: 'animals',    description: 'Vibrant macaw perched in the Amazon rainforest canopy.',        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&q=80' },
    { id: 16, title: 'Arctic Fox',            category: 'animals',    description: 'A white fox blending into the snowy Arctic landscape.',         url: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&q=80' },
    { id: 17, title: 'Circuit Board',         category: 'technology', description: 'Close-up of a modern microprocessor with intricate traces.',    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80' },
    { id: 18, title: 'Workspace Setup',       category: 'technology', description: 'Minimalist desk setup with dual monitors and plants.',          url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80' },
    { id: 19, title: 'Drone Shot',            category: 'technology', description: 'A white drone hovering against a clear blue sky.',              url: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80' },
    { id: 20, title: 'Data Center',           category: 'technology', description: 'Rows of servers glowing with blue LED lights.',                 url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80' },
    { id: 21, title: 'Santorini Sunset',      category: 'travel',     description: 'White-washed buildings overlooking the Aegean Sea at dusk.',    url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80' },
    { id: 22, title: 'Bali Temple',           category: 'travel',     description: 'Ancient temple gates surrounded by tropical greenery.',         url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80' },
    { id: 23, title: 'Sushi Platter',         category: 'food',       description: 'Beautifully arranged fresh sushi on a wooden board.',           url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80' },
    { id: 24, title: 'Artisan Coffee',        category: 'food',       description: 'Latte art in a cozy café with morning light streaming in.',     url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80' },
    { id: 25, title: 'Lavender Fields',       category: 'nature',     description: 'Endless rows of purple lavender stretching to the horizon.',    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80' },
    { id: 26, title: 'Desert Dunes',          category: 'travel',     description: 'Rolling sand dunes catching the last light of sunset.',        url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80' },
    { id: 27, title: 'Panda Resting',         category: 'animals',    description: 'A giant panda relaxing while munching on bamboo.',              url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80' },
    { id: 28, title: 'Macarons Display',      category: 'food',       description: 'Colorful French macarons arranged in a pastry shop window.',    url: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&q=80' },
    { id: 29, title: 'Hong Kong Skyline',     category: 'city',       description: 'Victoria Harbour with towering skyscrapers at night.',          url: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=800&q=80' },
    { id: 30, title: 'Tropical Beach',        category: 'travel',     description: 'Palm trees swaying over pristine white sand beaches.',         url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80' },
  ];

  let galleryData = [...images];
  let filteredData = [...images];
  let currentIndex = 0;
  let activeFilter = 'all';
  let searchQuery = '';
  let favorites = JSON.parse(localStorage.getItem('galleryFavorites')) || [];
  let isLightboxOpen = false;
  let isSlideshowActive = false;
  let slideshowTimer = null;
  let slideshowInterval = 3000;
  let isFullscreen = false;
  let isZoomed = false;

  const els = {
    grid: document.getElementById('gallery-grid'),
    skeleton: document.getElementById('loading-skeleton'),
    search: document.getElementById('search-input'),
    searchClear: document.getElementById('search-clear'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    noResults: document.getElementById('no-results'),
    visibleCount: document.getElementById('visible-count'),
    totalCount: document.getElementById('total-count'),
    lightbox: document.getElementById('lightbox'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxTitle: document.getElementById('lightbox-title'),
    lightboxDesc: document.getElementById('lightbox-description'),
    lightboxCat: document.getElementById('lightbox-category'),
    lightboxCounter: document.getElementById('lightbox-counter'),
    lightboxClose: document.getElementById('lightbox-close'),
    lightboxPrev: document.getElementById('lightbox-prev'),
    lightboxNext: document.getElementById('lightbox-next'),
    lightboxOverlay: document.getElementById('lightbox-overlay'),
    lightboxFav: document.getElementById('lightbox-fav'),
    lightboxDownload: document.getElementById('lightbox-download'),
    lightboxFullscreen: document.getElementById('lightbox-fullscreen'),
    lightboxZoom: document.getElementById('lightbox-zoom'),
    slideshowBtn: document.getElementById('slideshow-btn'),
    slideshowControls: document.getElementById('slideshow-controls'),
    slideshowPrev: document.getElementById('slideshow-prev'),
    slideshowNext: document.getElementById('slideshow-next'),
    slideshowPlayPause: document.getElementById('slideshow-play-pause'),
    slideshowClose: document.getElementById('slideshow-close'),
    slideshowProgress: document.getElementById('slideshow-progress'),
    slideshowSpeed: document.getElementById('slideshow-speed-input'),
    shuffleBtn: document.getElementById('shuffle-btn'),
    fullscreenBtn: document.getElementById('fullscreen-btn'),
    themeBtn: document.getElementById('theme-btn'),
    scrollBtn: document.getElementById('scroll-top-btn'),
    scrollProgress: document.getElementById('scroll-progress'),
    year: document.getElementById('year'),
    galleryTitle: document.getElementById('gallery-title'),
    favCounter: document.getElementById('favorites-counter'),
    counters: document.querySelectorAll('.counter-number[data-target]'),
  };

  function init() {
    loadTheme();
    renderGallery();
    animateCounters();
    setupEventListeners();
    hideSkeleton();
    els.year.textContent = new Date().getFullYear();
    els.totalCount.textContent = galleryData.length;
    updateFavCounter();
  }

  function loadTheme() {
    const saved = localStorage.getItem('galleryTheme');
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      els.themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  function toggleTheme() {
    const html = document.documentElement;
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
      html.removeAttribute('data-theme');
      localStorage.setItem('galleryTheme', 'dark');
      els.themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('galleryTheme', 'light');
      els.themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function shuffleGallery() {
    filteredData = shuffleArray([...filteredData]);
    renderGallery();
  }

  function renderGallery() {
    const fragment = document.createDocumentFragment();

    filteredData.forEach((image, idx) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.setAttribute('role', 'listitem');
      item.style.animationDelay = `${(idx % 20) * 0.03}s`;
      item.dataset.index = idx;

      const isFav = favorites.includes(image.id);

      item.innerHTML = `
        <div class="gallery-item-inner">
          <img src="${image.url}" alt="${image.title}" loading="lazy">
          <div class="gallery-item-overlay">
            <span class="gallery-item-title">${image.title}</span>
            <span class="gallery-item-category">${image.category}</span>
          </div>
          <button type="button" class="gallery-item-fav ${isFav ? 'favorited' : ''}" data-id="${image.id}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
      `;

      item.querySelector('.gallery-item-inner').addEventListener('click', () => openLightbox(idx));
      item.querySelector('.gallery-item-fav').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFav(image.id, item.querySelector('.gallery-item-fav'));
      });

      fragment.appendChild(item);
    });

    els.grid.innerHTML = '';
    els.grid.appendChild(fragment);
    els.visibleCount.textContent = filteredData.length;
    els.noResults.classList.toggle('visible', filteredData.length === 0);
  }

  function openLightbox(index) {
    currentIndex = index;
    isLightboxOpen = true;
    updateLightbox();
    els.lightbox.hidden = false;
    requestAnimationFrame(() => {
      els.lightbox.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
    if (isSlideshowActive) stopSlideshow();
  }

  function closeLightbox() {
    isLightboxOpen = false;
    els.lightbox.classList.remove('active');
    els.lightboxZoom.classList.remove('zoomed');
    isZoomed = false;
    setTimeout(() => {
      els.lightbox.hidden = true;
    }, 300);
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const img = filteredData[currentIndex];
    if (!img) return;
    els.lightboxImg.src = img.url;
    els.lightboxImg.alt = img.title;
    els.lightboxTitle.textContent = img.title;
    els.lightboxDesc.textContent = img.description;
    els.lightboxCat.textContent = img.category;
    els.lightboxCounter.textContent = `${currentIndex + 1} / ${filteredData.length}`;

    const isFav = favorites.includes(img.id);
    els.lightboxFav.innerHTML = `<i class="${isFav ? 'fas' : 'far'} fa-heart"></i>`;
    els.lightboxFav.classList.toggle('favorited', isFav);
    els.lightboxFav.setAttribute('aria-label', isFav ? 'Remove from favorites' : 'Add to favorites');

    els.lightboxDownload.href = img.url.replace('w=800&q=80', 'w=1920&q=90');
    els.lightboxDownload.setAttribute('download', `${img.title.replace(/\s+/g, '_').toLowerCase()}.jpg`);
  }

  function navigateLightbox(direction) {
    if (!isLightboxOpen || filteredData.length === 0) return;
    currentIndex = (currentIndex + direction + filteredData.length) % filteredData.length;
    updateLightbox();
    els.lightboxZoom.classList.remove('zoomed');
    isZoomed = false;
  }

  function toggleZoom() {
    isZoomed = !isZoomed;
    els.lightboxZoom.classList.toggle('zoomed', isZoomed);
  }

  function toggleFav(id, btn) {
    const idx = favorites.indexOf(id);
    if (idx > -1) {
      favorites.splice(idx, 1);
      if (btn) {
        btn.classList.remove('favorited');
        btn.querySelector('i').className = 'far fa-heart';
        btn.setAttribute('aria-label', 'Add to favorites');
      }
      if (filteredData[currentIndex] && filteredData[currentIndex].id === id) {
        els.lightboxFav.innerHTML = '<i class="far fa-heart"></i>';
        els.lightboxFav.classList.remove('favorited');
      }
    } else {
      favorites.push(id);
      if (btn) {
        btn.classList.add('favorited');
        btn.querySelector('i').className = 'fas fa-heart';
        btn.setAttribute('aria-label', 'Remove from favorites');
      }
      if (filteredData[currentIndex] && filteredData[currentIndex].id === id) {
        els.lightboxFav.innerHTML = '<i class="fas fa-heart"></i>';
        els.lightboxFav.classList.add('favorited');
      }
    }
    localStorage.setItem('galleryFavorites', JSON.stringify(favorites));
    updateFavCounter();
  }

  function updateFavCounter() {
    const target = document.getElementById('favorites-counter');
    if (target) {
      const current = parseInt(target.textContent) || 0;
      animateNumber(target, current, favorites.length);
    }
  }

  function filterGallery(filter) {
    activeFilter = filter;
    searchQuery = els.search.value.toLowerCase().trim();

    els.filterBtns.forEach(btn => {
      const isActive = btn.dataset.filter === filter;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });

    filteredData = galleryData.filter(img => {
      const matchFilter = filter === 'all' || img.category === filter;
      const matchSearch = !searchQuery || img.title.toLowerCase().includes(searchQuery);
      return matchFilter && matchSearch;
    });

    renderGallery();
  }

  function handleSearch() {
    searchQuery = els.search.value.toLowerCase().trim();
    els.searchClear.classList.toggle('visible', searchQuery.length > 0);
    filterGallery(activeFilter);
  }

  function clearSearch() {
    els.search.value = '';
    els.searchClear.classList.remove('visible');
    searchQuery = '';
    filterGallery(activeFilter);
    els.search.focus();
  }

  function startSlideshow() {
    if (filteredData.length === 0) return;
    isSlideshowActive = true;
    els.slideshowControls.hidden = false;
    els.slideshowBtn.innerHTML = '<i class="fas fa-stop"></i>';
    els.slideshowBtn.setAttribute('aria-label', 'Stop slideshow');
    els.slideshowPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
    els.slideshowPlayPause.setAttribute('aria-label', 'Pause');
    startSlideshowTimer();

    if (!isLightboxOpen && filteredData.length > 0) {
      openLightbox(0);
    }
  }

  function stopSlideshow() {
    isSlideshowActive = false;
    clearTimeout(slideshowTimer);
    els.slideshowControls.hidden = true;
    els.slideshowBtn.innerHTML = '<i class="fas fa-play"></i>';
    els.slideshowBtn.setAttribute('aria-label', 'Start slideshow');
    els.slideshowProgress.style.width = '0%';
  }

  function toggleSlideshow() {
    if (isSlideshowActive) {
      stopSlideshow();
    } else {
      startSlideshow();
    }
  }

  function toggleSlideshowPlay() {
    if (!isSlideshowActive) return;
    const isPaused = els.slideshowPlayPause.dataset.paused === 'true';
    if (isPaused) {
      els.slideshowPlayPause.dataset.paused = 'false';
      els.slideshowPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
      els.slideshowPlayPause.setAttribute('aria-label', 'Pause');
      startSlideshowTimer();
    } else {
      els.slideshowPlayPause.dataset.paused = 'true';
      els.slideshowPlayPause.innerHTML = '<i class="fas fa-play"></i>';
      els.slideshowPlayPause.setAttribute('aria-label', 'Play');
      clearTimeout(slideshowTimer);
    }
  }

  function startSlideshowTimer() {
    if (!isSlideshowActive) return;
    clearTimeout(slideshowTimer);
    els.slideshowProgress.style.transition = 'none';
    els.slideshowProgress.style.width = '0%';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        els.slideshowProgress.style.transition = `width ${slideshowInterval}ms linear`;
        els.slideshowProgress.style.width = '100%';
      });
    });

    slideshowTimer = setTimeout(() => {
      if (isSlideshowActive) {
        navigateLightbox(1);
        if (isLightboxOpen) {
          startSlideshowTimer();
        } else {
          stopSlideshow();
        }
      }
    }, slideshowInterval);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      isFullscreen = true;
      els.fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
      els.lightboxFullscreen.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
      document.exitFullscreen().catch(() => {});
      isFullscreen = false;
      els.fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
      els.lightboxFullscreen.innerHTML = '<i class="fas fa-expand"></i>';
    }
  }

  function handleScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    els.scrollBtn.classList.toggle('visible', scrollY > 400);
    if (els.scrollProgress) {
      const angle = (progress / 100) * 360;
      els.scrollProgress.style.background = progress > 0
        ? `conic-gradient(var(--accent) ${angle}deg, transparent ${angle}deg)`
        : 'none';
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function hideSkeleton() {
    setTimeout(() => {
      els.skeleton.classList.add('hidden');
      setTimeout(() => {
        els.skeleton.style.display = 'none';
      }, 400);
    }, 800);
  }

  function animateCounters() {
    els.counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      animateNumber(counter, 0, target);
    });
  }

  function animateNumber(el, start, end) {
    if (start === end) return;
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = end;
      }
    }
    requestAnimationFrame(update);
  }

  function handleKeydown(e) {
    if (isLightboxOpen) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateLightbox(1);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateLightbox(-1);
      }
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        toggleZoom();
      }
    }
  }

  function setupEventListeners() {
    els.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => filterGallery(btn.dataset.filter));
    });

    els.search.addEventListener('input', handleSearch);
    els.searchClear.addEventListener('click', clearSearch);

    els.lightboxClose.addEventListener('click', closeLightbox);
    els.lightboxOverlay.addEventListener('click', closeLightbox);
    els.lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    els.lightboxNext.addEventListener('click', () => navigateLightbox(1));
    els.lightboxFav.addEventListener('click', () => {
      const img = filteredData[currentIndex];
      if (img) {
        const btn = document.querySelector(`.gallery-item-fav[data-id="${img.id}"]`);
        toggleFav(img.id, btn);
      }
    });
    els.lightboxZoom.addEventListener('click', toggleZoom);
    els.lightboxFullscreen.addEventListener('click', toggleFullscreen);

    els.shuffleBtn.addEventListener('click', shuffleGallery);
    els.slideshowBtn.addEventListener('click', toggleSlideshow);
    els.slideshowPrev.addEventListener('click', () => {
      if (isLightboxOpen) {
        navigateLightbox(-1);
        if (isSlideshowActive && els.slideshowPlayPause.dataset.paused !== 'true') {
          clearTimeout(slideshowTimer);
          startSlideshowTimer();
        }
      }
    });
    els.slideshowNext.addEventListener('click', () => {
      if (isLightboxOpen) {
        navigateLightbox(1);
        if (isSlideshowActive && els.slideshowPlayPause.dataset.paused !== 'true') {
          clearTimeout(slideshowTimer);
          startSlideshowTimer();
        }
      }
    });
    els.slideshowPlayPause.addEventListener('click', toggleSlideshowPlay);
    els.slideshowClose.addEventListener('click', stopSlideshow);
    els.slideshowSpeed.addEventListener('change', (e) => {
      slideshowInterval = parseInt(e.target.value);
      if (isSlideshowActive) {
        clearTimeout(slideshowTimer);
        if (els.slideshowPlayPause.dataset.paused !== 'true') {
          startSlideshowTimer();
        }
      }
    });

    els.fullscreenBtn.addEventListener('click', toggleFullscreen);
    els.themeBtn.addEventListener('click', toggleTheme);
    els.scrollBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeydown);

    document.addEventListener('fullscreenchange', () => {
      const isFs = !!document.fullscreenElement;
      isFullscreen = isFs;
      els.fullscreenBtn.innerHTML = isFs ? '<i class="fas fa-compress"></i>' : '<i class="fas fa-expand"></i>';
      els.lightboxFullscreen.innerHTML = isFs ? '<i class="fas fa-compress"></i>' : '<i class="fas fa-expand"></i>';
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
