const currentUser = JSON.parse(localStorage.getItem("currentUser"));
let beats = JSON.parse(localStorage.getItem("beats")) || [];

// Subir beat
const uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
  uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!currentUser || currentUser.role !== "producer") {
      alert("Solo productores pueden subir beats.");
      return;
    }

    const beat = {
      id: Date.now(),
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      bpm: document.getElementById("bpm").value,
      key: document.getElementById("key").value,
      price: document.getElementById("price").value,
      moods: document.getElementById("moods").value.split(",").map(m => m.trim()),
      producer: currentUser.username,
      purchases: 0
    };

    if (beat.moods.length < 3) {
      alert("Debe ingresar al menos 3 moods");
      return;
    }

    beats.push(beat);
    localStorage.setItem("beats", JSON.stringify(beats));
    alert("Beat subido exitosamente");
  });
}

// Mostrar beats públicos
const beatsList = document.getElementById("beatsList");
if (beatsList) {
  beats.forEach(beat => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${beat.title}</h3>
      <p>${beat.description}</p>
      <p>BPM: ${beat.bpm}, Tono: ${beat.key}</p>
      <p>Precio: $${beat.price}</p>
      <p>Moods: ${beat.moods.join(", ")}</p>
    `;
    beatsList.appendChild(div);
  });
}
