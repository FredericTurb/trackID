function shareOnTwitter() {
    // Get current page URL and title
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);

    // Twitter share URL
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    
    // Open Twitter share window
    window.open(twitterShareUrl, '_blank');
}

// Function to share on Facebook
function shareOnFacebook() {
    // Get current page URL
    const url = encodeURIComponent(window.location.href);

    // Facebook share URL
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    
    // Open Facebook share window
    window.open(facebookShareUrl, '_blank');
}

// Add click event listeners to buttons
document.getElementById('twi').addEventListener('click', shareOnTwitter);
document.getElementById('fac').addEventListener('click', shareOnFacebook);