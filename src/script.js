(function() {
  emailjs.init({
    publicKey: "oFxQSa31QMcD-3UX7",
  });
})();


document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_y960qy4", "template_bfi8e6i", this)
      .then(function() {
          console.log("success!");
          alert("Email enviado com sucesso!");
      }, function(error) {
          console.log("Fail", error);
          alert("Falha ao enviar o email, tente mais tarde!");
      });

});