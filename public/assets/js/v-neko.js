var app = new Vue({
    el: '#app',
    data: {
        bodyPart: '',
        color: ''
    },
    methods: {
        download: function () {
            let canvas = document.getElementById('canvas')
            let context = canvas.getContext('2d')
            let htmlParts = [document.getElementById('neko').innerHTML]
            let mBlob = new Blob(htmlParts, {'type': 'image/svg+xml'})
            let image = new Image()
            image.src = window.URL.createObjectURL(mBlob)
            image.onload = function () {
                canvas.width = image.width
                canvas.height = image.height
                context.drawImage(image, 0, 0)
                let btn = document.createElement('a')
                btn.download = 'MyNeko.png'
                btn.href = canvas.toDataURL('image/png')
                btn.click()
            }
        }
    },
    watch: {
        bodyPart: function (newVal, oldVal) {
            if (newVal != '') {
                this.bodyPart = newVal
            }
        },
        color: function (newVal, oldVal) {
            if (newVal != '') {
                this.color = newVal
            }
            if (this.bodyPart.toString() == 'tail') {
                $('.s-' + this.bodyPart.toString()).find('path')
                    .attr('stroke', this.color)
            } else {
                $('.s-' + this.bodyPart.toString()).find('path')
                    .attr('fill', this.color)
            }
        }
    }
})
