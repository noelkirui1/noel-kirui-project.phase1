fetch('http://localhost:3000/vehicles')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  document.addEventListener("DOMContentLoaded", function() {
    
    // Add event listener to the confirm button
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        alert("Thank you! Your message has been received.");
});
  })
