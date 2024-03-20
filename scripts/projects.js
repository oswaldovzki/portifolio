const projectBtns = document.querySelectorAll('.project__container');
const projectPreview = document.querySelector('.project__square iframe');
const projectTitle = document.querySelector('.project__square__title');
const projectSite = document.querySelector('.projetc__square__site');

// Add event listener to each project button
projectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        projectBtns.forEach((btn) => {
            btn.classList.remove('active');
        });
        
        // Add 'active' class to the clicked button
        btn.classList.add('active');
        
        // Update project preview based on the clicked button's ID
        alterarProjectPreview(btn.id);
    });
});

// Object mapping project IDs to their titles and URLs
const projects = {
    alurabooks: {
      title: 'Alura Books',
      url: './projetos/alura_books/alura_books.html'
    },
    aluraplus: {
      title: 'Alura +',
      url: './projetos/alura_plus/alura+_standalone.html'
    },
    aluraplay: {
      title: 'Alura Play',
      url: './projetos/alura_play/index.html'
    },
    optimustech: {
      title: 'Optimus Tech',
      url: './projetos/optimus_tech/index.html'
    },
    aluramed: {
      title: 'Alura Med',
      url: './projetos/aluramed/index.html'
    },
    wavecast: {
      title: 'Wave Cast',
      url: './projetos/wavecast/index.html'
    },
    'spotify-imersao': {
      title: 'Spotify Clone',
      url: './projetos/spotify-imersao/index.html'
    },
    CalmariaSpa: {
      title: 'Calmaria Spa',
      url: './projetos/CalmariaSpa/index.html'
    },
    culturama: {
      title: 'Culturama',
      url: './projetos/culturama/index.html'
    },
    mentalista: {
      title: 'Mentalista',
      url: './projetos/mentalista/index.html'
    },
    jsApps: {
      title: 'JS Apps',
      url: './projetos/jsApps/index.html'
    },
    currencyMonitor: {
      title: 'Cotações de Moedas',
      url: './projetos/currencymonitor/index.html'
    },
    oswBank: {
      title: 'Banco do Oswaldo',
      url: './projetos/oswbank/index.html'
    }
  };
  
  // Function to alter project preview based on project ID
  function alterarProjectPreview(projectId) {
    if (projects.hasOwnProperty(projectId)) {
      const project = projects[projectId];
      projectPreview.src = project.url;
      projectTitle.textContent = project.title;
      projectSite.href = project.url;
    }
  }
  
