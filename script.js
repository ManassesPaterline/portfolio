// Filtro das linguagens dos projetos.
function updateProjectsText() {
    const languageSelect = document.getElementById('programming_language');
    const projectsText = document.getElementById('projectsText');
    const selectedLanguage = languageSelect.value;
    const projects = document.querySelectorAll('.project')

    let text = '';

    switch (selectedLanguage) {
        case 'all':
            text = 'Todas as Linguagens:';
            break;
        case 'c':
            text = 'Projetos em C:';
            break;
        case 'cpp':
            text = 'Projetos em C++:';
            break;
        case 'html-css':
            text = 'Projetos em HTML / CSS:';
            break;
        case 'python':
            text = 'Projetos em Python:';
            break;
        case 'javascript':
            text = 'Projetos em JavaScript:';
            break;
        default:
            text = 'Todas as Linguagens:';
    }

    projectsText.textContent = text;

    projects.forEach(project => {
        if (selectedLanguage === 'all' || project.getAttribute('data-language') === selectedLanguage) {
            project.style.display = 'block'; // Mostra o projeto
        } else {
            project.style.display = 'none'; // Esconde o projeto
        }
    });
}