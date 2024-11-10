function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    let isValid = true;
  
    if (name === "") {
      document.getElementById('nameError').innerText = "Поле 'Имя' не может быть пустым.";
      isValid = false;
    } else {
      document.getElementById('nameError').innerText = "";
    }
  
    if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('emailError').innerText = "Поле 'Email' должно содержать '@' и '.'.";
      isValid = false;
    } else {
      document.getElementById('emailError').innerText = "";
    }
  
    if (password.length < 8) {
      document.getElementById('passwordError').innerText = "Пароль должен содержать минимум 8 символов.";
      isValid = false;
    } else {
      document.getElementById('passwordError').innerText = "";
    }
  
    if (isValid) {
      alert("Форма успешно отправлена!");
    }
  }
  