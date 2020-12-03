radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (receivedNumber == 2) {
        basic.showString("I LOVE DOKDO!")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I")
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(255)
