function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);

    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterShareUrl, '_blank');
}
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookShareUrl, '_blank');
}

document.getElementById('sharebutton').addEventListener('click', shareOnTwitter);
document.getElementById('sharebuttonf').addEventListener('click', shareOnFacebook);