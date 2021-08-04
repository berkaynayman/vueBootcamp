const app = Vue.createApp({
    data() {
        return {
            search : "",
            itemList : ["karpuz", "kavun", "muz", "çilek"],
            //filteredList: [],
        };
    },
    methods:{
        searchList(){
            //this.filteredList = this.itemList.filter((i) => i.includes(this.search));
        },
    },
    // computed kullanabileceğimiz yerde kesinlikle computed kullanmalıyız
    // başka bir çözüm tercih etmemeliyiz
    computed: {
        filteredList() {
            return this.itemList.filter((i) => i.includes(this.search));
        },
    },
}).mount("#app");