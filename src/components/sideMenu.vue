<script setup>
import logo from "/src/components/logo.vue"
import router from "/src/router";

const goPage=(pName)=>{
    router.push(`/${pName}`)
}

const logla = ()=>{
    console.log('cıkıs yapıldı :>> ');
    router.push("/")

}

</script>

<template>
    
    <div class="flex items-center justify-start md:flex-col flex-row !text-white box-border">
        <logo class="hidden md:inline w-7 h-7 md:w-16 md:h-16 shrink-0 ml-8 md:ml-0 mt-2 md:mt-10"></logo>
        <ul class=" flex md:block w-full">
            <li class="order-5 md:order-1 !hidden md:!inline-flex relative menu-item group  md:my-10 items-center"> 
                <div class="group-hover:bg-white/10  rounded-full w-fit px-0  md:px-2 py-0 md:py-1 items-center gap-2 flex"> 
                    <img draggable="false" class="border-sl-blue border rounded-full w-10 h-10 shrink-0 md:w-12 md:h-12" src="/src/assets/mini_PP.png" alt="pp"> 
                    <p class="hidden md:inline-block">Username</p>
                </div>
                <div class=" !cursor-default p-2 invisible group-hover:visible absolute top-10 z-[999] right-0 md:top-16 md:left-1/2 md:-translate-x-1/2 w-32 h-fit text-center bg-sl-black">
                    <p @click="logla" class="bg-white/10 !cursor-pointer select-none rounded-full hover:bg-white/20 md:text-base text-2xl">Çıkış yap</p>
                </div>
            </li>
            <li @click="goPage('home')" class="order-1 md:order-2  menu-item group">
                <div class="w-fit flex items-center justify-center group-hover:bg-white/10  rounded-full px-2 mx-2 py-1 md:mr-auto ml-0 md:ml-16">
                    <svg    width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m20.42 10.184-7.71-7.88a.999.999 0 0 0-1.42 0l-7.71 7.89a2 2 0 0 0-.58 1.43v8.38a2 2 0 0 0 1.89 2h14.22a2 2 0 0 0 1.89-2v-8.38a2.07 2.07 0 0 0-.58-1.44ZM10 20.004v-6h4v6h-4Zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19v8.38Z"></path>
                </svg>
                <p class="hidden md:inline-flex  w-fit px-2 mx-2 py-1 mr-auto">
                    Anasayfa
                </p>
                </div>
            </li>
            <li class="order-2 md:order-3  menu-item group">
                <div class="w-fit flex items-center justify-center group-hover:bg-white/10  rounded-full px-2 mx-2 py-1 mr-0 md:mr-auto ml-0 md:ml-16">

                <svg  width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"></path>
                    <path d="M12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                    <path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1Z"></path>
                </svg>   
                <p class="hidden md:inline-flex  w-fit px-2 mx-2 py-1 mr-auto">Yardım</p>
            </div>
        
            </li>
            <!-- tags -->
            <li class="order-3 md:order-5  menu-item group">
                <div class="w-fit flex items-center justify-center group-hover:bg-white/10  rounded-full px-2 mx-2 py-1 md:mr-auto ml-0 md:ml-16">

                <svg  width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 1 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20Z"></path>
                </svg>
                <p class="hidden md:inline-flex  w-fit px-2 mx-2 py-1 mr-auto">Tags</p>
            </div>

            </li>
            <!-- profile -->
            <li @click="goPage('batuhanma')" class="order-4 md:order-4  menu-item group">
                <div class="w-fit flex items-center justify-center group-hover:bg-white/10  rounded-full px-2 mx-2 py-1 md:mr-auto ml-0 md:ml-16">

                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"></path>
                    <path d="M12 13a7 7 0 0 0-7 7 1 1 0 1 0 2 0 5 5 0 1 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7Z"></path>
                </svg>
                <p class="hidden md:inline-flex  w-fit px-2 mx-2 py-1 mr-auto">Profil</p>
            </div>

            </li>
        </ul>
        <div class="rounded-full cursor-pointer bg-sl-blue hover:saturate-[80%] w-10/12 max-w-[200px] text-white  hidden md:inline-flex my-10 py-3">
            <p class="font-semibold text-xl text-center w-full select-none">slywetle</p>
        </div>
    </div>
</template>

<style scoped>

.menu-item{
    @apply
    hover:text-sl-blue
    cursor-default
     px-2 py-1
    w-full
    text-start
    flex items-center justify-center
}



</style>
