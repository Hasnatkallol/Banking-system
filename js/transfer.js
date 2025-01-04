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

const totalBalanceE1 = document.getElementById('total-balance');
const depositAmountInput = document.getElementById('deposit-amount');
const transferAmountInput = document.getElementById('transfer-amount');
const depositBtn = document.getElementById('deposit-btn');
const transferBtn = document.getElementById('transfer-btn');
const viewTransferHistoryBtn = document.getElementById('view-transfer-history');

// Load initial data from local storage
let totalBalance = parseFloat(localStorage.getItem('totalBalance')) || 0;
let transferHistory = JSON.parse(localStorage.getItem('transferHistory')) || [];

// Update UI with saved data
updateBalance();

transferBtn.addEventListener('click', handleTransfer);

function handleTransfer(){
    const amount2 = parseFloat(transferAmountInput.value);

    if (isNaN(amount2) || amount2 <= 0) {
        alert('Please enter a valid transfer amount!');
        return;
      }
  
    if (isNaN(amount2) || amount2 <= 0) {
      alert('Please enter a valid transfer amount!');
      return;
    }
  
    if (amount2 > totalBalance) {
      alert('Insufficient balance!');
      return;
    }
  
    const currentDateTime = new Date().toLocaleString();
  
    totalBalance -= amount2;
    transferHistory.push(`Transfer $${amount2.toFixed(2)} on ${currentDateTime}`);
  
    updateBalance();
    saveToLocalStorage();
    // totalWithdraw();
    transferAmountInput.value = '';

    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 1000);


  } 

  function updateBalance() {
    totalBalanceE1.textContent = totalBalance.toFixed(2);
  }

function saveToLocalStorage() {
    localStorage.setItem('totalBalance', totalBalance.toString());
    localStorage.setItem('transferHistory', JSON.stringify(transferHistory));
  }
  
// For Update Transfer history

// Select elements
const transferHistoryList = document.getElementById('transfer-history-list');
const clearTransferHistoryBtn = document.getElementById('clear-transfer-history');


// Update UI with saved data
updateHistory();

// Event Listeners
clearTransferHistoryBtn.addEventListener('click', clearTransferHistory);
goBackBtn.addEventListener('click', () => {
  window.location.href = "home.html"; // Redirect to main page
});

function updateHistory() {
  if (transferHistory.length === 0) {
    transferHistoryList.innerHTML = '<li>No transactions found</li>';
    return;
  }

  transferHistoryList.innerHTML = transferHistory
    .map((transaction) => `<li>${transaction}</li>`)
    .join('');
}

function clearTransferHistory() {
  if (confirm('Are you sure you want to clear the transaction history?')) {
    transferHistory = [];
    localStorage.setItem('transferHistory', JSON.stringify(transferHistory));
    updateHistory();
  }
}


// For Transfer History
function myFunction(){
    let box = document.getElementById('box');
    if(box.style.display === 'none'){
        box.style.display = 'block';
    }
    else{
        box.style.display = 'none';
    }
    
}