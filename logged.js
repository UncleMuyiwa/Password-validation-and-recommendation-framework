document.querySelector('.login').addEventListener('button', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://ucart-api.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                console.log('User logged in successfully:', data);
                // redirect user to the dashboard or any other page
            } else {
                console.log('Failed to log in:', data);
                // display an error message to the user
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            // display an error message to the user
        });
});