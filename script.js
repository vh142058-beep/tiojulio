// Animação de Scroll Reveal
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 120;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Executa ao carregar a página
});
