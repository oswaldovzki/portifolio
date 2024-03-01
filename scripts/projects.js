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

function alterarProjectPreview(projectId) {
    switch (projectId) {
        case "alurabooks":
            projectPreview.src = "./projetos/alura_books/alura_books.html";
            projectTitle.textContent = 'Alura Books';
            projectSite.href = projectPreview.src;
            break;
        case "aluraplus":
            projectPreview.src = "./projetos/alura_plus/alura+_standalone.html";
            projectTitle.textContent = 'Alura +';
            projectSite.href = projectPreview.src;
            break;
        case "optimustech":
            projectPreview.src = "./projetos/optimus_tech/index.html";
            projectTitle.textContent = 'Optimus Tech';
            projectSite.href = projectPreview.src;
            break;
        case "aluramed":
            projectPreview.src = "./projetos/aluramed/index.html";
            projectTitle.textContent = 'Alura Med';
            projectSite.href = projectPreview.src;
            break;
        case "wavecast":
            projectPreview.src = "./projetos/wavecast/index.html";
            projectTitle.textContent = 'Wave Cast';
            projectSite.href = projectPreview.src;
            break;
        case "spotify-imersao":
            projectPreview.src = "./projetos/spotify-imersao/index.html";
            projectTitle.textContent = 'Spotify Clone';
            projectSite.href = projectPreview.src;
            break;
        case "CalmariaSpa":
            projectPreview.src = "./projetos/CalmariaSpa/index.html";
            projectTitle.textContent = 'Calmaria Spa';
            projectSite.href = projectPreview.src;
            break;
        case "culturama":
            projectPreview.src = "./projetos/culturama/index.html";
            projectTitle.textContent = 'Culturma';
            projectSite.href = projectPreview.src;
            break;
        case "mentalista":
            projectPreview.src = "./projetos/mentalista/index.html";
            projectTitle.textContent = 'Mentalista';
            projectSite.href = projectPreview.src;
            break;
        case "jsApps":
            projectPreview.src = "./projetos/jsApps/index.html";
            projectTitle.textContent = 'JS Apps';
            projectSite.src = projectPreview.src;
            break;
        default:
            break;
    }
}
