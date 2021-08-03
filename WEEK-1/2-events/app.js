const app = Vue.createApp({
    methods : {
        updateValue(event){
            console.log(event.target.value);
        },
    },
}).mount("#app");