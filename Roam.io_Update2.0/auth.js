//Name: Aswini Subramanian, Raj Darji, Patrick Nicholson, Sam Webster, Paul Lopresti
//File: auth.js
//Date: 4/20/25
//Purpose: to authenticate the username and password for all users



async function verifyAuth() {
    const username = localStorage.getItem("username");

    if (!username) {
        alert("You must be logged in to access this page.");
        window.location.href = "userLogin.html";
        return;
    }
    
    // If we get here, user is authenticated
    console.log("User authenticated:", username);
}

// Run this check when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Check if we're on a page that requires authentication
    const currentPage = window.location.pathname;
    const pagesRequiringAuth = ['/JsonGMData.html', '/userProfile.html'];
    
    // Check if the current page requires authentication
    const requiresAuth = pagesRequiringAuth.some(page => 
        currentPage.endsWith(page) || currentPage.includes(page)
    );
    
    if (requiresAuth) {
        verifyAuth();
    }
});
