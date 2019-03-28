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
    },
    computed: {
        colors: function () {
            return [
                {name: 'black', value: '#212121'},
                {name: 'white', value: '#fff'},
                {name: 'gray', value: '#616161'},
                {name: 'brown', value: '#795548'},
                {name: 'steel', value: '#90a4ae'},
                {name: 'light-brown', value: '#6d4c41'},
                {name: 'buff', value: '#fff9c4'},
                {name: 'orange', value: '#ff8f00'},
                {name: 'light-blue', value: '#29b6f6'},
                {name: 'pink', value: '#ffcdd2'},
                {name: 'purple', value: '#ce93d8'},
                {name: 'green', value: '#43a047'},
                {name: 'red', value: '#f44336'},
                {name: 'blue', value: '#1976d2'},
                {name: 'yellow', value: '#fdd835'},
                {name: 'light-orange', value: '#fb8c00'},
                {name: 'light-purple', value: '#f48fb1'},
                {name: 'light-green', value: '#4caf50'},
            ]
        }
    }
})
