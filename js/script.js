document.addEventListener('DOMContentLoaded', function() {
    // Animate statistics counting
    function animateValue(id, start, end, duration) {
        let obj = document.getElementById(id);
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let timer = setInterval(function() {
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Start counting when community section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue("members-count", 0, 12500, 2000);
                animateValue("trees-planted", 0, 85000, 2000);
                animateValue("countries", 0, 42, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});

    observer.observe(document.querySelector('#community'));

    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Open clicked FAQ if it wasn't already active
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });

    // CTA button functionality
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would scroll to the pledge section or open a form
            alert('Thank you for your interest in tree conservation! This would navigate to the pledge form.');
        });
    });
});