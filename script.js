const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// The page uses proximity snapping to create an intentional, section-by-section
// rhythm while preserving normal scrolling for longer content and small screens.
