// script.js

// Seleciona o input do toggle switch
const themeToggle = document.getElementById('theme-toggle');

// Verifica se o modo escuro está ativo no localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true;
}

// Adiciona um evento de mudança ao input do toggle switch
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');

    // Salva a preferência do usuário no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});





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