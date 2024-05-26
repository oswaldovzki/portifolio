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
      url: '../portifolio/projects/alura-books/index.html'
    },
    aluraplus: {
      title: 'Alura +',
      url: '../portifolio/projects/alura-plus/index.html'
    },
    aluraplay: {
      title: 'Alura Play',
      url: '../portifolio/projects/alura-play/index.html'
    },
    optimustech: {
      title: 'Optimus Tech',
      url: '../portifolio/projects/optimus-tech/index.html'
    },
    aluramed: {
      title: 'Alura Med',
      url: '../portifolio/projects/aluramed/index.html'
    },
    wavecast: {
      title: 'Wave Cast',
      url: '../portifolio/projects/wavecast/index.html'
    },
    'spotify-imersao': {
      title: 'Spotify Clone',
      url: '../portifolio/projects/spotify-imersao/index.html'
    },
    CalmariaSpa: {
      title: 'Calmaria Spa',
      url: '../portifolio/projects/CalmariaSpa/index.html'
    },
    culturama: {
      title: 'Culturama',
      url: '../portifolio/projects/culturama/index.html'
    },
    oswBank: {
      title: 'Banco do Oswaldo',
      url: '../portifolio/projects/oswbank/index.html'
    },
    jsApps: {
      title: 'JS Apps',
      url: './projects/jsapps/index.html'
    },
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
  
