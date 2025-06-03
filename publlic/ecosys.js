// Fichier: ecosys.js
document.addEventListener('DOMContentLoaded', () => {
    // Ajout du CSS pour le menu hamburger
    const style = document.createElement('style');
    style.textContent = `
      /* Style pour le menu hamburger */
      .mobile-nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 250px;
        height: 100vh;
        background-color: white;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        padding-top: 80px;
        transition: right 0.3s ease;
        z-index: 1000;
      }
  
      .mobile-nav.active {
        right: 0;
      }
  
      .mobile-nav ul {
        display: flex;
        flex-direction: column;
        list-style: none;
      }
  
      .mobile-nav ul li {
        margin: 0;
        padding: 15px 25px;
        border-bottom: 1px solid #f1f1f1;
      }
  
      .mobile-nav ul li a {
        text-decoration: none;
        color: var(--primary-blue);
        font-weight: 500;
        transition: color 0.3s;
        display: block;
      }
  
      .mobile-nav ul li a:hover {
        color: var(--secondary-teal);
      }
  
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 999;
      }
  
      .overlay.active {
        opacity: 1;
        visibility: visible;
      }
    `;
    document.head.appendChild(style);
  
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    
   
    const mainNav = document.querySelector('nav ul').cloneNode(true);
    mobileNav.appendChild(mainNav);
    
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
   
    document.body.appendChild(mobileNav);
    document.body.appendChild(overlay);
    
   
    const toggleMenu = () => {
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };
    
    
    document.querySelector('.mobile-menu-btn').addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  });

