// Performance optimization: Debounce scroll handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling with improved performance
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optimized projects data loading
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1. Replace this with your project details.",
        image: "https://via.placeholder.com/300x200",
        tags: ["HTML", "CSS", "JavaScript"],
        liveDemo: "https://your-live-demo-url.com",
        sourceCode: "https://github.com/yourusername/project1"
    },
    {
        title: "Project 2",
        description: "Description of project 2. Replace this with your project details.",
        image: "https://via.placeholder.com/300x200",
        tags: ["React", "Node.js"],
        liveDemo: "https://your-live-demo-url.com",
        sourceCode: "https://github.com/yourusername/project2"
    },
    {
        title: "Project 3",
        description: "Description of project 3. Replace this with your project details.",
        image: "https://via.placeholder.com/300x200",
        tags: ["TypeScript", "API"],
        liveDemo: "https://your-live-demo-url.com",
        sourceCode: "https://github.com/yourusername/project3"
    }
];

// Optimized project card creation with DocumentFragment
function createProjectCard(project) {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p>${project.description}</p>
                <div class="skill-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="live-demo">Live Demo</a>
                    <a href="${project.sourceCode}" target="_blank" rel="noopener noreferrer" class="source-code">Source Code</a>
                </div>
            </div>
        </div>
    `;
    return template.content.firstElementChild;
}

// Optimized project loading with batch updates
const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
    const fragment = document.createDocumentFragment();
    projects.forEach(project => {
        fragment.appendChild(createProjectCard(project));
    });
    projectsContainer.appendChild(fragment);
}

// Optimized form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! This is a demo alert - implement your own form handling logic.');
        contactForm.reset();
    });
}

// Optimized scroll handling with debounce
let lastScroll = 0;
const navbar = document.getElementById('navbar');

const handleScroll = debounce(() => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll && !navbar.contains(document.activeElement)) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
}, 10);

window.addEventListener('scroll', handleScroll, { passive: true });

// Optimized Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Batch observe elements
const elementsToObserve = document.querySelectorAll('.project-card, .skill-tags span');
elementsToObserve.forEach(el => observer.observe(el));

// Add animated shapes dynamically for better performance
function createAnimatedShapes() {
    const shapes = document.querySelectorAll('.animated-shape');
    shapes.forEach(shape => {
        shape.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
    });
}

// Initialize shapes after DOM content is loaded
document.addEventListener('DOMContentLoaded', createAnimatedShapes);