document.addEventListener('DOMContentLoaded', () => {
    const courseBoxes = document.querySelectorAll('.course-box');
    const courseForm = document.getElementById('course-form');
    const formTitle = document.getElementById('form-title');
    const navLinks = document.querySelectorAll('nav ul li a');
    const form = document.getElementById('verify-form');
    const resultDiv = document.getElementById('verification-result');

    courseBoxes.forEach(box => {
        box.addEventListener('click', () => {
            formTitle.textContent = `Enroll in ${box.dataset.course}`;
            courseForm.style.display = 'block';
            window.scrollTo({
                top: courseForm.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        const certificateId = document.getElementById('certificate-id').value;

        // Simulate certificate verification process
        if (certificateId === "12345") {
            resultDiv.innerHTML = "<p style='color: green;'>Certificate is valid.</p>";
        } else {
            resultDiv.innerHTML = "<p style='color: red;'>Certificate is invalid.</p>";
        }
    });

    document.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) { // Adjust this value as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
