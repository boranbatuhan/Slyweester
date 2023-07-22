<script setup>
import { onMounted, ref } from "vue";
import logo from "/src/components/logo.vue"
import newSlywet from "/src/components/newSlywet.vue"
import router from "/src/router";

const goPage=(pName)=>{
    router.push(`/${pName}`)
}
const logla = ()=>{
    console.log('cıkıs yapıldı :>> ');
    router.push("/")

}

const showSlywetle=ref(false)
const toggleSlywetle = ()=>{
    showSlywetle.value = !showSlywetle.value
}

const showMiniqMenu = ref(false)
const toggleMiniqMenu=()=>{
    showMiniqMenu.value = ! showMiniqMenu.value
}



</script>

<template>
    
    <div class="flex items-center justify-start md:flex-col flex-row !text-white box-border">
        <!-- menuList Start -->
        <ul  class=" flex flex-row md:flex-col w-full h-full items-center md:items-end justify-around md:justify-start">
            <li @click="goPage('')" class="order-1 md:order-1 !hidden md:!inline-flex  menu-item group !items-center !justify-center ">
                <logo class="w-7 h-7 md:w-16 md:h-16 shrink-0"></logo>
            </li>
            <!-- home Start -->
            <li @click="goPage('home')" class="order-2 md:order-2  menu-item group">
                <div class="w-fit flex items-center justify-center group-hover:bg-white/10  rounded-full px-2 mx-2 py-1 ">
                    <svg    width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m20.42 10.184-7.71-7.88a.999.999 0 0 0-1.42 0l-7.71 7.89a2 2 0 0 0-.58 1.43v8.38a2 2 0 0 0 1.89 2h14.22a2 2 0 0 0 1.89-2v-8.38a2.07 2.07 0 0 0-.58-1.44ZM10 20.004v-6h4v6h-4Zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19v8.38Z"></path>
                    </svg>
                <p class="hidden md:inline-flex  w-fit px-2 mx-2 py-1 mr-auto">
                    Anasayfa
                </p>
                </div>
            </li>
            <!-- home End -->

            <!-- help Start -->
            <li @click="goPage('help')" class="order-3 md:order-3  menu-item group">
                <div class="w-fit flex items-center justify-center group-hover:bg-white/10  rounded-full px-2 mx-2 py-1">

                <svg  width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"></path>
                    <path d="M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1Z"></path>
                </svg>   
                <p class="hidden md:inline-flex  w-fit px-2 mx-2 py-1 mr-auto">Yardım</p>
            </div>
        
            </li>
            <!-- help End -->

            <!-- tags Start -->
            <li @click="goPage('tags')" class="order-4 md:order-4  menu-item group">
                <div class="w-fit flex items-center justify-center group-hover:bg-white/10  rounded-full px-2 mx-2 py-1 ">

                <svg  width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 1 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20Z"></path>
                </svg>
                <p class="hidden md:inline-flex  w-fit px-2 mx-2 py-1 mr-auto">Tags</p>
            </div>
            </li>
            <!-- tags End -->

            <!-- profile Start-->
            <li @click="goPage('batuhanma')" class="order-5 md:order-5  menu-item group">
                <div class="w-fit flex items-center justify-center group-hover:bg-white/10  rounded-full px-2 mx-2 py-1">

                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"></path>
                    <path d="M12 13a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7Z"></path>
                </svg>
                <p class="hidden md:inline-flex  w-fit px-2 mx-2 py-1 mr-auto">Profil</p>
            </div>

            </li>
            <!-- profile End -->


            <!-- slywetle Start -->
            <li class="order-6 md:order-6 !hidden md:!inline-flex relative menu-item group   !items-center !justify-start"> 
                <div @click="toggleSlywetle" class="rounded-full cursor-pointer bg-sl-blue hover:saturate-[80%] w-11/12  text-white   py-3">
                    <p class="font-semibold text-xl text-center w-full select-none">slywetle</p>
                </div>
            </li>

            <!-- slywetle End -->
            
            <!-- user Start -->
            <li class="order-7 md:order-7 !hidden md:!inline-flex relative menu-item group !mt-auto !mb-10 "> 
                <div @click="toggleMiniqMenu"  class="group-hover:bg-white/10  rounded-full w-11/12 px-0  md:px-2 py-0 md:py-1 items-center gap-2 flex"> 
                    <img draggable="false" class="border-sl-blue border rounded-full w-10 h-10 shrink-0 md:w-12 md:h-12" src="/src/assets/mini_PP.png" alt="pp"> 
                    <div>
                        <p class="font-bold text-base"> username</p>
                        <p class="font-normal tracking-wider text-xs text-zinc-500">@username</p>
                    </div>
                    <svg class="ml-auto" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"></path>
                    </svg>
                </div>
                <div v-if="showMiniqMenu" @mouseleave="toggleMiniqMenu"  class=" cursor-pointer absolute top-0 -translate-x-2 -translate-y-28 py-4 rounded-xl z-[999] boxshadow w-fit bg-sl-black">
                    <p  class="bg-sl-black px-2 py-1 !cursor-pointer select-none  hover:bg-white/20 md:text-base !text-sm font-bold !text-white/90 duration-200 border-t border-zinc-600">var olan bir hesap ekle</p>
                    <p @click="logla" class="bg-sl-black px-2 py-1 !cursor-pointer select-none  hover:bg-white/20 md:text-base !text-sm font-bold !text-white/90 duration-200">@username hesabından çıkış yap</p>
                </div>
            </li>
            <!-- user End -->

        </ul>
        <!-- menuList End -->

        <!-- add slywet modal Start -->
        <div v-if="showSlywetle" class="z-[9999] w-full bg-zinc-500/50 h-full fixed top-0 left-0  flex flex-col items-center justify-start pt-24">
           <div class="bg-sl-black border border-sl-blue w-fit rounded-xl">
            <div class="h-10 flex  items-center justify-start px-3">
                <svg @click="toggleSlywetle"  class="cursor-pointer" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.41 11.996 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-4.3-4.29Z"></path>
                </svg>
            </div>
            <newSlywet class="!border-0" :closeModal="toggleSlywetle"></newSlywet>
           </div>

        </div>
        <!-- add slywet modal End -->

    </div>

</template>

<style scoped>

.menu-item{
    @apply
    hover:text-sl-blue
    cursor-pointer
     px-2 py-1  mt-1
     text-white/90
    w-fit md:min-w-[250px]
    flex md:items-center md:justify-start items-center justify-center

}

.boxshadow{
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.568);
}


</style>
