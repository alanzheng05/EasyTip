window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
    
    // Dark mode toggle
    document.querySelector('#darkModeToggle').addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
}

function calculateTip() {
    const amount = document.querySelector('#amount').value;
    const persons = document.querySelector('#persons').value;
    const service = document.querySelector('#services').value;

    // Validate inputs
    if (!amount || service === 'Select') {
        alert("Please enter valid values");
        return;
    }

    // Show/hide "each" text based on number of people
    document.querySelector('#each').style.display = persons === '1' ? 'none' : 'block';

    // Calculate and display tip per person
    const total = ((amount * service) / persons).toFixed(2);
    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}