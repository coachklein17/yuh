let balance = 0;
const transactions = [];
let expenseChart = null; // Store the chart instance

// Load saved transactions from local storage
document.addEventListener("DOMContentLoaded", () => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push(...savedTransactions);
    updateBalance();
    updateTransactionList();
    updateChart();
});

function addTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;

    if (!description || isNaN(amount)) {
        alert("Please enter a valid transaction.");
        return;
    }

    const transaction = { description, amount, type, category };
    transactions.push(transaction);

    // Save to local storage
    localStorage.setItem("transactions", JSON.stringify(transactions));

    updateBalance();
    updateTransactionList();
    updateChart();
}

function updateBalance() {
    balance = transactions.reduce((total, t) => {
        return t.type === "income" ? total + t.amount : total - t.amount;
    }, 0);

    document.getElementById("balance").innerText = balance.toFixed(2);
}

function updateTransactionList() {
    const list = document.getElementById("transaction-list");
    list.innerHTML = "";
    transactions.forEach((t, index) => {
        const item = document.createElement("li");
        item.textContent = `${t.description} - $${t.amount} (${t.type}, ${t.category})`;
        list.appendChild(item);
    });
}

function updateChart() {
    const categories = {};
    transactions.forEach(t => {
        if (t.type === "expense") {
            categories[t.category] = (categories[t.category] || 0) + t.amount;
        }
    });

    const ctx = document.getElementById("expenseChart").getContext("2d");

    // Destroy existing chart before creating a new one
    if (expenseChart) {
        expenseChart.destroy();
    }

    expenseChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: Object.keys(categories),
            datasets: [{
                label: "Expenses",
                data: Object.values(categories),
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"]
            }]
        }
    });
}
