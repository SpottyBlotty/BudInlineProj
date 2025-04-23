
document.addEventListener('DOMContentLoaded', function() {
  // Burger Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if(menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  
    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // Enhanced hover effects for activity cards
  const activityCards = document.querySelectorAll('.activity-card');
  activityCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('hover');
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
      
      // Add rotation to icon
      const icon = this.querySelector('.activity-icon');
      if (icon) {
        icon.style.transform = 'rotate(10deg) scale(1.1)';
      }
      
      // Change button color
      const button = this.querySelector('button');
      if (button) {
        button.style.backgroundColor = 'var(--primary)';
        button.style.color = 'var(--white)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hover');
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      
      // Reset icon
      const icon = this.querySelector('.activity-icon');
      if (icon) {
        icon.style.transform = 'rotate(0) scale(1)';
      }
      
      // Reset button
      const button = this.querySelector('button');
      if (button) {
        button.style.backgroundColor = '';
        button.style.color = '';
      }
    });
  });
  
  // Enhanced hover effects for event cards
  const eventCards = document.querySelectorAll('.event-card');
  eventCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('hover');
      const image = this.querySelector('img');
      if (image) {
        image.style.transform = 'scale(1.1)';
      }
      
      // Add background gradient effect
      this.style.background = 'linear-gradient(to bottom right, rgba(247, 110, 178, 0.05), rgba(20, 120, 231, 0.05))';
      
      // Highlight title
      const title = this.querySelector('.event-title');
      if (title) {
        title.style.color = 'var(--primary)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hover');
      const image = this.querySelector('img');
      if (image) {
        image.style.transform = 'scale(1)';
      }
      
      // Remove background gradient
      this.style.background = '';
      
      // Reset title color
      const title = this.querySelector('.event-title');
      if (title) {
        title.style.color = '';
      }
    });
  });
  
  // Schedule Tab Functionality
  const scheduleTabs = document.querySelectorAll('.schedule-tab-button');
  scheduleTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetId = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and panes
      scheduleTabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.schedule-tab-pane').forEach(p => p.classList.remove('active'));
      
      // Add active class to current tab and pane
      this.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });
  
  // Video Play Button (basic implementation)
  const playButton = document.querySelector('.play-button');
  if (playButton) {
    playButton.addEventListener('click', function() {
      const videoWrapper = document.querySelector('.video-wrapper');
      if (videoWrapper) {
        const videoPlaceholder = videoWrapper.querySelector('.video-placeholder');
        
        if (videoPlaceholder) {
          // Replace placeholder with embedded video (example)
          const iframe = document.createElement('iframe');
          iframe.setAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1');
          iframe.setAttribute('width', '100%');
          iframe.setAttribute('height', '100%');
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
          iframe.setAttribute('allowfullscreen', '');
          iframe.style.aspectRatio = '16/9';
          
          videoWrapper.innerHTML = '';
          videoWrapper.appendChild(iframe);
        }
      }
    });
  }
});
