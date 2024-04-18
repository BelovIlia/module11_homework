function isPrime(num) {
    let _true = 'Число простое';
    let _false = 'Число составное';
    let _undefined = 'Не верные данные';
    for ( let i = 2; i < num; i++){
      if(num % i === 0){
        return _false;
      }
      if(num > 1000){
        return _undefined;
      }
      return _true;
    }  
  }
  console.log(isPrime(6));