const app = Vue.createApp({
    data(){
        return{
            counter : 0,
            counter2 : 0,
        }
    },
    methods : {
        getCounterResult(){
            console.log("counter");
            return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
        },
        getCounter2Result(){
            console.log("counter2");
            return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
        }
    },   /*
            Burada getCounterResult() çalıştırdığımız zaman
            getCounter2Result() ' de çalışır. Bu çok kötü bir durum
            bundan dolayı computed ile çalışırız
        */
    computed : {
        
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