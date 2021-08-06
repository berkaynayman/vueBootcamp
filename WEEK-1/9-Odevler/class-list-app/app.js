const app = Vue.createApp({
    data(){
        return{
            classCss : {
                 BackgroundColor: false,
                 Border: false,
                 Color: false,
                 FontBold: false,
                 BorderRadius: false,
                 FontItalic: false
            }
        };
    },
    computed:{
        txtAreClassAdd(){
            return{
                BackgroundColor : this.classCss.BackgroundColor,
                Border : this.classCss.Border,
                Color : this.classCss.Color,
                FontBold : this.classCss.FontBold,
            }
        }
    },
}).mount(".container");