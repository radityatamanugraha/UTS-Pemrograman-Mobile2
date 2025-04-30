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
