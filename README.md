# Portfolio Update Guide

## How This Portfolio Was Built

This portfolio website was built using:

1. **HTML5** - For the structure of the website
2. **CSS3** - For styling and layout
3. **JavaScript** - For interactivity (when needed)
4. **Font Awesome Icons** - For icons and visual elements
5. **Google Fonts (Inter)** - For typography

### Key Features
- Responsive design that works on all devices
- Clean, modern layout with a white and black color scheme
- Sections for About, Skills, Projects, and Contact
- Font Awesome icons for visual appeal
- GitHub Pages deployment

### File Structure
```
portfolio/
├── index.html        # Main HTML file
├── styles.css        # CSS styles
└── README.md        # This guide
```

## Adding a New Skill

To add a new skill, follow these steps:

1. Open `index.html`
2. Find the Skills section (look for `<section id="skills">`)
3. Add a new skill card inside the `.skills-grid` div using this format:

```html
<div class="skill-card">
    <i class="[icon-class]"></i>
    <h3>[Skill Name]</h3>
    <p>[Skill Description]</p>
</div>
```

Example:
```html
<div class="skill-card">
    <i class="fas fa-chart-line"></i>
    <h3>Data Visualization</h3>
    <p>Expert in creating interactive visualizations using Python libraries like Matplotlib and Seaborn</p>
</div>
```

## Adding a New Project

To add a new project, follow these steps:

1. Open `index.html`
2. Find the Projects section (look for `<section id="projects">`)
3. Add a new project card inside the `.projects-grid` div using this format:

```html
<div class="project-card">
    <h3>[Project Name]</h3>
    <p>[Project Description]</p>
    <div class="project-details">
        <ul>
            <li><strong>Technologies:</strong> [Tech1, Tech2, Tech3]</li>
            <li><strong>Results:</strong> [Result1, Result2]</li>
            <!-- Add other details as needed -->
        </ul>
    </div>
</div>
```

Example:
```html
<div class="project-card">
    <h3>Stock Price Prediction System</h3>
    <p>Developed a machine learning model to predict stock prices using historical data and technical indicators</p>
    <div class="project-details">
        <ul>
            <li><strong>Technologies:</strong> Python, TensorFlow, Pandas</li>
            <li><strong>Results:</strong> 85% prediction accuracy, Real-time updates</li>
            <li><strong>Features:</strong> Interactive charts, Historical analysis</li>
        </ul>
    </div>
</div>
```

## Tips for Adding Content

1. Keep descriptions concise and focused
2. Use relevant icons from Font Awesome (add them via the class name)
3. Add specific results and metrics when possible
4. Keep the layout consistent with existing items
5. Test the changes in a browser before committing

## Deployment

The portfolio is hosted on GitHub Pages:
1. Push changes to the main branch
2. GitHub Pages will automatically deploy the website
3. View your live portfolio at: https://venkatram06.github.io/

## Font Awesome Icons

You can find icons at: https://fontawesome.com/icons

Common icons used:
- Programming languages: `fab fa-python`, `fab fa-html5`, `fab fa-js`
- Skills: `fas fa-brain`, `fas fa-database`, `fas fa-chart-line`
- Projects: `fas fa-laptop-code`, `fas fa-chart-bar`, `fas fa-robot`

## Updating the Portfolio

1. Make changes to `index.html` or `styles.css`
2. Save the files
3. Run these commands in terminal:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The changes will be live on your portfolio website shortly after pushing.