// Assurez-vous que tout le code est à l'intérieur de l'événement DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // Données des services (garder le même objet servicesData)
  const servicesData = {
    videosurveillance: {
      title: "Vidéosurveillance",
      description: "Notre service de vidéosurveillance offre une solution complète pour sécuriser vos locaux et vos biens avec des technologies de pointe.",
      features: [
        "Caméras HD haute résolution",
        "Vision nocturne infrarouge",
        "Accès à distance via smartphone",
        "Enregistrement 24/7",
        "Détection de mouvement",
        "Stockage cloud sécurisé",
        "Installation professionnelle",
        "Maintenance et support technique"
      ],
      pricing: "À partir de 250,000 FCFA - Devis personnalisé selon vos besoins"
    },
    formations: {
      title: "Formations",
      description: "Nos formations professionnelles sont conçues pour vous permettre d'acquérir des compétences pratiques et actuelles dans le domaine du numérique.",
      features: [
        "Formations en petits groupes",
        "Formateurs expérimentés",
        "Support de cours inclus",
        "Exercices pratiques",
        "Certificat de formation",
        "Suivi post-formation",
        "Sessions flexibles",
        "Environnement d'apprentissage moderne"
      ],
      pricing: "À partir de 150,000 FCFA par module - Tarifs dégressifs pour les groupes"
    },
    materiel: {
      title: "Fourniture Matériel",
      description: "Nous fournissons du matériel informatique professionnel de qualité pour répondre à tous vos besoins techniques.",
      features: [
        "Matériel neuf et certifié",
        "Grandes marques",
        "Garantie constructeur",
        "Installation incluse",
        "Service après-vente",
        "Conseil personnalisé",
        "Stock disponible",
        "Livraison rapide"
      ],
      pricing: "Prix compétitifs - Devis gratuit sous 24h"
    },
    applications: {
      title: "Création d'applications",
      description: "Développement d'applications web et mobiles sur mesure pour digitaliser et optimiser vos processus métier.",
      features: [
        "Applications web responsive",
        "Applications mobiles iOS/Android",
        "Interface utilisateur moderne",
        "Intégration API",
        "Base de données sécurisée",
        "Tests qualité",
        "Déploiement inclus",
        "Maintenance évolutive"
      ],
      pricing: "Sur devis - Projet à partir de 500,000 FCFA"
    },
    maintenance: {
      title: "Maintenance",
      description: "Service de maintenance informatique complet pour garantir la continuité de vos activités.",
      features: [
        "Maintenance préventive",
        "Dépannage rapide",
        "Support à distance",
        "Intervention sur site",
        "Sauvegarde des données",
        "Mise à jour logicielle",
        "Antivirus professionnel",
        "Rapport d'intervention"
      ],
      pricing: "Contrat mensuel à partir de 100,000 FCFA - Intervention ponctuelle sur devis"
    },
    ecommerce: {
      title: "E-commerce",
      description: "Création de boutiques en ligne performantes pour développer votre activité sur internet.",
      features: [
        "Design personnalisé",
        "Catalogue produits",
        "Paiement sécurisé",
        "Gestion des stocks",
        "Panel d'administration",
        "Optimisation SEO",
        "Integration réseaux sociaux",
        "Formation utilisation"
      ],
      pricing: "À partir de 400,000 FCFA - Installation et formation incluses"
    }
  };

  // Gestion du modal
  const modal = document.getElementById('serviceModal');
  const closeBtn = document.querySelector('.close-modal');
  const serviceCards = document.querySelectorAll('.service-card');

  // S'assurer que le modal est caché au chargement
  if (modal) {
    modal.style.display = 'none';
  }

  // Ouvrir le modal uniquement au clic sur une carte
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      const serviceTitle = this.querySelector('h3').textContent.trim();
      const serviceType = serviceTitle.toLowerCase()
        .replace('vidéosurveillance', 'videosurveillance')
        .replace('création d\'applications', 'applications')
        .replace('fourniture matériel', 'materiel')
        .split(' ')[0];

      const service = servicesData[serviceType];
      
      if (service && modal) {
        // Mettre à jour le contenu du modal
        modal.querySelector('.modal-title').textContent = service.title;
        modal.querySelector('.modal-description').textContent = service.description;
        
        const featuresList = `
          <h3>Caractéristiques</h3>
          <ul>${service.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
        `;
        modal.querySelector('.modal-features').innerHTML = featuresList;
        
        modal.querySelector('.modal-pricing').innerHTML = `
          <h3>Tarification</h3>
          <p>${service.pricing}</p>
        `;
        
        // Afficher le modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Fermer le modal
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    // Fermer en cliquant en dehors
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Gestion du formulaire de contact
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // Création du lien mailto
      const mailtoLink = `mailto:fallou.ndiaye22@isep-hies.edu.sn?subject=Contact depuis le site web&body=Nom: ${name}%0D%0A%0D%0AEmail: ${email}%0D%0A%0D%0ATéléphone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      
      // Ouvrir le client mail
      window.location.href = mailtoLink;
      
      // Animation de confirmation
      const btn = contactForm.querySelector('button');
      btn.innerHTML = '<i class="fas fa-check"></i> Message envoyé!';
      btn.classList.add('success');
      
      // Réinitialiser le formulaire après 2 secondes
      setTimeout(() => {
        contactForm.reset();
        btn.innerHTML = 'Envoyer le message';
        btn.classList.remove('success');
      }, 2000);
    });
  }
  
  // Animation des champs du formulaire
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
  
  formInputs.forEach(input => {
    // Gérer l'état du label
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
    
    // Si le champ a déjà une valeur
    if (input.value) {
      input.parentElement.classList.add('focused');
    }
  });
  
  // Observer les animations au scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  
  // Observer la section contact
  const contactElements = document.querySelectorAll('.contact-info, .contact-form');
  contactElements.forEach(el => observer.observe(el));
});

// Ajouter au code existant pour le modal
const modal = document.getElementById('serviceModal');
const closeBtn = document.querySelector('.close-modal');
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', function() {
    modal.style.display = 'flex'; // Changé de 'block' à 'flex'
    document.body.style.overflow = 'hidden';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Gestion du menu
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav ul');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  // Gestion du menu au scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Gestion du menu mobile
  mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Fermer le menu au clic sur l'overlay
  overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Fermer le menu au clic sur un lien
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Ajouter la classe active au lien courant
  const currentLocation = location.href;
  const menuItems = nav.querySelectorAll('a');
  menuItems.forEach(link => {
    if (link.href === currentLocation) {
      link.parentElement.classList.add('active');
    }
  });
});