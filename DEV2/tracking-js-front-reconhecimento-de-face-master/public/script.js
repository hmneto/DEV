(function () {
    let video = document.getElementById('video')
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')
    let tracker = new tracking.ObjectTracker('face')
    tracking.track('#video', tracker, { camera: true })
    tracker.on('track', function (event) {
        console.log(event)
        context.clearRect(0, 0, canvas.width, canvas.height)
        event.data.forEach(function (element) {
            context.strokeStyle = '#ff0000'
            context.lineWidth = 2
            context.strokeRect(element.x, element.y, element.width, element.height)
            context.fillText(`x: ${element.x}, w: ${element.width}`, element.x + element.width + 20, element.y + 20)
            context.fillText(`y: ${element.y}, h: ${element.height}`, element.x + element.width + 20, element.y, 40)
        });
    })


})()