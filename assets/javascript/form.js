document.getElementById('submit-button').addEventListener('click', async (e) => {
    e.preventDefault();
    
    // Gather form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate input
    if (!name || !email || !phoneNumber || !message) {
     alert("Please fill in all fields.");
     return;
    }
    
    // Validate phone number
    if (!/^\d{10}$/.test(phoneNumber)) {
     alert("Phone number must be exactly 10 digits.");
     return;
    }
    
    const formData = {
     name,
     email,
     phoneNumber, // Corrected key to match the server's expectation
     message
    };
    
    try {
     const response = await fetch('http://192.168.1.29:8081/rw/form', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
     });
    
     if (response.ok) {
         const result = await response.json();
         alert("Form submitted successfully!");
         console.log(result);
     } else {
         const errorData = await response.json();
         alert(`Error: ${errorData.message.join(', ')}`);
         console.error("Error Response:", errorData);
     }
    } catch (error) {
     alert("An error occurred. Please try again.");
     console.error("Error:", error);
    }
    });