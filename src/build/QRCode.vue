<template>
    <div>
        <h2> QR - код для портфолио</h2>
        <canvas ref="canvas"></canvas>
        <p>Отсканируй QR - код, что бы открыть сайт</p>
        <button class="visit-btn" @click="visitSite">Перейти по  QR - коду</button>
    </div>
</template>

<script>
import QRCode from 'qrcode'

   export default {
    name : 'QR КОД',
    data(){
        return{
            url:'https://github.com/dozenheroic' // ссылка на ресурс куда переходим
        }
    },
    mounted(){
          const canvas = this.$refs.canvas
          if(canvas){
            QRCode.toCanvas(canvas, this.url, {with: 180}, (error)=>{
                if(error) console.error(error)
            })
          }
    },
    methods:{
        visitSite(){
            window.open(this.url, '_blank')
        }
    }

   }

</script>