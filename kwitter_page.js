var firebaseConfig = {
    apiKey: "AIzaSyDD_JKeX0rIHY5j2BlAvuQAynwKI5HGgQA",
    authDomain: "st-fairy-school-c1c8e.firebaseapp.com",
    databaseURL: "https://st-fairy-school-c1c8e-default-rtdb.firebaseio.com",
    projectId: "st-fairy-school-c1c8e",
    storageBucket: "st-fairy-school-c1c8e.appspot.com",
    messagingSenderId: "257489031941",
    appId: "1:257489031941:web:7cd007ed8a9553123bdd6c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          like : 0,
          message : msg,
          name : user_name
      });
      document.getElementById("msg").value = "";
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}