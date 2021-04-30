let notes = JSON.parse(localStorage.getItem("notes")) || [];
function AddNote() {
    let note = document.getElementById("note").value;
    let title = document.getElementById("title").value;
    notes.push({title, note})

    localStorage.setItem("notes", JSON.stringify(notes))
    alert("Your " +  title + " Has Been Added")
    window.reload()
}