document.addEventListener('DOMContentLoaded', function() {
    // Data for dynamic sections
    const data = {
        experience: [
            {
                title: "Full Stack Engineer at Tangazoletu Limited",
                period: "April 2023 - Present",
                description: "As a Product Software Developer at Tangazoletu Limited, I have been instrumental in delivering high-quality software solutions, particularly in the finance sector. My work includes the development of mobile banking, credit scoring, and management portals, utilizing technologies such as Spring Boot, Java, Kotlin, Vue.js, and React.js. I am deeply committed to leveraging the latest technologies like Docker and CI/CD pipelines to ensure that the products I develop are robust, scalable, and meet the highest standards of quality."
            },
            {
                title: "Junior Software Developer at Ministry of Health",
                period: "January 2022 - March 2023",
                description: "In my role as a Junior Software Developer at the Ministry of Health, I gained valuable experience working with Django and Python, focusing on creating scalable and efficient solutions. I was also responsible for deploying applications using Docker, ensuring seamless and reliable deployment processes. This experience honed my skills in backend development and introduced me to the importance of quality and innovation in software engineering."
            },
            // {
            //     title: "Software Developer at XYZ Company",
            //     period: "2019 - 2022",
            //     description: "Developed and maintained web applications using Django, React, and MySQL. Focused on backend development and API integrations."
            // }
        ], projects: [
            {
                title: "Credit Scoring System",
                description: "A sophisticated credit scoring system designed to evaluate and manage creditworthiness. This system uses advanced algorithms to analyze financial data and generate reliable credit scores, helping financial institutions make informed lending decisions.",
                image: "https://via.placeholder.com/500x300?text=Credit+Scoring+System"
            },
            {
                title: "Kanja Project",
                description: "An innovative system designed for SACCO members to send money directly to each other without relying on third-party services like MPesa. The Kanja Project streamlines money transfers within SACCOs, enhancing efficiency and reducing transaction costs.",
                image: "https://via.placeholder.com/500x300?text=Kanja+Project"
            },
            {
                title: "AfyaSoftPlus",
                description: "AfyaSoftPlus is a groundbreaking mental health app that connects users with specialists for physical or virtual consultations. The app also plans to incorporate virtual reality features to provide immersive therapeutic experiences. It's designed to support mental well-being by making expert help easily accessible.",
                image: "https://via.placeholder.com/500x300?text=AfyaSoftPlus"
            },
            {
                title: "Spotcash Banking System",
                description: "Spotcash is a banking solution developed at Tangazoletu Limited. This system offers a comprehensive suite of banking services, including account management, transactions, and financial reporting. It's designed to meet the needs of modern banking customers with a focus on security and user experience.",
                image: "https://via.placeholder.com/500x300?text=Spotcash+Banking+System"
            },
            {
                title: "Ecommerce Project",
                description: "An e-commerce web application developed with WordPress using Elementor. The project features a fully responsive design, easy product management, and a seamless shopping experience.",
                image: "images/wordpress.png"
            },
            {
                title: "Django Inventory System",
                description: "An inventory system developed using Django and Bootstrap 4. This system helps manage inventory levels, track stock movements, and generate reports, improving efficiency in inventory management.",
                image: "images/django.png"
            },
            {
                title: "React App",
                description: "A React web application utilizing Axios to fetch APIs. This project demonstrates dynamic data handling and responsive design, providing an interactive user experience.",
                image: "images/react.png"
            }
        ],
        education: [
            {
                institution: "University of KCA University",
                degree: "Bachelor's in Information Technology",
                period: "2018 - 2022"
            },
            {
                institution: "University of KCA University",
                degree: "CCNA Certification",
                period: "2020 Feb - 2020 April"
            },
            {
                institution: "Modcom Institute of Technology",
                degree: "Full Stack Web Development",
                period: "2018 Jan - 2018 April"
            },
            {
                institution: "Kanyakine High School",
                degree: "KCSE",
                period: "2017 Jan - 2017 Dec"
            },
            
            

        ],
        testimonials: [
            {
                name: "Nathan Koech",
                position: "Project Manager",
                feedback: "Moses is a highly skilled engineer who consistently delivers top-quality work. His attention to detail and problem-solving abilities are exceptional."
            },
            {
                name: "Patrick Mungai",
                position: "CTO ",
                feedback: "It was a pleasure working with Moses. He demonstrates a deep understanding of technology and is always willing to go the extra mile to ensure success. His professionalism and collaborative spirit make him a standout team member"
            },
            {
                name: "Isaac Obuya",
                position: "Team Lead",
                feedback: "Moses is an exceptional developer with a knack for solving complex problems. His innovative approach and ability to adapt to new challenges have been instrumental in our project's success. His strong work ethic and technical skills are truly commendable."
            },
            {
                name: "Eugune Gitonga",
                position: "CEO (AfyaSoftPlus)",
                feedback: "Moses has been a driving force behind our tech initiatives at AfyaSoftPlus. His ability to integrate complex systems and his visionary approach to solving mental health challenges through technology are inspiring. His leadership and technical expertise have significantly contributed to our mission"
            }
        ],
        blog: [
            {
                header : "The Importance of Clean Code",
                title: "clean-code",
                summary: "Writing clean code is essential for maintaining and scaling software applications...",
                link: "readme.html"
            },
            {
                header : "Understanding RESTful APIs",
                title: "restful-apis",
                summary: "RESTful APIs are the backbone of modern web applications. This article explores how they work...",
                link: "readme.html"
            }
        ]
    };

    // Function to render experience section
    function renderExperience() {
        const experienceContent = document.getElementById('experience-content');
        data.experience.forEach(exp => {
            const expDiv = document.createElement('div');
            expDiv.className = 'col-md-6';
            expDiv.innerHTML = `
                <h4>${exp.title}</h4>
                <p><strong>${exp.period}</strong></p>
                <p>${exp.description}</p>
            `;
            experienceContent.appendChild(expDiv);
        });
    }

    // Function to render projects section
    function renderProjects() {
        const projectsContent = document.getElementById('projects-content');
        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'col-md-4';
            projectDiv.innerHTML = `
                <div class="card mb-4">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                    </div>
                </div>
            `;
            projectsContent.appendChild(projectDiv);
        });
    }

    // Function to render education section
    function renderEducation() {
        const educationContent = document.getElementById('education-content');
        data.education.forEach(edu => {
            const eduDiv = document.createElement('div');
            eduDiv.className = 'col-md-6';
            eduDiv.innerHTML = `
                <h4>${edu.institution}</h4>
                <p><strong>${edu.degree}</strong></p>
                <p>${edu.period}</p>
            `;
            educationContent.appendChild(eduDiv);
        });
    }

    // Function to render testimonials section
    function renderTestimonials() {
        const testimonialsContent = document.getElementById('testimonials-content');
        data.testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.className = 'col-md-6';
            testimonialDiv.innerHTML = `
                <blockquote class="blockquote">
                    <p>"${testimonial.feedback}"</p>
                    <footer class="blockquote-footer">${testimonial.name}, <cite title="Source Title">${testimonial.position}</cite></footer>
                </blockquote>
            `;
            testimonialsContent.appendChild(testimonialDiv);
        });
    }

    // Function to render blog section
    function renderBlog() {
        const blogContent = document.getElementById('blog-content');
        data.blog.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'col-md-6 mb-4';
            postDiv.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h4>${post.header}</h4>
                        <p>${post.summary}</p>
                        <a href="readme.html?post=${post.title.toLowerCase().replace(/ /g, '-')}" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `;
            blogContent.appendChild(postDiv);
        });
    }
    

    // Render all sections
    renderExperience();
    renderProjects();
    renderEducation();
    renderTestimonials();
    renderBlog();
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send("service_x2bbc4m", "template_bzrllt7", {
            from_name: name,
            from_email: email,
            message: message,
        }).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showPopup();
            closePopupI();
        }, function(error) {
            console.log('FAILED...', error);
        });
    });

    function showPopup() {
        document.getElementById('popup').style.display = 'block';
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }
});
