function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
  
    if (isNaN(num1) || isNaN(num2)) {
      resultDiv.innerText = "Введите оба числа!";
      return;
    }
  
    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "Ошибка: деление на 0";
        break;
      default:
        result = "Неизвестная операция";
    }
    resultDiv.innerText = "Результат: " + result;
  }
  