const handleContactSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !message) {
    alert("Please fill all the fields!");
    return;
  }

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await res.json();

  if (res.ok) {
    alert("Your message has been sent successfully!");
  } else {
    alert(data.error || "Error sending message.");
  }
};

