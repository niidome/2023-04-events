window.addEventListener('DOMContentLoaded', (e) => {
    const handleObserver = (elements) => {
        elements.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add('active');
            } else if (element.target.classList.contains('active')) {
                element.target.classList.remove('active');
            }
        });
    };

    let observer = new IntersectionObserver(handleObserver);

    let title = document.getElementsByTagName('h1')[0];
    observer.observe(title);

    let image = document.querySelectorAll('.photo');
    image.forEach(element => {
        observer.observe(element);
    });

    let paragraph = document.querySelectorAll('.paragraph');
    paragraph.forEach(element => {
        observer.observe(element);
    })
});
