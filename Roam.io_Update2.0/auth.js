async function verifyAuth() {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        alert("You must be logged in to access this page.");
        window.location.href = "userLogin.html";
    }
}

// Run this check when the page loads
document.addEventListener("DOMContentLoaded", verifyAuth);
