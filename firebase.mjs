
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyDn0FZbReeskzTU9lEzKDSYtbiGPQSkkXw",
    authDomain: "blog-project-736c7.firebaseapp.com",
    projectId: "blog-project-736c7",
    storageBucket: "blog-project-736c7.appspot.com",
    messagingSenderId: "87715537583",
    appId: "1:87715537583:web:7faa4c1b3c7838583f6a5a",
    measurementId: "G-VNCH36SCFX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


  
let name  = document.getElementById('name');
let email = document.getElementById('email');
let password  = document.getElementById('password');
let btn1 = document.getElementById('btn');

btn1.addEventListener("click", register)

let loginEmail = document.getElementById('email1')
let loginPassword = document.getElementById('password1')
let btn2 = document.getElementById('login')

 btn2.addEventListener("click", login)


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user is logged in");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        console.log("user is not logged in");
      // User is signed out
      // ...
    }
  });

 
 function register(e) {
     e.preventDefault();
     if (name.value == "" || email.value == "" || password.value == "" ) {
      Swal.fire("N.E.P is required!");
    }else{
      //  console.log(name.value);
      //  console.log(email.value);
    //  console.log(password.value);
    createUserWithEmailAndPassword(auth, email.value, password.value, name.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      Swal.fire({
        title: 'User Registerd',
        text: 'You have Registered successfully!',
        icon:'success',   
        // confirmButtonText: 'Go to Dashboard'
      })
      name.value = "",  email.value = "" , password.value = ""  ;
      
      // console.log( "errormessage ===>", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorcode ===>", errorCode);
      console.log("errormessage ===>", errorMessage);
      // ..
    });
  
}
}
 function login(e){
    e.preventDefault();
      signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // alert("signin succesfully")
      
    Swal.fire({
      title: 'User Login',
      text: 'You have Login successfully!',
      icon:'success',
      confirmButtonText: 'Create Blogs'
    }).then((result) => {
       if(result.isConfirmed) {
          window.location.href = 'index.html'
        }
      });
    loginEmail.value = "", loginPassword.value = "" ;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }






      //   signOut(auth)
      //  .then(() => {
      //     // Sign-out successful.
      //     Swal.fire({
      //       title: 'User Logout',
      //       text: 'You have Logged out successfully!',
      //       icon:'success',
      //       confirmButtonText: 'Go to Login Page'
      //     }).then((result) => {
      //         if (result.isConfirmed) {
      //             window.location.href = 'login.html'
      //         }
      //     })
      //   })
      //  .catch((error) => {
      //     // An error happened.
      //   });
    

// let blogPage = document.getElementById('blog-page');



// Swal.fire({
//     title: 'User Login',
//     text: 'You have Login successfully!',
//     icon:'success',
//     confirmButtonText: 'Go to Dashboard'
// }).then((result) => {
//     if (result.isConfirmed) {
//         window.location.href = 'index.html'
//     }
// })

// Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to Log out this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, Log out it!"
//   }).then((result) => {
//       if (result.isConfirmed) {
//           Swal.fire({
//               title: "Log out!",
//               text: "Your account has been Log out.",
//               icon: "success"
//           }).then((e)=>{
//               if (e.isConfirmed) {
//                   window.location.href = 'login.html'
//               }
//           })
//       }
//   });

// Swal.fire({
//     title: 'User Sign-up',
//     text: 'You have Sign-up successfully!',
//     icon:'success',
//     confirmButtonText: 'Go to Login'
// }).then((result) => {
//     if (result.isConfirmed) {
//         window.location.href = 'login.html' ;
//     }
// })