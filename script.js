
        // Animated background particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            
            document.getElementById('bgAnimation').appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        // Create particles continuously
        setInterval(createParticle, 300);

        // Custom Cursor Movement
        const cursor = document.getElementById('cursor');
        const trails = [];

        document.addEventListener('mousemove', (e) => {
            // Move main cursor
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            // Create trail effect
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            document.body.appendChild(trail);

            // Remove trail after animation
            setTimeout(() => {
                document.body.removeChild(trail);
            }, 500);
        });

        // Hide cursor when mouse leaves window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
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

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add hover effect to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = 'none';
            });
        });

        // Add click effect to skill cards
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', () => {
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-10px)';
                }, 100);
            });
        });
