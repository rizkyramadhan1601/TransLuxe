document
  .querySelector(".btn-pilih-auth")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".login-form").classList.add("hide");
    document.querySelector(".register-form").classList.add("show");
  });

document
  .querySelector(".btn-pilih-auth2")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".login-form").classList.remove("hide");
    document.querySelector(".register-form").classList.remove("show");
  });



// poppup
  function closePopup() {
    const popup = document.getElementById("popupOverlay");
    popup.style.display = "none";
  }

  window.onload = function() {
    document.getElementById("popupOverlay").style.display = "flex";
  };