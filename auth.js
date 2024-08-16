// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnf_8pynMah25Y7Z7d2Ro1t23nsB9miYk",
  authDomain: "serenesagewhisper.firebaseapp.com",
  projectId: "serenesagewhisper",
  storageBucket: "serenesagewhisper.appspot.com",
  messagingSenderId: "645787711329",
  appId: "1:645787711329:web:be92bf25302f5856723720",
  measurementId: "G-B3Z427PTGF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Function to register a new user
function registerUser(username, password) {
    auth.createUserWithEmailAndPassword(username, password)
        .then((userCredential) => {
            document.getElementById('message').textContent = 'User registered successfully. Please log in.';
        })
        .catch((error) => {
            document.getElementById('message').textContent = `Error: ${error.message}`;
        });
}

// Function to login an existing user
function loginUser(username, password) {
    auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            document.getElementById('message').textContent = `Welcome back, ${username}!`;
            // Redirect to the game page after successful login
            setTimeout(() => {
                window.location.href = 'game.html'; 
            }, 1000);
        })
        .catch((error) => {
            document.getElementById('message').textContent = `Error: ${error.message}`;
        });
}

// Event listeners for the register and login buttons
document.getElementById('register').onclick = function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        registerUser(username, password);
    } else {
        document.getElementById('message').textContent = 'Please fill in both fields.';
    }
};

document.getElementById('login').onclick = function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        loginUser(username, password);
    } else {
        document.getElementById('message').textContent = 'Please fill in both fields.';
    }
};
