// setting up firebase with our website
const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCExoARfUyGU6R94Cbwa84aeHDLPT3832k",
  authDomain: "signupprojectrizki.firebaseapp.com",
  projectId: "signupprojectrizki",
  storageBucket: "signupprojectrizki.appspot.com",
  messagingSenderId: "281241380723",
  appId: "1:281241380723:web:5376f23c5210cdc2d9c706"
  });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    console.log(email, passwordInput);
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, passwordInput)
        .then((result) => { 
            // Signed in 
            console.log(result);
            location.href = "../DASHBOARD_PENTASHPL/pentashpl-leaflet/index-leaflet.html";
            alert ("Akun Anda Sudah Terdaftar Silakan Masuk");
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            alert ("Akun Belum Terdaftar atau Salah Memasukan Email dan Password,        Jika belum punya akun klik 'Sign Up'");
        });
        const recaptchaResponse = grecaptcha.getResponse();

        // Cek apakah pengguna telah melewati verifikasi reCAPTCHA
        if (!recaptchaResponse) {
        // Jika tidak melewati verifikasi, tampilkan pesan kesalahan
        signupError.innerText = 'Mohon lengkapi verifikasi reCAPTCHA.';
        return;
    }
}

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    console.log(email, passwordInput);
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, passwordInput)
        .then((result) => {
            // Signed in 
            alert("Akun anda sudah terdaftar, silakan refresh kembali halaman ini dan klik Sign In")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
        const recaptchaResponse = grecaptcha.getResponse();

        // Cek apakah pengguna telah melewati verifikasi reCAPTCHA
        if (!recaptchaResponse) {
        // Jika tidak melewati verifikasi, tampilkan pesan kesalahan
        signupError.innerText = 'Mohon lengkapi verifikasi reCAPTCHA.';
        return;
    }
    }
