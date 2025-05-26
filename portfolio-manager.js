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
