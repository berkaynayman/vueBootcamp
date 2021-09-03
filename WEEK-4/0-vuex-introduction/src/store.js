import { createStore } from "vuex";

const store = createStore({
    state: {
        person: {
            name: "Berkay",
            lname: "Nayman",
            age : 20 
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
        /*benim bu store de değişken gibi davranacak yapılarım şunlardır */
        /*getter tek işi state deki bilgileri alıp bana vermek */
        woodItems : state => state.itemList.filter(i => i.type === "mobilya"),
    }
});

export default store;