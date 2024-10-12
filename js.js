document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.innerText = '';
    errorMessage.classList.remove('show-error');

    try {
        const response = await fetch('https://dummyjson.com/auth/login', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = 'dashboard.html';
        } else {
            showError(data.message || 'Invalid username or password');
        }
    } catch (error) {
        console.error('Error:', error);
        showError('Something went wrong. Please try again.');
    }
});

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = message;
    errorMessage.classList.add('show-error');

    setTimeout(() => {
        errorMessage.classList.remove('show-error');
    }, 3000);
}