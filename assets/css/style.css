body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #1e3c72, #2a5298);
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.transaction-form {
    margin: 20px auto;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.2);
    padding: 15px;
    border-radius: 8px;
}

input, select, button {
    margin: 5px;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    outline: none;
}

input, select {
    background: rgba(255, 255, 255, 0.9);
    color: black;
}

button {
    background: #ff9800;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: #e68900;
}

canvas {
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
}

.chart-container {
    margin-top: 30px;
    background: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        width: 90%;
        margin: 20px auto;
    }
    h1 {
        font-size: 2em;
    }
}

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const ctx = document.getElementById("interactiveChart").getContext("2d");
        let chart;
        function updateChart() {
            if (chart) chart.destroy();
            const categories = {};
            transactions.forEach(t => {
                if (t.type === "expense") {
                    categories[t.category] = (categories[t.category] || 0) + t.amount;
                }
            });
            chart = new Chart(ctx, {
                type: "pie",
                data: {
                    labels: Object.keys(categories),
                    datasets: [{
                        label: "Expenses",
                        data: Object.values(categories),
                        backgroundColor: ["red", "blue", "green", "orange", "purple"]
                    }]
                }
            });
        }
        updateChart();
    });
</script>

<div class="chart-container">
    <canvas id="interactiveChart"></canvas>
</div>
