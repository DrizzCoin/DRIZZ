// DRIZZ Token Stats
async function fetchDrizzData() {
  try {
    const response = await fetch('https://public-api.solscan.io/token/meta/8rSczAV2xeVQNGHs12WqaAK5LJUVDPjkSRcJLPXxcSH');
    const data = await response.json();
    document.getElementById('totalSupply').innerText = data.circulatingSupply.toLocaleString();
    document.getElementById('totalHolders').innerText = data.holders.toLocaleString();
  } catch (error) {
    console.error('Error fetching DRIZZ data:', error);
    document.getElementById('totalSupply').innerText = 'Unavailable';
    document.getElementById('totalHolders').innerText = 'Unavailable';
  }
}

fetchDrizzData();

// DRIZZ Transactions
async function fetchTransactions() {
  try {
    const response = await fetch('https://public-api.solscan.io/transactions?token=8rSczAV2xeVQNGHs12WqaAK5LJUVDPjkSRcJLPXxcSH&limit=5');
    const data = await response.json();
    const transactionsList = document.getElementById('transactionFeed');
    transactionsList.innerHTML = "";
    data.transactions.forEach(tx => {
      const listItem = document.createElement('li');
      listItem.innerText = `Txn: ${tx.signature} | Amount: ${tx.amount} | Time: ${new Date(tx.blockTime * 1000).toLocaleString()}`;
      transactionsList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    document.getElementById('transactionFeed').innerHTML = '<li>Unable to load transactions</li>';
  }
}

fetchTransactions();
