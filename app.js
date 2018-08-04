let health = 100

function draw() {
 health
}

function slap() {
 health -= 1
 draw()
}

function kick() {
 health -= 10
 draw()
}

function punch() {
 health -= 5
 draw()
}
