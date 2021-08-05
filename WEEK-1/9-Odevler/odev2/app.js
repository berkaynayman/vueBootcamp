const app = Vue.createApp({
    data() {
        return{
            value : "",
        }
    },
    methods : {
        addValue(event) {
            this.value = event.target.value;
        }
    },
}).mount("#exercise");