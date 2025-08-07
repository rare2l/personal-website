function downloadCV() {
    alert('CV download will start soon!');
    
    // window.open('path/to/your/cv.pdf', '_blank');
}

window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(function() {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

document.querySelectorAll('.social-btn').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert('This will redirect to ' + this.getAttribute('title') + ' profile');
    });
});