# Modern Portfolio Website

A sleek and modern portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, smooth animations, and dark mode support.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌓 Automatic dark mode support
- ✨ Smooth animations and transitions
- 🎯 Interactive project cards
- 📝 Contact form
- 🚀 Easy to customize and deploy

## How to Deploy to GitHub Pages

1. Create a new repository on GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. Enable GitHub Pages
   - Go to your repository settings on GitHub
   - Scroll down to the "GitHub Pages" section
   - Select the "main" branch as the source
   - Click "Save"
   - Your site will be published at `https://yourusername.github.io/portfolio`

## How to Customize

### Adding Your Projects

1. Open `main.js`
2. Find the `projects` array
3. Add or modify project objects with your information:
   ```javascript
   {
       title: "Your Project Name",
       description: "Description of your project",
       image: "path/to/your/image.jpg",
       tags: ["Your", "Tech", "Stack"],
       liveDemo: "https://your-live-demo-url.com",
       sourceCode: "https://github.com/yourusername/project"
   }
   ```

### Customizing Colors

1. Open `style.css`
2. Find the `:root` selector
3. Modify the color variables:
   ```css
   :root {
       --primary-color: #your-color;
       --secondary-color: #your-color;
       /* ... other colors ... */
   }
   ```

### Updating Content

1. Open `index.html`
2. Update the text content:
   - Title and subtitle in the hero section
   - About me section
   - Skills
   - Contact information

## Development

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Make your changes

3. Test locally
   ```bash
   # Using any local server, for example:
   npx serve
   ```

4. Commit and push changes
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

## Best Practices

- Optimize images before uploading
- Keep project descriptions concise and meaningful
- Regularly update your portfolio with new projects
- Ensure all links are working
- Test the website across different devices and browsers

## License

This project is open source and available under the [MIT License](LICENSE).# Potfolio
