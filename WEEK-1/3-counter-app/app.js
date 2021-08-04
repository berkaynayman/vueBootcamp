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
        // reactiv yapıdır. reactiv olarak değişken gibi davranan, method gibi tanımlanan yapılardır.
        getCounterResult(){
            console.log("counter");
            return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
            // çalışma mantığı: counter da bir değişim var ise kodu çalıştırır
        },
        getCounter2Result(){
            console.log("counter2");
            return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
        }
    },
    watch : {
        // data veya computedd da bulunan bir bilgiyi direk izleyebilmemizi sağlar
        counter(newValue, oldValue){
            console.log("counterrr" ,oldValue, "=>", newValue); // counterın eski bilgisini ve yeni bilgisini alırız
        },
        getCounterResult(newValue, oldValue){
            console.log("küçükbüyük", oldValue, "=>", newValue);
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