radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(input.temperature() - receivedNumber)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    input.temperature(),
    50
    )
})
radio.setGroup(1)
basic.forever(function () {
	
})
