// Global Variables
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

// Handle form submission
document.getElementById("transaction-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;

    // Validate input
    if (!description || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid transaction.");
        return;
    }

    // Create transaction object
    const transaction = { description, amount, type, category };
    transactions.push(transaction);

    // Save to local storage
    localStorage.setItem("transactions", JSON.stringify(transactions));

    // Reset form fields
    document.getElementById("description").value = '';
    document.getElementById("amount").value = '';
    document.getElementById("type").value = 'income';
    document.getElementById("category").value = 'food';

    // Update balance, list, and chart
    updateBalance();
    updateTransactionList();
    updateChart();
});

// Update the balance (total income - total expenses)
function updateBalance() {
    balance = transactions.reduce((total, t) => {
        return t.type === "income" ? total + t.amount : total - t.amount;
    }, 0);

    document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
}

// Update the transaction list
function updateTransactionList() {
    const list = document.getElementById("transaction-list");
    list.innerHTML = ""; // Clear current list

    transactions.forEach((t, index) => {
        const item = document.createElement("li");
        item.innerHTML = `${t.description} - $${t.amount} (${t.type}, ${t.category})`;
        list.appendChild(item);
    });
}

// Update the pie chart for expense categories
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

    // Create new pie chart
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
