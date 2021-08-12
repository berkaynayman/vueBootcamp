<template>
    <div class="container">
        <userSection :ahmett="userList"/>  <!-- parent' den child' a veri göndermek yani props yöntemi -->
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
            userList:["Berkay", "Ahmet", "Temel", "Dursun"],
        };
    }

};
</script>