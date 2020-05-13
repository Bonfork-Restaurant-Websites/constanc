// Helper function to get form data in the supported format
function getFormDataString(formEl) {
    var formData = new FormData(formEl),
        data = [];

    for (var keyValue of formData) {
        data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
    }

    return data.join("&");
}

// Fetch the form element
var contactForm = document.getElementById("contact-form");

// Override the submit event
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var request = new XMLHttpRequest();

    request.addEventListener("load", function () {
        if (request.status === 302) { // CloudCannon redirects on success
            // It worked
        }
    });

    request.open(contactForm.method, contactForm.action);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(getFormDataString(contactForm));
    contactForm.style.display = 'none';
    document.getElementById('alert').style.display = 'block';
});
