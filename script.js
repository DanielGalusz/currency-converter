function calculate() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    let rate;
    
    switch (currency) {
      case 'gbp':
        rate = 0.164;
        break;
      case 'eur':
        rate = 0.192;
        break;
      case 'usd':
        rate = 0.213;
        break;
      case 'chf':
        rate = 0.204;
        break;
      default:
        rate = 0;
    }
    
    const result = amount * rate;
    document.getElementById('result').innerText = `${amount} DEM = ${result.toFixed(2)} ${currency.toUpperCase()}`;
  }
  