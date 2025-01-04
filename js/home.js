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

// Select Elements 
const totalBalanceE1 = document.getElementById('total-balance');
const depositAmountInput = document.getElementById('deposit-amount');
const withdrawAmountInput = document.getElementById('withdraw-amount');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const viewHistoryBtn = document.getElementById('view-history');

// Load initial data from local storage
let totalBalance = parseFloat(localStorage.getItem('totalBalance')) || 0;
let transactionHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];

// Update UI with saved data
updateBalance();

// Event Listeners
depositBtn.addEventListener('click', handleDeposit);
withdrawBtn.addEventListener('click', handleWithdraw);
viewHistoryBtn.addEventListener('click', () => {
window.location.href = "notification.html";
});

function handleDeposit(){
    const amount = parseFloat(depositAmountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid deposit amount!');
        return;
      }

      const currentDateTime = new Date().toLocaleString();

      totalBalance += amount ;
      transactionHistory.push(`Deposited $${amount.toFixed(2)} on ${currentDateTime}`);

      updateBalance();
      saveToLocalStorage();
      depositamount();
      depositAmountInput.value = '';

      
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 1000);

}

function handleWithdraw() {
    const amount = parseFloat(withdrawAmountInput.value);
  
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid withdrawal amount!');
      return;
    }
  
    if (amount > totalBalance) {
      alert('Insufficient balance!');
      return;
    }
  
    const currentDateTime = new Date().toLocaleString();
  
    totalBalance -= amount;
    transactionHistory.push(`Withdrew $${amount.toFixed(2)} on ${currentDateTime}`);
  
    updateBalance();
    saveToLocalStorage();
    totalWithdraw();
    withdrawAmountInput.value = '';

    const successMessage_2 = document.getElementById("successMessage_2");
    successMessage_2.style.display = "block";
    setTimeout(() => {
        successMessage_2.style.display = "none";
    }, 1000);


  }
  

function updateBalance() {
    totalBalanceE1.textContent = totalBalance.toFixed(2);
  }

function saveToLocalStorage() {
    localStorage.setItem('totalBalance', totalBalance.toString());
    localStorage.setItem('transactionHistory', JSON.stringify(transactionHistory));
  }
  

  function depositamount(){
     const depositAmountInput = document.getElementById('deposit-amount');
     const amount = parseFloat(depositAmountInput.value);
     document.getElementById('totalDeposit').innerText = `$${amount.toFixed(2)}`;
     depositAmountInput.value = '';
  }

  function totalWithdraw(){
    const withdrawAmountInput = document.getElementById('withdraw-amount');
    const amount = parseFloat(withdrawAmountInput.value);
    document.getElementById('totalWithdraw').innerText = `$${amount.toFixed(2)}`
    withdrawAmountInput.value = '';
  }
  