serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
DFRobot_GestureFaceDetection.begin()
basic.forever(function () {
    // serial.writeString("" + (DFRobot_GestureFaceDetection.getFaceNumber()))
    basic.pause(2000)
    if (DFRobot_GestureFaceDetection.getFaceNumber() > 0) {
        basic.pause(100)
        serial.writeString("TYPE:" + DFRobot_GestureFaceDetection.getGestureType())
        serial.writeString("X:" + DFRobot_GestureFaceDetection.getFaceLocationX())
        serial.writeString("Y:" + DFRobot_GestureFaceDetection.getFaceLocationY())
    }
})
