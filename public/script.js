async function getAudio() {
    const url = document.getElementById("youtubeUrl").value;
    if (!url) {
        alert("Insira um link válido!");
        return;
    }
    const audio = document.getElementById("audioPlayer");
    audio.src = `http://localhost:3000/audio?url=${encodeURIComponent(url)}`;
    audio.style.display = "block";
}
