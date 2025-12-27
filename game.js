let day = 1;
let energy = 100;
let gold = 20;
let health = 100;

const status = document.getElementById("status");
const log = document.getElementById("log");

function update() {
  status.innerHTML = `
  <strong>Day:</strong> ${day}<br>
  <strong>Health:</strong> ${health}<br>
  <strong>Energy:</strong> ${energy}<br>
  <strong>Gold:</strong> ${gold}
  `;
}

function write(text) {
  log.innerHTML = `<div>Day ${day}: ${text}</div>` + log.innerHTML;
}

function nextDay(costEnergy) {
  energy -= costEnergy;
  day++;

  if (energy <= 0) {
    health -= 10;
    energy = 0;
    write("Exhaustion hurts your body.");
  }

  if (health <= 0) {
    write("You collapse. Your story ends.");
    document.querySelectorAll("button").forEach(b => b.disabled = true);
  }

  update();
}

function workInn() {
  if (energy < 15) return write("Too tired to work.");
  gold += 10;
  write("You worked at the inn and earned 10 gold.");
  nextDay(15);
}

function labor() {
  if (energy < 25) return write("You are too exhausted.");
  gold += 20;
  health -= 5;
  write("Hard labor pays well, but damages your body.");
  nextDay(25);
}

function rest() {
  energy += 40;
  health += 10;
  if (energy > 100) energy = 100;
  if (health > 100) health = 100;
  write("You rested and recovered.");
  day++;
  update();
}

update();
write("You arrive in Civitas with a few coins and no allies.");
