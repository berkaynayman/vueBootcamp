const app = Vue.createApp({
    data(){
        return{
            memberList : [
                { id : 1, name : "Temel Dursun"},
                { id : 2, name : "Temel Durmasın"},
                { id : 3, name : "Fadime Aslan"},
                { id : 4, name : "Ayşe Kaplan"},
                { id : 5, name : "Yusuf Edu"},
                { id : 6, name : "Elif Edu"},
            ],
        };
    },
}).mount("#app");