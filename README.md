|Nama|NIM|Kelas|Mata Kuliah|
|----|---|-----|------|
|**Radityatama Nugraha**|**312310644**|**TI.23.A6**|**Pemrograman Web 2**|

# • Pembahasan Utama
## 1. Persiapan Lingkungan Pengembangan
### Sebelum memulai, pastikan Anda sudah menginstal Node.js di komputer Anda. Jika belum, unduh dan pasang Node.js dari situs resmi Node.js.

## 2. Membuat Server WebSocket
### Untuk membuat server WebSocket, kita akan menggunakan library ws yang tersedia di Node.js. Berikut adalah cara membuat server WebSocket yang sederhana:

### server.js
```Javascript
const WebSocket = require("ws");

// Membuat server WebSocket
const wss = new WebSocket.Server({ port: 8080 });

// Menangani koneksi dari client
wss.on("connection", (ws) => {
  console.log("A user connected");

  // Kirim notifikasi ke client setiap 5 detik
  setInterval(() => {
    const message = `Notifikasi baru pada ${new Date().toLocaleTimeString()}`;
    ws.send(message);
  }, 5000);

  ws.on("close", () => {
    console.log("A user disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
```

### Penjelasan:

• Kami menggunakan library ws untuk membuat server WebSocket yang berjalan di port 8080.

• Setiap kali ada koneksi dari client, server akan mengirimkan pesan setiap 5 detik yang berisi waktu saat itu.

• Jika client terputus, server akan mencatatnya di log.


## 3. Membuat Client WebSocket
### Untuk membuat client yang terhubung ke server WebSocket, kita akan menggunakan HTML dan JavaScript. Client akan menerima pesan dari server dan menampilkannya dalam bentuk notifikasi.

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebSocket Real-Time Notifications</title>
</head>
<body>
    <h1>Real-Time Notifications</h1>
    <div id="notifications"></div>

    <script>
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        socket.onmessage = (event) => {
            const notificationsDiv = document.getElementById('notifications');
            const notification = document.createElement('div');
            notification.textContent = event.data;
            notificationsDiv.appendChild(notification);
        };

        socket.onclose = () => {
            console.log('Disconnected from WebSocket server');
        };
    </script>
</body>
</html>
```

### Penjelasan:

• Client membuka koneksi WebSocket ke server yang berjalan di ws://localhost:8080.

• SSetiap kali menerima pesan dari server, pesan tersebut akan ditambahkan sebagai elemen baru di halaman HTML.

• Client akan mencatat status koneksi, seperti saat terhubung atau terputus.

## 4. Menjalankan Aplikasi
### Untuk menjalankan aplikasi, lakukan langkah-langkah berikut:
### • Buat file server.js dan index.html di direktori yang sama.
### • Jalankan server WebSocket dengan perintah:
```bash
node server.js
```
### • Buka file index.html di browser. Anda akan melihat pesan real-time yang diterima dari server setiap 5 detik.

# Output


![gambar](ss_hasil_uts_pemrograman_web2/ss1_pemrograman_web2.png)
