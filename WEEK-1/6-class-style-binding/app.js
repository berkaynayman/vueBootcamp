const app = Vue.createApp({
    data() {
        return {
            showBorder:false,
            redBG : false,
            blueBG : false,
            bgColor : "yellow",
        };
    },
    computed : {
        boxClasses(){
            return {border : this.showBorder, red : this.redBG, blue : this.blueBG};
        },
    },
}).mount("#app");