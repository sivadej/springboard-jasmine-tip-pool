
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;
  tr.append(newTd);
}

//create td with value X, delete the row it belongs to
function appendDeleteBtn(tr) {
  let newTd = document.createElement('td');
  newTd.innerText = 'X';
  newTd.classList.add('deleteBtn');
  tr.append(newTd);
  
  //Set an click event listener on the ‘td’ that will remove the parent ‘tr’ from the dom
  newTd.addEventListener('click',function(e){
    newTd.parentElement.remove();
  })
}