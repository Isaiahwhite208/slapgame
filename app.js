let target = {
 health: 100,
 hits: 0,
 items: []
}

let mods = {
 shield: {
  modifier: -.5,
 },
 amp: {
  modifier: .5
 },
 heal: {
  modifier: 0
 }
}

function addMods() {
 let modTotal = 1
 for (let i = 0; i < target.items.length; i++) {
  const item = target.items[i];
  modTotal += item.modifier
 }
 if (modTotal <= 0) {
  modTotal = 0
 }
 return modTotal
}

function draw() {
 if (target.health <= 0) {
  target.health = 0
 }
 document.getElementById("health").innerText = " " + target.health;
 document.getElementById("hits").innerText = " " + target.hits;
}

function slap() {
 target.health -= 1 * addMods()
 target.hits += 1
 draw()
}

function kick() {
 target.health -= 10 * addMods()
 target.hits += 1
 draw()
}

function punch() {
 target.health -= 5 * addMods()
 target.hits += 1
 draw()
}

function shield() {
 target.items.push(mods.shield)
}

function amp() {
 target.items.push(mods.amp)

}

function heal() {
 target.items.push(mods.heal)
 target.health += 15
 draw()
}

draw()