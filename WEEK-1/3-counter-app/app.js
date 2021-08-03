const app = Vue.createApp({
    data(){
        return{
            counter : 0,
        }
    },
    methods : {
        getCounterResult(){
            return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
        }
    }
    /*methods:{
        changePlus(){
            this.counter++;
            console.log("pluss");
        },
        changeEksi(){
            this.counter++;
            console.log("eksi");
        }
    }, */
}).mount("#app");