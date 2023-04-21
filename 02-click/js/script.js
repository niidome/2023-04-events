window.addEventListener('DOMContentLoaded', (e) => {
    let count = 0;
    const likeCounter = document.getElementById('counter');
    const likeButton = document.getElementById('like');
    const setCount = (n) => {
        likeCounter.textContent = n;
    }

    setCount(count);

    likeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('click');

        count++;
        setCount(count);
    });
});