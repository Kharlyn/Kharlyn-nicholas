
document.getElementById("flight-search").addEventListener("submit", function (e) {
    e.preventDefault();

    
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
    const passengers = document.getElementById("passengers").value;

    const results = document.getElementById("flight-results");
    results.innerHTML = `
        <div class="result-item">
            <h3>${from} to ${to}</h3>
            <p>Departure: ${departureDate}</p>
            ${returnDate ? `<p>Return: ${returnDate}</p>` : ""}
            <p>Passengers: ${passengers}</p>
            <p>Price: $${Math.floor(Math.random() * 500) + 100}</p>
        </div>
    `;
});


document.getElementById("chat-btn").addEventListener("click", function () {
    alert("Starting a chat with Kharlyn!");
});
