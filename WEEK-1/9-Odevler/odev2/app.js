const app = Vue.createApp({
    data() {
        return{
            value : "",
        }
    },
    methods : {
        addValue(event) {
            this.value = event.target.value;
        },
        alertShow() {
            alert();
        }
    },
}).mount("#exercise");