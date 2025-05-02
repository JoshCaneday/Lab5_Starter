window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('#explore img');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedIndex = voiceSelect.value;

    if (selectedIndex !== 'select') {
      utterance.voice = voices[selectedIndex];
    }

    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}
