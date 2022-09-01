input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    clearMonitor()
})
function clearMonitor () {
    basic.pause(1000)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    clearMonitor()
})
basic.forever(function () {
	
})
