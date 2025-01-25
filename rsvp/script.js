document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvp-form');
    const formStatus = document.getElementById('form-status');

    const attendingInput = document.getElementById('attending');
    const plusOneContainer = document.getElementById('plus-one-wrapper');

    if (attendingInput && plusOneContainer) {
        attendingInput.addEventListener('change', (event) => {
            if (event.target.value === 'yes') {
                plusOneContainer.classList.remove('hidden');
            } else {
                plusOneContainer.classList.add('hidden');
            }
        });
    }


    if (rsvpForm) {
    rsvpForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        // Gather form data
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const attending = formData.get('attending');
        const plusOne = formData.get('plus-one');

        const gotcha = formData.get('_gotcha');

        // If the gotcha field is filled, it’s likely a spam bot
        if (gotcha) {
            formStatus.classList.remove('hidden');
            formStatus.innerHTML = "Sorry, no 🤖 allowed here.";
            return;
        }
        
        // try {
        //   // Send data to Formspree
        //   const response = await fetch(event.target.action, {
        //     method: rsvpForm.method,
        //     headers: { 
        //       'Content-Type': 'application/json', 
        //       'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //       name,
        //       email,
        //       message,
        //       attending,
        //       plusOne,
        //       subject: `${name}'s WEDDING RSVP`
        //     })
        //   });

        //   if (response.ok) {
        //     window.location.href = '/thankyou';
        //   } else {
        //     formStatus.classList.remove('hidden');
        //     formStatus.innerHTML = 'Something went wrong. Please try again.';
        //   }
        // } catch (error) {
        //   formStatus.classList.remove('hidden');
        //   formStatus.innerHTML = `Error: ${error.message}`;
        // }
    });
    }
});