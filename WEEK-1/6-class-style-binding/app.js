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
            console.log("this.redBG - " + this.redBG);
            console.log("this.blueBG - " + this.blueBG);
            return {border : this.showBorder, red : this.redBG, blue : this.blueBG};
        },
    },
}).mount("#app");