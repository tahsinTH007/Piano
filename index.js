const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".valume-slider input"),
keyChecked = document.querySelector(".key-checkbox input");

let allKeyAudio = [],
audio = new Audio("tunes/a.wav")

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active") 
    }, 150);
}

pianoKeys.forEach(key => {
    allKeyAudio.push(key.dataset.key)
    key.addEventListener("click", () => playTune(key.dataset.key))

})

const pressKey = (e) =>{
  if(allKeyAudio.includes(e.key)) playTune(e.key);
}

const showHideKey = () => {
     pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const handleVolume = (e) => {
    audio.volume = e.target.value
}

keyChecked.addEventListener("click", showHideKey)
volumeSlider.addEventListener("input", handleVolume)
document.addEventListener("keydown", pressKey)