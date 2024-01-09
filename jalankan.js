fetch('https://www.contoh.com/data.json')
  .then(response => response.json())
  .then(data => {
    // Lakukan apa pun yang ingin Anda lakukan dengan data ini, seperti menyimpannya di Firebase
    firebase.database().ref('uploaded').set(data);
  })
  .catch(error => {
    // Tangani kesalahan jika ada
    console.error('Terjadi kesalahan:', error);
  });