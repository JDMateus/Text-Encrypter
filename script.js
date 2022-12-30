'use strict';

// Variable declaration

const encryptBtn = document.querySelector('#encrypt');
const decrypttBtn = document.querySelector('#decrypt');
const copytBtn = document.querySelector('#copy');
const inputText = document.querySelector('.input-container textarea');
const outputText = document.querySelector('.output-container textarea');

// Function declaration

function changeUI() {
  // Hide the unwanted elements
  Array.from(outputText.closest('div').children).forEach(el => el.classList.add('hidden'));

  // Show the wanted elements
  outputText.classList.remove('hidden');
  copytBtn.classList.remove('hidden');
  outputText.scrollIntoView();
}

function copyText() {
  this.select();
  this.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(this.value);
}

function encrypt() {
  // Manage spaces and lower case the text
  const text = this.value.trim().toLowerCase();

  // Guard clause
  if (!text) return;

  changeUI();

  // Encrypt text
  const encryptedText = text
    .split('')
    .map(cha => {
      if (cha === 'a') return 'ai';
      if (cha === 'e') return 'enter';
      if (cha === 'i') return 'imes';
      if (cha === 'o') return 'ober';
      if (cha === 'u') return 'ufat';
      return cha;
    })
    .join('');

  // Input text goes to the output box
  outputText.value = encryptedText;
}

function decrypt() {
  // Manage spaces and lower case the text
  const text = this.value.trim().toLowerCase();

  // Guard clause
  if (!text) return;

  changeUI();

  // Decrypt text
  const decryptedText = text
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  // Decrypted text goes to the output box
  outputText.value = decryptedText;
}

// Event listeners

encryptBtn.addEventListener('click', encrypt.bind(inputText));
decrypttBtn.addEventListener('click', decrypt.bind(inputText));
copytBtn.addEventListener('click', copyText.bind(outputText));
