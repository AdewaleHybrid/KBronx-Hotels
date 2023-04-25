const sendMail = () => {
  const params = {
    name: document.getElementByID("name").value,
    email: document.getElementByID("email").value,
    message: document.getElementByID("message").value,
    phone: document.getElementByID("phone").value,
    subject: document.getElementById("subject").value,
  };

  const serviceID = "service_v7h0mx9";
  const templateID = "template_i0jb3pc";

  emailjs
    .send({ serviceID, templateID, params })
    .then((res) => {
      (document.getElementByID("name").value = ""),
        (document.getElementByID("email").value = ""),
        (document.getElementByID("message").value = ""),
        (document.getElementById("subject").value = ""),
        (document.getElementByID("phone").value = "");
      console.log(res);
    })
    .catch((err) => console.log(err));
};
