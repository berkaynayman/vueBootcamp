const app = Vue.createApp({
    data(){
        return{}
    }
});

app.component("counter-item", {
    data() {
        return {
            counter : 0,
        };
    },
    /* bu string template dir ve çok kullanışlı değildir
        ufak bir proje yapıcak ise cdn i kullanarak ve string templati kullanarak
        yapabilliriz. fakat büyük projeler için bizim daha iyi bir geliştirme
        ortamına ihtiycımız var Vue CLI işimizi çözüyor
        */
    template : `
    <div class="container-sm">
        <h3> {{ counter }}</h3>
        <button @click="counter++">++</button>
        <button @click="counter--">--</button>
    </div>
    ` ,
});
app.mount("#app");