const app = Vue.createApp({
    data(){
        return{
            title : "BERKAY NAYMAN",
            counter : 0
        }
    },
    created(){
        setInterval(() => {
            this.counter++;
        }, 1000)
    },
    computed:{
        changeTextColor(){
            return{
                "text-green"     : this.counter  === 0,
                "text-blue"      : this.counter === 1,
                "text-default"   : this.counter  === 2,
                "text-orange"    : this.counter  === 3,
                "text-red"       : this.counter  === 4,
            }
        }
    },// ödev : counter 4 olduğu zaman başa dönsün
    watch:{
        changeTextColor(newValue, oldValue){
            if (this.counter == 4) {
              console.log(`newValue -> ${newValue} , oldValue -> ${oldValue}`);
            }
        }
    }
}).mount("#app");