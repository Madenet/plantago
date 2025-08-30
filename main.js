<!-- Add Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>

  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCcS-ys9PsAxZqz3yQC148cvZNPuMHetTY",
    authDomain: "shihlobyeni-287b7.firebaseapp.com",
    projectId: "shihlobyeni-287b7",
    storageBucket: "shihlobyeni-287b7.appspot.com",
    messagingSenderId: "804397100342",
    appId: "1:804397100342:web:ca2f47c798e634373ad797",
    measurementId: "G-56LR1V1WNK",
    databaseURL: "https://shihlobyeni-287b7.firebaseio.com" // 🔑 needed for Realtime DB
  };

  firebase.initializeApp(firebaseConfig);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
  document.getElementById('inquiry-form').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    // Get values
    var firstName = getInputVal('firstName');
    var lastName = getInputVal('lastName');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var company = getInputVal('company');
    var service = getInputVal('service');
    var province = getInputVal('province');
    var description = getInputVal('description');
    var timeline = getInputVal('timeline');

    // Save message
    saveMessage(firstName, lastName, email, phone, company, service, province, description, timeline);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3s
    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('inquiry-form').reset();
  }

  // Get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to Firebase
  function saveMessage(firstName, lastName, email, phone, company, service, province, description, timeline) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      company: company,
      service: service,
      province: province,
      description: description,
      timeline: timeline,
      submittedAt: new Date().toISOString()
    });
  }
