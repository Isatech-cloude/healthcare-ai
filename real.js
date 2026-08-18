const button = document.getElementById("getStartedBtn");
button.addEventListener("click", function(){
  document.getElementById("services").scrollIntoView({behavior: "smooth"})
});
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event){
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (name == "" || email == "" || message == ""){
    alert("please fill in all details.");
    return;
  }
  alert("Thank you, " + name + "! Your message has been received")
  contactForm.reset();
});