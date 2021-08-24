import { createStore } from "vuex";

const store = createStore({
    state: {
        person: {
            name: "Berkay",
            lname: "Nayman",
            age : 20 
        },
        theme: "dark",
        permissions: [1, 2, 3, 4, 5]
    }
});

export default store;