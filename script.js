

const currentDate = new Date();
console.log(currentDate);

const targetDate = new Date('2024-02-02T12:00:00');
console.log(targetDate); // Check the target date in the console

const difference = targetDate - currentDate;
console.log(difference);

// Calcul de la différence en jours, heures, minutes et secondes
function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime; // calculons la différence entre targetDate et currentTime en milliseconds

  //décomposons ensuite cette différence en jours, heures, minutes et secondes.Chaque unité de temps est calculée en divisant la différence par le nombre de millisecondes dans cette unité.
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //mise à jour éléments HTML de la page.
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

const interval = setInterval(updateCountdown, 1000);

if (difference < 0) {
  clearInterval(interval);
  document.getElementById("timer").innerText = "Evenement terminé";
}