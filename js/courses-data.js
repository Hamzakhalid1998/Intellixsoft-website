

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });

        // FAQ Accordion
        document.querySelectorAll('.faq-item').forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.querySelector('.faq-answer').classList.toggle('hidden');
            });
        });

        // Modal functionality
        const modal = document.getElementById('modal');
        document.getElementById('openModal').addEventListener('click', () => modal.classList.remove('hidden'));
        document.getElementById('closeModal').addEventListener('click', () => modal.classList.add('hidden'));

        // Form submission
        document.getElementById('enrollForm').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Enrollment form submitted successfully!');
            this.reset();
            modal.classList.add('hidden');
        });