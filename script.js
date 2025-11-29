const form = document.getElementById("enquiryForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const group = document.getElementById("group").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !group) {
    alert("Please fill all required fields marked with *");
    return;
  }

  let whatsappMessage = `🎓 Sri Aditya Degree College Admission Enquiry:%0A%0A`;
  whatsappMessage += `👤 Name: ${name}%0A`;
  whatsappMessage += `📧 Email: ${email}%0A`;
  whatsappMessage += `📱 Phone: ${phone}%0A`;
  whatsappMessage += `🎯 Course: ${group}%0A`;
  if (message) whatsappMessage += `%0A💬 Query: ${message}`;

  const yourWhatsAppNumber = "919949329687";
  const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${whatsappMessage}`;
  window.open(whatsappURL, "_blank");

  successMsg.style.display = "block";
  form.reset();
  document.body.scrollTop = 0;
});