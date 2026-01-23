// Load and render projects from projects.json

async function loadProjects() {
    const grid = document.getElementById('projectGrid');

    try {
        const response = await fetch('projects.json');
        const projects = await response.json();

        if (projects.length === 0) {
            grid.innerHTML = '<p class="no-projects">No projects yet. Add some to projects.json!</p>';
            return;
        }

        grid.innerHTML = projects.map(project => `
            <article class="project-card">
                <h3>${escapeHtml(project.name)}</h3>
                <p>${escapeHtml(project.description)}</p>
                ${project.tags ? `
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="project-links">
                    ${project.demo ? `<a href="${escapeHtml(project.demo)}" target="_blank">Live Demo</a>` : ''}
                    ${project.github ? `<a href="${escapeHtml(project.github)}" target="_blank">GitHub</a>` : ''}
                    ${project.link ? `<a href="${escapeHtml(project.link)}" target="_blank">View Project</a>` : ''}
                </div>
            </article>
        `).join('');

    } catch (error) {
        console.error('Error loading projects:', error);
        grid.innerHTML = '<p class="no-projects">Could not load projects. Make sure projects.json exists.</p>';
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load projects when page is ready
document.addEventListener('DOMContentLoaded', loadProjects);
