  

  
  var firebaseConfig = {
    apiKey: "AIzaSyDzJXqlHUJuB5unnqt_FcojHJUvltTXp6o",
    authDomain: "project1-f1d4b.firebaseapp.com",
    projectId: "project1-f1d4b",
    storageBucket: "project1-f1d4b.appspot.com",
    messagingSenderId: "89116487346",
    appId: "1:89116487346:web:3208d9906991f61a7ee3ab",
    measurementId: "G-N26QMFX93C"
  };
  firebase.initializeApp(firebaseConfig);
  
    const auth = firebase.auth();
    function signUp(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        alert("Signed Up");
        // window.location.replace("login.html");

    }
    
    
    
    function signIn(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

    var user = firebase.auth().currentUser;
        if (user) {
                alert("Signed In as" +email.value)
        window.location.replace("index.html");
        } else { }
        
    }
    
    
    function signOut(){
        
        auth.signOut();
        alert("Signed Out from " + email.value);
        
    }
    
    
    
    auth.onAuthStateChanged(function(user){
        
        if(user){
            
            var email = user.email;
            alert("Active User " + email);
            // window.location.replace("index.html");
            //is signed in
            
        }else{
            
            alert("No Active User_b");
        }
        
        
        
    });
