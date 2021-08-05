const app = Vue.createApp({
    data(){
        return{
            value :0,
        }
    },
    computed : {
        result() {
            setTimeout(() => {
                this.value = 0;
            }, 5000);
            return this.value == 33 ? "Tamamlandı" : "Henüz Bitmedi!!" ;
        }
    },
    watch : {

    }
}).mount("#exercise");