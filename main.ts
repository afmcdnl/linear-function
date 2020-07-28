input.onButtonPressed(Button.A, function () {
    X += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("Slope" + slope)
    basic.clearScreen()
    basic.showString("y-int" + yint)
})
input.onButtonPressed(Button.B, function () {
    X += 1
})
let slope = 0
let yint = 0
yint = randint(-10, 10)
slope = randint(-10, 10)
let X = 0
basic.forever(function () {
    basic.showNumber(slope * X + yint)
})
