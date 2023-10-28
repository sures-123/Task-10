// Initialize Firebase with your Firebase project's config
const firebaseConfig = {
    apiKey: '<YOUR_API_KEY>',
    authDomain: '<YOUR_AUTH_DOMAIN>',
    projectId: '<YOUR_PROJECT_ID>',
    // ...other config properties
  };
  firebase.initializeApp(firebaseConfig);
  
  // Function to handle email/password login
  const handleLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        console.log('User logged in:', user);
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);
      });
  };
  