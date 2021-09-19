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
    /*state'i çok hızlı bir şekilde update eder.*/
    mutations :{
        /*itemliste yenibir öge ekliyeceğiz
        görevi statei update etmek olduğu için ilk ögesi "state" olur.
        newItem(state, item){} buraya item veye herhangi birşey yazabiliriz*/
        /*database işlemleri yapıcakisek mutation bizim isteğimizi beklemez, bu yüzden boş bir
        veri ile set eder. belki kendimiz bir yolunu bulup yapabiliriz fakat bir geçikme olduğu dahilinde
        data mızı set etmez yani garanti bir yol değil. garanti bir yol için ACTION u tercih edebiliriz.
        Action, mutationsa göre daha iyi diyebiliriz.SEBEP?Asenkron çalışır.*/
        newItem(state, item){
            state.itemList.push(item);
        }
    },
    actions:{
        /*context bir object dir ve içerisinde birden fazla bilgi taşır*/
        /*newItem(context, item){
            console.log("item :>> ", item)
            setTimeout(() => {
                context içerisinden
                    context.state
                    context.dispatch en çok kullanacaklarımız  
                context.commit("newItem", item);
            },2000);
        }*/
        newItem({commit}, item){
            setTimeout(() => {
                commit("newItem",item);
            })
        }
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