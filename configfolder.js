    // Initialize Firebase
    var config = {
  apiKey: "AIzaSyAIeCy_WOb2wdFkJ0aKKNfnjEs5ddMdAHw",
    authDomain: "upload-98f07.firebaseapp.com",
    databaseURL: "https://upload-98f07-default-rtdb.firebaseio.com",
    projectId: "upload-98f07",
    storageBucket: "upload-98f07.appspot.com",
    messagingSenderId: "916259211600",
    appId: "1:916259211600:web:1377d31f58ad4502b18455"
};

    firebase.initializeApp(config);
    var storage = firebase.storage();
   
  function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const storageRef = firebase.storage().ref('public/' + file.name);
  const uploadTask = storageRef.put(file);

  uploadTask.on('state_changed',
    (snapshot) => {
      // Progress upload
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    },
    function(error) {
        // Handle unsuccessful uploads
        console.error('Error uploading file: ', error);
        alert('Upload FAILED Try Again. Error: ' + error); // Menampilkan notifikasi kesalahan
      }, function() {
        // Handle successful uploads on complete
        console.log('File uploaded successfully');
        alert('Upload Completed!'); // Menampilkan notifikasi keberhasilan
      }
  );
  }
