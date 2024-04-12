/* jshint esversion: 6 */
/* import JSConfetti from "js-confetti"; */

const canvas = document.getElementById('confetti');
const button = document.getElementById('button');

const jsConfetti = new JSConfetti({canvas})

button.addEventListener('click', () => {
  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  }).then(() => jsConfetti.addConfetti())});
