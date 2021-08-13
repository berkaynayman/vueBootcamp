<template>
    <div class="container">
        <!-- parent' den child' a veri göndermek yani props yöntemi - :ahmett="userList" -->
        <!--
            Buna gerek kalmadı çünkü provide inject kullandık
            <userSection :ahmett="userList" @new-item="userList.push($event)"/>
        -->
        <!--
            Buna gerek kalmadı çünkü provide inject kullandık
            <userSection @new-item="userList.push($event)"/>
        -->
        <userSection />
    </div>
</template>
<script>
import userSection from "@/components/userSection";
export default{
    components:{
        userSection,
    },
    data(){
        return{
            provideData: {
                userList:["Berkay", "Ahmet", "Temel", "Dursun"]
            }
            /*
            userList:["Berkay", "Ahmet", "Temel", "Dursun"],
            
                Burada userList i tüm componentlerde kullanıyoruz iç içe fazla componentimiz olduğu için
                emit ile yukarı componentlere göndermek çok fazla component olduğu için doğru olmaz
                parentdan childa veri göndermek çok fazla component olduğu için doğru olmaz
                BUNDAN DOLAYI PROVIDE INJECT KULLANMALIYIZ
            */
        };
    },
    methods : {
        newItem(item) {
            this.provideData.userList.push(item);
        }
    },
    provide() {
        return {
            userList: this.provideData.userList,
            newItem : this.newItem
        }
    }
    
};
</script>