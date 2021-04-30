let notes = JSON.parse(localStorage.getItem("notes")) || [];

window.onload = () => {
  let linotes = document.getElementById("listnote");
  if (!notes.length) {
      let div = document.createTextNode("No note added yet");
      linotes.appendChild(div)      
  }
  else {
      notes.map((n, i) => {
          let h1 = document.createElement("h4");
          h1.innerText = n.title;
          let note = document.createElement("p")
          note.innerText = n.note;
          let hr = document.createElement("hr")
          linotes.appendChild(h1)
          linotes.appendChild(note)
          linotes.appendChild(hr)
      })
  }
 };
