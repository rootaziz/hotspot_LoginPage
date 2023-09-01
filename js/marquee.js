 const marquee = document.querySelector('.marquee');
    const marqueeContainer = document.querySelector('.marquee-container');

    const marqueeWidth = marquee.offsetWidth;
    const containerWidth = marqueeContainer.offsetWidth;

    if (marqueeWidth > containerWidth) {
      const animationDuration = (marqueeWidth / 50) + 's';
      marquee.style.animationDuration = animationDuration;
    }
	
const clignotant = document.querySelector('.clignotant');

function toggleVisibility() {
  clignotant.style.visibility = (clignotant.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

// Démarre le clignotement toutes les 500 ms (1/2 seconde)
setInterval(toggleVisibility, 500);
