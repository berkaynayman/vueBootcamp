const app = Vue.createApp({
    data() {
        return {
            fullName : "Biriki",
        };
    },
    methods : {
        updateValue(event){
            this.fullName = event.target.value;
        },
    },
}).mount("#app");