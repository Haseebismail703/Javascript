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

    if (category === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'plese select categary',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        return;
    }
   else if (amount== '' || amount <=0 ) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please enter amount',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
        return;
    }
    else if(date === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'plase select date!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        return;
    }
    else if (category === 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'plese select categary!',
            
          })
        return;
    }
  


    expenses.push({category, amount, date
    });

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

for (var expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    var newRow = expensesTableBody.inserRow();
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
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}