const app = Vue.createApp({
    data() {
        return{
            title : "Vue den gelen title",
            content : "Merhaba ben Berkay",
            hobbies : ["Futbol", "Basketbol", "Tenis"],
            personel : {
                name : "Berkay",
                department : "Salesman",
                salary : "5000$",
            },
            linkGo : "<a target='_blank' href='https://www.youtube.com/'>linkGo</a>",
            url : "https://www.youtube.com/",
            x : 0,
            y : 0,
        }
    },
    methods : {
        updateTitle() {
            this.title = "update Title";
        },
        positionInfo(event) {
            console.log(event);
            this.x = event.x;
            this.y = event.y;
        }
    }
}).mount("#app");