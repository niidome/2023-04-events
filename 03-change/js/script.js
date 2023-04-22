window.addEventListener('load', (e) => {
    const colors = document.querySelectorAll(`input[type='radio'][name='color']`);
    const body = document.getElementsByTagName('body')[0];

    colors.forEach((element) => {
        element.addEventListener('change', (e) => {
            body.classList.remove(...body.classList);
            body.classList.add(element.value);
        });
    });
});
