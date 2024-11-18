// document.getElementById('rsvp-btn').addEventListener('click', () => {
//     const modal = document.getElementById('rsvp-modal');
//     modal.classList.toggle('hidden');
//   });
  
// // Optional: Close modal when clicking outside or adding a close button
// document.addEventListener('click', (event) => {
//     const modal = document.getElementById('rsvp-modal');
//     if (!modal.contains(event.target) && !event.target.matches('#rsvp-btn')) {
//     modal.classList.add('hidden');
//     }
// });

// Handle form submission
document.getElementById('rsvp-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // // Use a service like Formspree for email handling
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, message }),
    // })
    // .then((response) => {
    //     if (response.ok) {
    //     alert('RSVP submitted successfully!');
    //     event.target.reset();
    //     } else {
    //     alert('Something went wrong. Please try again.');
    //     }
    // })
    // .catch((error) => {
    //     alert('Error: ' + error.message);
    // });
});
