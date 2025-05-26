# Portfolio Update Guide

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

## After Making Changes

1. Save all files
2. Run these commands in terminal:
```bash
git add .
git commit -m "Added [your changes]"
git push origin main
```

Your changes will be live on your portfolio website shortly after pushing.

## Font Awesome Icons

You can find icons at: https://fontawesome.com/icons

Common icons used:
- Programming languages: `fab fa-python`, `fab fa-html5`, `fab fa-js`
- Skills: `fas fa-brain`, `fas fa-database`, `fas fa-chart-line`
- Projects: `fas fa-laptop-code`, `fas fa-chart-bar`, `fas fa-robot`
