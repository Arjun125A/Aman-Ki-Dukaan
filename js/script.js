// Simple "Add to Cart" alert
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
