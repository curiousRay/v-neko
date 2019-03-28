var app = new Vue({
    el: '#app',
    data: {
        neko: {
            bodyPart: '',
            color: ''
        }
    },
    methods: {
        tint: function () {
            if (this.neko.bodyPart.toString() === 'tail') {
                $('.s-' + this.neko.bodyPart.toString()).find('path')
                    .attr('stroke', this.neko.color);
            } else {
                $('.s-' + this.neko.bodyPart.toString()).find('path')
                    .attr('fill', this.neko.color);
            }
        },
        download: function () {
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            let htmlParts = [document.getElementById('neko').innerHTML];
            let mBlob = new Blob(htmlParts, {'type': 'image/svg+xml'});
            let image = new Image();
            image.src = window.URL.createObjectURL(mBlob);
            image.onload = function () {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
                let btn = document.createElement('a');
                btn.download = 'MyNeko.png';
                btn.href = canvas.toDataURL('image/png');
                btn.click();
            }
        }
    },
    watch: {
        neko: {
            handler: function (newVal) {
                if (newVal.bodyPart !== '' && newVal.color !== '') {
                    Object.assign(this.neko, newVal);
                    this.tint();
                }
            },
            deep: true
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
});
