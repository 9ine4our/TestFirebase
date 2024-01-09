function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const storageRef = firebase.storage().ref('uploaded/' + file.name);
  const uploadTask = storageRef.put(file);

  uploadTask.on('state_changed',
    (snapshot) => {
      // Progress upload
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    },
    (error) => {
      // Tangani kesalahan
      console.error('Error uploading file:', error);
    },
    () => {
      // Berhasil diunggah
      console.log('File berhasil diunggah');
      showNotification('File berhasil diunggah ke Firebase!');
    }
  );
}

function showNotification(message) {
  // Implementasi notifikasi sama seperti sebelumnya
  // ...
}