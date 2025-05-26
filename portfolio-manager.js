// Theme Switcher
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
themeToggle.onclick = function() {
    document.body.classList.toggle('dark-mode');
    this.innerHTML = document.body.classList.contains('dark-mode') ? 
        '<i class="fas fa-sun"></i> Light Mode' : 
        '<i class="fas fa-moon"></i> Dark Mode';
};

// Add theme toggle to navigation
const nav = document.querySelector('nav');
nav.appendChild(themeToggle);

// Skills Management
let skills = [
    { name: 'Python', icon: 'fab fa-python', description: 'Good understanding of Python for data analysis, cleaning, and building basic ML models' },
    { name: 'Machine Learning', icon: 'fas fa-brain', description: 'Familiar with popular algorithms like regression, classification, and model evaluation' },
    { name: 'Data Science', icon: 'fas fa-database', description: 'Experienced in handling datasets, performing analysis, and extracting insights' },
    { name: 'SQL', icon: 'fas fa-database', description: 'Able to write queries for selecting, filtering, and organizing data' },
    { name: 'Git & GitHub', icon: 'fab fa-github', description: 'Used version control to manage code and collaborate on projects' }
];

function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = '';
    
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
            <div class="skill-actions">
                <button onclick="editSkill('${skill.name}')" class="edit-btn"><i class="fas fa-edit"></i></button>
                <button onclick="deleteSkill('${skill.name}')" class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Add skill form
const addSkillBtn = document.createElement('button');
addSkillBtn.className = 'add-skill-btn';
addSkillBtn.innerHTML = '<i class="fas fa-plus"></i> Add Skill';
addSkillBtn.onclick = () => {
    const skillName = prompt('Enter skill name:');
    const icon = prompt('Enter icon class (e.g., fab fa-python):');
    const description = prompt('Enter skill description:');
    
    if (skillName && icon && description) {
        skills.push({ name: skillName, icon, description });
        renderSkills();
    }
};

// Add to skills section
const skillsSection = document.querySelector('#skills');
skillsSection.insertBefore(addSkillBtn, skillsSection.querySelector('.skills-grid'));

// Projects Management
let projects = [
    {
        name: 'Credit Card Fraud Analysis Using Predictive Modeling',
        description: 'Developed an ML-based fraud detection system that improved fraud detection rates by 20% and reduced false positives by 15%. Implemented using Python, Scikit-learn, and SMOTE for data imbalance.',
        technologies: ['Python', 'Scikit-learn', 'Pandas'],
        methods: ['Random Forest', 'XGBoost', 'SMOTE'],
        results: ['95% accuracy', '20% improvement in detection']
    },
    {
        name: 'Tourist Place Sentiment Analysis Using Machine Learning',
        description: 'Built an interactive dashboard for analyzing tourist reviews using NLP techniques. Achieved 85% accuracy in sentiment classification and processed over 500,000 reviews.',
        technologies: ['Python', 'NLTK', 'Word2Vec'],
        features: ['Real-time analysis', 'topic modeling'],
        ui: ['Interactive dashboard with charts']
    }
];

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-details">
                <ul>
                    <li><strong>Technologies:</strong> ${project.technologies.join(', ')}</li>
                    ${project.methods ? `<li><strong>Methods:</strong> ${project.methods.join(', ')}</li>` : ''}
                    ${project.features ? `<li><strong>Features:</strong> ${project.features.join(', ')}</li>` : ''}
                    ${project.results ? `<li><strong>Results:</strong> ${project.results.join(', ')}</li>` : ''}
                    ${project.ui ? `<li><strong>UI:</strong> ${project.ui.join(', ')}</li>` : ''}
                </ul>
            </div>
            <div class="project-actions">
                <button onclick="editProject('${project.name}')" class="edit-btn"><i class="fas fa-edit"></i></button>
                <button onclick="deleteProject('${project.name}')" class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Add project form
const addProjectBtn = document.createElement('button');
addProjectBtn.className = 'add-project-btn';
addProjectBtn.innerHTML = '<i class="fas fa-plus"></i> Add Project';
addProjectBtn.onclick = () => {
    const projectName = prompt('Enter project name:');
    const description = prompt('Enter project description:');
    const technologies = prompt('Enter technologies (comma separated):').split(',').map(t => t.trim());
    
    if (projectName && description && technologies.length > 0) {
        projects.push({
            name: projectName,
            description,
            technologies
        });
        renderProjects();
    }
};

// Add to projects section
const projectsSection = document.querySelector('#projects');
projectsSection.insertBefore(addProjectBtn, projectsSection.querySelector('.projects-grid'));

// Initialize
renderSkills();
renderProjects();
