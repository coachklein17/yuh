---
layout: default
title: Cool Finance Tracker
---

# Cool Finance Tracker

Welcome to the **Cool Finance Tracker**, where you can easily track your income and expenses, view your balance, and analyze your spending habits with interactive charts.

## Add a New Transaction

Use the form below to add a new transaction:

<form id="transaction-form">
  <input type="text" id="description" placeholder="Transaction Description" required>
  <input type="number" id="amount" placeholder="Amount" required>
  <select id="type" required>
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>
  <select id="category" required>
    <option value="food">Food</option>
    <option value="transport">Transport</option>
    <option value="entertainment">Entertainment</option>
    <option value="other">Other</option>
  </select>
  <button type="submit">Add Transaction</button>
</form>

## Your Balance

<p id="balance">$0.00</p>

## Transaction History

<ul id="transaction-list">
  <!-- Transaction list will populate here -->
</ul>

## Expense Distribution

<canvas id="expenseChart"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="/assets/js/app.js"></script>
