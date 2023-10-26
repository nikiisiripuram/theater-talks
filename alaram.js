const nameInput = document.querySelector("#name");
const delayInput = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function setAlarm() {
  const person = nameInput.value;
  const delay = parseInt(delayInput.value);

  try {
    if (isNaN(delay) || delay < 0) {
      throw new Error("Alarm delay must be a non-negative number");
    }

    alarm(person, delay).then((message) => {
      output.textContent = message;
    });
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error.message}`;
  }
}

function alarm(person, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", setAlarm);
