document.getElementById('toggleBtn').addEventListener('click', function () {
    // Check screen width before redirecting
    if (window.innerWidth < 1024) {
        document.getElementById('mobileMenu').classList.toggle('show');
    } else {
        // Redirect to a link when screen width is larger than 768 pixels
        window.location.href = 'index.html';
    }
})