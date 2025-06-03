const teamMembers = [
  {
    name: "Fallou NDIAYE",
    role: "Développeur Web & Mobile",
    image: "images/Fallou2.png",
    bio: "Expert en développement web et mobile avec plus de 5 ans d'expérience. Passionné par les nouvelles technologies et l'innovation.",
    social: {
      facebook: "https://facebook.com/fallou",
      twitter: "https://twitter.com/fallou",
      linkedin: "https://linkedin.com/in/fallou",
      instagram: "https://instagram.com/fallou",
      whatsapp: "+221778012731",
      tiktok: "https://www.tiktok.com/@fadloulahi14dev?_t=ZN-8wp2lvueEre&_r=1"
    }
  },
  {
    name: "Abdoul Latif",
    role: "Technicien Réseau & télécom",
    image: "images/latif.png",
    bio: "Expert en développement web et mobile avec plus de 5 ans d'expérience. Passionné par les nouvelles technologies et l'innovation.",
    social: {
      facebook: "https://facebook.com/fallou",
      twitter: "https://twitter.com/fallou",
      linkedin: "https://linkedin.com/in/fallou",
      instagram: "https://instagram.com/fallou",
      whatsapp: "+221778012731",
      tiktok: "https://tiktok.com/@fallou"
    }
  },
  {
    name: "Moussa Ndaw",
    role: "Développeur Web & Mobile",
    image: "images/samou.png",
    bio: "Expert en développement web et mobile avec plus de 5 ans d'expérience. Passionné par les nouvelles technologies et l'innovation.",
    social: {
      facebook: "https://facebook.com/fallou",
      twitter: "https://twitter.com/fallou",
      linkedin: "https://linkedin.com/in/fallou",
      instagram: "https://instagram.com/fallou",
      whatsapp: "+221778012731",
      tiktok: "https://tiktok.com/@fallou"
    }
  },
  {
    name: "Mouhamed seck",
    role: "technicien Réseau & télécom",
    image: "images/Fallou_NDIAYE.jpg",
    bio: "Expert en développement web et mobile avec plus de 5 ans d'expérience. Passionné par les nouvelles technologies et l'innovation.",
    social: {
      facebook: "https://facebook.com/fallou",
      twitter: "https://twitter.com/fallou",
      linkedin: "https://linkedin.com/in/fallou",
      instagram: "https://instagram.com/fallou",
      whatsapp: "+221778012731",
      tiktok: "https://tiktok.com/@fallou"
    }
  },
    {
    name: "Mouhamed ciss",
    role: "Administrateur système & réseau",
    image: "images/Fallou_NDIAYE.jpg",
    bio: "Expert en développement web et mobile avec plus de 5 ans d'expérience. Passionné par les nouvelles technologies et l'innovation.",
    social: {
      facebook: "https://facebook.com/fallou",
      twitter: "https://twitter.com/fallou",
      linkedin: "https://linkedin.com/in/fallou",
      instagram: "https://instagram.com/fallou",
      whatsapp: "+221778012731",
      tiktok: "https://tiktok.com/@fallou"
    }
  },
    {
    name: "Mouhamadou Lamine Mbaye",
    role: "technicien reseau & télécom",
    image: "images/lamine.png",
    bio: "Expert en développement web et mobile avec plus de 5 ans d'expérience. Passionné par les nouvelles technologies et l'innovation.",
    social: {
      facebook: "https://facebook.com/fallou",
      twitter: "https://twitter.com/fallou",
      linkedin: "https://linkedin.com/in/fallou",
      instagram: "https://instagram.com/fallou",
      whatsapp: "+221778012731",
      tiktok: "https://tiktok.com/@fallou"
    }
  },
    {
    name: "Mouhamed FALL",
    role: "Technicien En infographie & referent digital",
    image: "images/mofall.png",
    bio: "Expert en développement web et mobile avec plus de 5 ans d'expérience. Passionné par les nouvelles technologies et l'innovation.",
    social: {
      facebook: "https://facebook.com/fallou",
      twitter: "https://twitter.com/fallou",
      linkedin: "https://linkedin.com/in/fallou",
      instagram: "https://instagram.com/fallou",
      whatsapp: "+221778012731",
      tiktok: "https://tiktok.com/@fallou"
    }
  },
  // Ajoutez les 6 autres membres de l'équipe avec le même format
];

class TeamSlider {
  constructor() {
    this.currentSlide = 0;
    this.slider = document.querySelector('.team-slider');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.dotsContainer = document.querySelector('.slider-dots');
    
    this.init();
  }

  init() {
    // Créer les slides
    this.createSlides();
    
    // Créer les points de navigation
    this.createDots();
    
    // Activer le premier slide
    this.showSlide(0);
    
    // Ajouter les événements
    this.addEventListeners();
  }

  createSlides() {
    teamMembers.forEach(member => {
      const slide = document.createElement('div');
      slide.className = 'team-member';
      
      slide.innerHTML = `
        <div class="member-image">
          <img src="${member.image}" alt="${member.name}">
        </div>
        <div class="member-info">
          <h3 class="member-name">${member.name}</h3>
          <p class="member-role">${member.role}</p>
          <p class="member-bio">${member.bio}</p>
          <div class="member-social">
            <a href="${member.social.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="${member.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/${member.social.whatsapp}" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="${member.social.tiktok}" target="_blank"><i class="fab fa-tiktok"></i></a>
          </div>
        </div>
      `;
      
      this.slider.appendChild(slide);
    });
  }

  createDots() {
    teamMembers.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.addEventListener('click', () => this.showSlide(index));
      this.dotsContainer.appendChild(dot);
    });
  }

  showSlide(index) {
    this.currentSlide = index;
    
    // Mettre à jour la position du slider
    this.slider.style.transform = `translateX(-${index * 100}%)`;
    
    // Mettre à jour les slides actifs
    document.querySelectorAll('.team-member').forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    
    // Mettre à jour les points
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  addEventListeners() {
    this.prevBtn.addEventListener('click', () => {
      this.showSlide(this.currentSlide > 0 ? this.currentSlide - 1 : teamMembers.length - 1);
    });
    
    this.nextBtn.addEventListener('click', () => {
      this.showSlide(this.currentSlide < teamMembers.length - 1 ? this.currentSlide + 1 : 0);
    });
  }
}

// Initialiser le slider quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
  new TeamSlider();
});