import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            name: "Berkay",
            lname: "Nayman",
            age : 20,
            address : {},
            password : 1232323232,
            tc : 224343
            /* bu bilgileri diyelimki çektik ve front-end alanında gezmesini istemiyorsak
                yazılımcının bu datayı alıp aksiyon anında tekrar backende göndermemesini istiyorsak
                yada diyelimki passwordu silmek istiyoruzdur- getters'da activeUser tanımladık  */
        },
        theme: "dark",
        fullName : "Berkay Nayman",
        permissions: [1, 2, 3, 4, 5],
        userList:[ "Berkay", "Temel", "Ece", "Dursun", "Hatice"],
        itemList : [
            { id : 1, title : "Masa",     type : "mobilya"},
            { id : 2, title : "Sandalye", type : "mobilya"},
            { id : 3, title : "TV",       type : "elektronik"},
            { id : 4, title : "Monitor",  type : "elektronik"},
            { id : 5, title : "Bardak",   type : "plastik"},
        ]
    },
    /* eğer sürekli kullandığımız birşey ise filter(mobilya gibi)
        burada getters da tamamlıyoruz */
    getters : {
        /*benim bu store de değişken gibi davranacak yapılarım şunlardır
            buraya bir veri gönderiririz sonra return alırız. getters reactiv çalışır
            return olan veriyi set edemeyiz getters ın amacı return etmek  */
        /*getter tek işi state deki bilgileri alıp bana vermek */
        woodItems : state => state.itemList.filter(i => i.type === "mobilya"),
        activeUser(state){
            const user = {
                ... state.user
            };
            delete user.password; 
            delete user.age;
            return user;
        }
    }
});

export default store;