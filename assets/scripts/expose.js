// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const select_button = document.getElementById("horn-select");
  const horn_image = document.querySelector("#expose img");
  const audio = document.querySelector("audio");
  const volume = document.querySelector("#volume-controls img")
  const volume_button = document.getElementById("volume");
  const button = document.querySelector("button");
  let sound = null;
  let image = "no-image.png";


  select_button.addEventListener('change', (event) => {
    const selected = event.target.value;
    horn_image.src = `assets/images/${selected}.svg`;
    horn_image.alt = `${selected} image`;
    audio.src = `assets/audio/${selected}.mp3`;
  });

  volume_button.addEventListener('input', (event) => {
    const val = event.target.value;
    audio.volume = val / 100;

    let icon = "volume-level-0.svg";
    if (val >= 67) icon = "volume-level-3.svg";
    else if (val >= 33) icon = "volume-level-2.svg";
    else if (val >= 1) icon = "volume-level-1.svg";

    volume.src = `assets/icons/${icon}`;
    volume.alt = `Volume level ${icon.charAt(icon.length - 5)}`;
  });

  button.addEventListener('click', () => {
    if (audio.src) {
      audio.play();
    }
  });
}