document.getElementById("sendBtn").addEventListener("click", function() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var message = document.getElementById("message").value.trim();

  var isValid = true;

  if (name === "") {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  if (email === "" || !validateEmail(email)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  if (subject === "") {
    document.getElementById("subjectError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("subjectError").style.display = "none";
  }

  if (message === "") {
    document.getElementById("messageError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("messageError").style.display = "none";
  }

  if (isValid) {
    var confirmationDiv = document.createElement('div');
    confirmationDiv.id = "confirmationMessage";
    confirmationDiv.className = "col mt-3 d-flex justify-content-center";
    confirmationDiv.innerHTML = '<p style="color: green;">Your FAQ has been sent!</p>';

    document.querySelector('.faq-container').appendChild(confirmationDiv);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    setTimeout(function() {
      confirmationDiv.remove();
    }, 3000);
  }
});

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
