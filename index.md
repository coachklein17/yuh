---
layout: default
title: Personal Finance Tracker
---

<h1>Personal Finance Tracker</h1>
<h2>Balance: $<span id="balance">0.00</span></h2>

<div class="transaction-form">
    <input type="text" id="description" placeholder="Description">
    <input type="number" id="amount" placeholder="Amount">
    <select id="category">
        <option value="Food">Food</option>
        <option value="Bills">Bills</option>
        <option value="Salary">Salary</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
    </select>
    <select id="type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
    </select>
    <button onclick="addTransaction()">Add</button>
</div>

<h3>Transaction History</h3>
<ul id="transaction-list"></ul>


