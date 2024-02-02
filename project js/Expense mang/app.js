var expenses = [];
var totalAmount = 0;

var categorySelect = document.getElementById('category-select');
var amountInput = document.getElementById('amount-input');
var dateInput = document.getElementById('date-input');
var addBtn = document.getElementById('add-btn');
var expensesTableBody = document.getElementById('expnese-table-body');
var totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
  var category = categorySelect.value;
  var amount = Number(amountInput.value);
  var date = dateInput.value;

  if (category ===' null') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please select a category!',
    });
    return;
  } else if (amount === '' || amount <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter an amount greater than zero!',
    });
    return;
  } else if (date === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please select a date!',
    });
    return;
  }

  expenses.push({ category, amount, date });

  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;

  var newRow = expensesTableBody.insertRow();

  var categoryCell = newRow.insertCell();
  var amountCell = newRow.insertCell();
  var dateCell = newRow.insertCell();
  var deleteCell = newRow.insertCell();
  var deleteBtn = document.createElement('button');

  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', function() {
    expenses.splice(expenses.indexOf(expense), 1);

    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;

    expensesTableBody.removeChild(newRow);
  });

  var expense = expenses[expenses.length - 1];
  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
});


// function signout(){
//   location.href="./index.html";
// }