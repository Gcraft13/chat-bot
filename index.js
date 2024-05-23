const express = require("express");
const app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

const server = app.listen(5000);
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const SpeechRecognition =
  window.SpeechRecognition() || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

document.querySelector("button").addEventListener("click", () => {
  recognition.start();
});

recognition.addEventListener("result", (e) => {
  let last = e.results.lengtyh - 1;
  let text = e.restults[last][0].transcript;

  socket.emit("chat message", text);

  console.log("Confidence" + e.results[0][0].confidence);
});
