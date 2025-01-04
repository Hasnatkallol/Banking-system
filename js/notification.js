// For MenuBar
const menu = document.getElementById("menu");
const navigation = document.getElementById("navigation");
const close = document.getElementById("close");

if(menu){
    menu.addEventListener("click", ()=>{
      navigation.classList.toggle("active");
    })
}
if(close){
    close.addEventListener("click", ()=>{
      navigation.classList.remove("active");
    })
}

// For date and time
const d = new Date();
document.getElementById("demo").innerHTML = d;

// Select elements
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');
const goBackBtn = document.getElementById('go-back');

// Load transaction history from local storage
let transactionHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];

// Update UI with saved data
updateHistory();

// Event Listeners
clearHistoryBtn.addEventListener('click', clearTransactionHistory);
goBackBtn.addEventListener('click', () => {
  window.location.href = "home.html"; // Redirect to main page
});

function updateHistory() {
  if (transactionHistory.length === 0) {
    historyList.innerHTML = '<li>No transactions found</li>';
    return;
  }

  historyList.innerHTML = transactionHistory
    .map((transaction) => `<li>${transaction}</li>`)
    .join('');
}

function clearTransactionHistory() {
  if (confirm('Are you sure you want to clear the transaction history?')) {
    transactionHistory = [];
    localStorage.setItem('transactionHistory', JSON.stringify(transactionHistory));
    updateHistory();
  }
}


