<template>
    <div>
        <!--
            Buna gerek kallmadı çinki provide inject kullandık
            <ListSection :ahmett="ahmett" />  
        -->
        <ListSection />  
        <!-- child' ten parent' a veri göndermek istiyorisek $emit kullanırız 
            new-item adında event gönderiyorum değeride bu new Date().getTime()) -->
        <!-- AddSection ile getircez 
        <button @click="$emit('new-item', new Date().getTime())">TIKLA</button>
        -->
        <!-- 
            Provide inject kullandığımız için gerek kalmadı
            <AddSection @new-item="$emit('new-item', $event)"/>
        -->
        <AddSection/>
    </div>
</template>
<script>
import ListSection from "@/components/ListSection";
import AddSection from "@/components/AddSection";
export default {
    //props :["ahmett"], // parentdan gelen veriyi kullanmak için belirtmeliyiz
    emits :["new-item"], // burada emiti belirtmesekde kodumuz çalışır ama daha iyi bir kod okunurluğu için belirtmemiz iyi olur
    components:{
        ListSection,
        AddSection
    }
};
</script> 