let health = 100
let hits = 0

let mods = {
 shield: {
  modifier: .5,
 },
 amp: {
  modifier: 1.5
 },
 heal: {
  modifier: -5
 }
}

function draw() {
 if (health <= 0) {
  health = 0
 }
 document.getElementById("health").innerText = " " + health;
 document.getElementById("hits").innerText = " " + hits++;
}

function slap() {
 health -= 1
 hits += 0
 draw()
}

function kick() {
 health -= 10
 hits += 0
 draw()
}

function punch() {
 health -= 5
 hits += 0
 draw()
}

function shield() {
 mods.shield
}

function amp() {
 mods.amp
}

function heal() {
 mods.heal
}

draw()