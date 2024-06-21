// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scroll to sections
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Example: Dynamic Project Descriptions
    const projects = [
        
        {
            title: "Project 5",
            description: "Automate continuous integration and delivery using Jenkins, replacing manual steps with automated actions between staging and production. Utilize Terraform, Ansible, Vault, Sonarqube, Jenkins, New Relic, Slack, GitHub, Nexus, Docker Hub, and AWS to manage infrastructure, deploy Docker containers, and monitor application performance. Key processes included using Jenkins pipelines for CI/CD, auto-scaling groups for instance management, and Ansible playbooks for dynamic updates and deployments. The project ensured seamless integration, delivery, and monitoring of applications in a cloud environment.",
            image: "images/autodiscovery-project.gif",
            link: "#"
        }
    ];

    const projectSection = document.getElementById("projects");
    projectSection.innerHTML = '<h2>Projects</h2>';
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `
            <h3><a href="${project.link}">${project.title}</a></h3>
            <img src="${project.image}" alt="${project.title} Snap" class="project-img">
            <p>${project.description}</p>
        `;
        projectSection.appendChild(projectDiv);
    });
});
