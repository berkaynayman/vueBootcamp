const app = Vue.createApp({
    data(){
        return{
            nameSur : "Berkay Nayman",
            age     : 21,
            url     : "https://static.stereogum.com/uploads/2018/03/pixies-1521647446-1000x651.jpg",
        };
    },
    methods : {
        randomNumber() {
            return Math.random();
        },
    },
}).mount("#exercise");