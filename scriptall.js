function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  // Lakukan pengiriman file ke Firebase atau server lain di sini
  console.log('File yang akan diunggah:', file.name);
}


function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  
  // Simulasi pengiriman file
  setTimeout(function() {
    // Notifikasi file berhasil terkirim
    showNotification('File berhasil terkirim!');
  }, 2000); // Simulasi pengiriman selama 2 detik, ganti dengan logika pengiriman sesungguhnya ke Firebase atau server lain
  
  console.log('File yang akan diunggah:', file.name);
}

function showNotification(message) {
  // Buat elemen notifikasi
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;

  // Tambahkan notifikasi ke dalam body
  document.body.appendChild(notification);

  // Hilangkan notifikasi setelah beberapa detik
  setTimeout(function() {
    document.body.removeChild(notification);
  }, 3000); // Notifikasi akan hilang setelah 3 detik
}