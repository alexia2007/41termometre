input.onButtonPressed(Button.A, function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("Celisius")
    basic.showNumber(input.temperature())
    basic.showString("Celisius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() > 25) {
        serial.writeLine("Ah sortit el sol")
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (input.temperature() < 25) {
        serial.writeLine("Tenían que agafar el paraigues ")
        basic.showIcon(IconNames.Umbrella)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() > 25) {
        serial.writeNumber(input.temperature())
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() < 25) {
        serial.writeNumber(input.temperature())
        basic.showIcon(IconNames.Sad)
    }
})
