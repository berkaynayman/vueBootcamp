const app = Vue.createApp({
    data(){
        return{
            counter : 0,
            counter2 : 0, 
            itemList : [],
        }
    },
    methods:{
        addOne(){
            this.itemList.push("1");
        }
    },
    computed:{
        // REACTIVITY YAPISIDIR
        // GERİYE DEĞER RETURN ETMEK ZORUNDALAR
        getResult(){
            // BURASI COUNTER DEĞİŞTİĞİNDE ÇALIŞIR
            return this.counter > 0 ? "pozitif" : this.counter < 0 ? "negatif" : "sıfır"; 
        },
        getResult2(){
            // BURASI COUNTER2 DEĞİŞTİĞİNDE ÇALIŞIR
            return this.counter2 > 0 ? "pozitif" : this.counter2 < 0 ? "negatif" : "sıfır"; 
        }
    },
    watch :{
        // vue instance deki bir yapıyı izleyip ona göre aksiyon alır.
        // veri değiştiğinde diyelim aksiyon alıcaz watch bunun için eniyi tercih
        counter2(newValue, oldValue){
            // counterı izlemek istiyorum bunun durumundan haberdar et beni

            console.log("counter2 watcher çalıştı", newValue, oldValue);
        },
        getResult(newValue, oldValue){
            console.log(`getResult Watcher Çalıştı ${oldValue} --> ${newValue}`);
        },
        /* ÇALIŞMAZ
        itemList(itemList){
            console.log("itemList ->>", itemList);
        },*/
        // ÇALIŞIR    
        itemList:{
            deep : true,
            handler(itemList){
                console.log("itemList ->>", itemList);
            }
        }
    }
}).mount("#app");