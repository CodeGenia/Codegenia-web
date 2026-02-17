// Check if user has already accepted or rejected cookies
if (localStorage.getItem('cookieConsent') !== 'accepted' && localStorage.getItem('cookieConsent') !== 'rejected') {
    // Show cookie consent banner
    document.getElementById('cookieConsent').style.display = 'block';
}

// Handle accept button click
document.getElementById('acceptCookies').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieConsent').style.display = 'none';
    // Here you can add code to enable cookies or tracking
});

// Handle reject button click
document.getElementById('rejectCookies').addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'rejected');
    document.getElementById('cookieConsent').style.display = 'none';
    // Here you can add code to disable cookies or tracking
});
