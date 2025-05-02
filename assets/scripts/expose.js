// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const select_button = document.getElementById("horn-select");
  const volume_button = document.getElementById("volume");
  const button = document.querySelector("button");
  let sound = null;
  let image = "no-image.png";
  

  select_button.addEventListener('change', (event) => {

    console.log("Selected horn:", event.target.value);
  });

  volume_button.addEventListener('input', (event) => {
    console.log("Volume level:", event.target.value);
  });

  button.addEventListener('click', () => {
    console.log("Play Sound button clicked");
  });
}