const app = Vue.createApp({
    data() {
        return { // return burda obje dir içindekiler ise key value dir
            title: "Berkay Nayman", /* title isimli property oluşturduk */
            content : "Merhaba, benim adım Berkay", /* content isimli property oluşturduk */
            eduflow :{
                title : "Youtube gir",
                target : "_blank",
                url : "https://www.youtube.com", /* url isimli property oluşturduk */ 
                alt : "youtube",
            },
            coords :{
                x:0,
                y:0
            },
        };
    },
    methods: {
        changeTitle(uTitle) {
            this.title = uTitle;
        },
        updateCordinates(message ,event){
            this.changeTitle(`${event.x}, ${event.y}`);
            this.coords = {
                x : event.x,
                y : event.y
            };
        }
    },
}).mount("#app"); /* bu bölgenin adı vue instance dir */