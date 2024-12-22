document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    document.getElementById('results').innerHTML = `Searching buses from ${from} to ${to} on ${date}`;
});

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const busId = document.getElementById('busId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('bookingResult').innerHTML =`Booking ticket for Bus ID ${busId}`;
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    document.getElementById('contactResult').innerHTML = `Thank you, ${name}. Your message has been sent`;
});