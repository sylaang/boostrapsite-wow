window.onload = function() {
    adjustVideoSize();
    disableFullscreen();
    
};

window.onresize = function() {
    adjustVideoSize();
};

function adjustVideoSize() {
    var videoContainer = document.getElementById('video-container');
    var video = document.getElementById('fullscreen-video');

    var aspectRatio = video.videoWidth / video.videoHeight;
    var containerAspectRatio = window.innerWidth / window.innerHeight;

    if (containerAspectRatio < aspectRatio) {
        video.style.width = '100vw';
        video.style.height = '85vh';
    } else {
        video.style.width = '100%';
        video.style.height = '85%';
    }
}

function disableFullscreen() {
    var video = document.getElementById('fullscreen-video');

    document.addEventListener('fullscreenchange', function() {
        if (document.fullscreenElement === video || !document.fullscreenElement) {
            video.removeAttribute('controls');
        }
    });
}

const navbar = document.querySelector('.navbar');
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos < currentScrollPos) {
        navbar.classList.remove('transparent-navbar');
    } else {
        navbar.classList.add('transparent-navbar');
    }

    prevScrollPos = currentScrollPos;
};

      document.addEventListener("DOMContentLoaded", function () {
        var navbar = document.querySelector('.navbar');
    
        var navbarHeight = navbar.clientHeight;
    
        window.addEventListener('scroll', function () {
          var scrollPosition = window.scrollY;
    
          if (scrollPosition > navbarHeight) {
            navbar.classList.add('navbar-scrolled');
          } else {
            navbar.classList.remove('navbar-scrolled');
          }
        });
      });


   document.addEventListener('DOMContentLoaded', function() {
  // Démarrer le changement de texte après 1 seconde
  setTimeout(function() {
    changeText();
  }, 1000);

  var video = document.getElementById('fullscreen-video');
  var textElement = document.querySelector('.animated-text');

  // Démarrer le changement de texte lorsque la vidéo commence à jouer
  video.addEventListener('play', function() {
    video.addEventListener('timeupdate', updateText);
    video.addEventListener('ended', resetVideo);
  });

  function updateText() {
    var currentTime = video.currentTime;

    if (currentTime >= 0 && currentTime < 3) {
      textElement.textContent = 'Ce combat';
    } else if (currentTime >= 3 && currentTime < 5) {
      textElement.textContent = 'est';
    } else if (currentTime >= 5 && currentTime < 8) {
      textElement.textContent = 'le vôtre';
    } else if (currentTime >= 8 && currentTime < 9) {
      textElement.textContent = '';
    }
  }

  function changeText() {
    // Réinitialiser le texte à "Ce combat"
    textElement.textContent = 'Ce combat';

    // Changer le texte initial après 2 secondes
    setTimeout(function() {
      textElement.textContent = 'est';
    }, 2000);

    // Changer 'est' en 'le vôtre' après 2 secondes supplémentaires
    setTimeout(function() {
      textElement.textContent = 'Le vôtre';
    }, 5000);

    // Masquer le texte après 2 secondes supplémentaires
    setTimeout(function() {
      textElement.textContent = '';
    }, 8000);
  }

  function resetVideo() {
    // Réinitialiser la vidéo au début pour le prochain cycle
    video.currentTime = 0;
    changeText();
  }
});

