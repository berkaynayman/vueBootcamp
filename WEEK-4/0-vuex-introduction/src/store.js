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
    }
});

export default store;