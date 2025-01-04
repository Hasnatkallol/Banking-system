// Save Profile
function saveProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name && email) {
      alert(`Profile updated!\nName: ${name}\nEmail: ${email}`);
    } else {
      alert('Please fill out all fields.');
    }
  }
  
  // Change Password
  function changePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
  
    if (currentPassword && newPassword) {
      alert('Password updated successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  }
  
  // Update Notification Preferences
  function updateNotifications() {
    const emailNotifications = document.getElementById('email-notifications').checked;
    const smsNotifications = document.getElementById('sms-notifications').checked;
  
    alert(`Notification Preferences:\nEmail: ${emailNotifications ? 'Enabled' : 'Disabled'}\nSMS: ${smsNotifications ? 'Enabled' : 'Disabled'}`);
  }
  