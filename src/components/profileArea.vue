<script setup>
import { ref } from "vue";

const tab=ref("slywet")

</script>

<template>
    <div class="flex items-start justify-start flex-col overflow-y-auto box-border w-full h-full ">
        <div class="sticky top-0 w-full h-fit z-50 backdrop-blur-sm cursor-pointer bg-sl-black/80 px-4 py-1 text-white flex items-center justify-start gap-4 md:gap-10">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11.001H7.14l3.63-4.36a1.001 1.001 0 0 0-1.54-1.28l-5 6a1.184 1.184 0 0 0-.09.15c0 .05 0 .08-.07.13a1 1 0 0 0-.07.36 1 1 0 0 0 .07.36c0 .05 0 .08.07.13.026.052.056.103.09.15l5 6a1 1 0 0 0 1.41.13 1 1 0 0 0 .13-1.41l-3.63-4.36H19a1 1 0 0 0 0-2Z"></path>
            </svg>
            <div>
                <p class="font-bold"> username</p>
                <p class="font-normal tracking-wider text-xs text-zinc-500"> 4.617 Slywet</p>
            </div>
        </div>
        <div class="bg-sl-blue/50 w-full h-32 md:h-40 shrink-0"></div>
        <div class=" box-border w-full relative shrink-0 flex items-start justify-start flex-col pl-2 md:pl-6">
            <div class="border  px-4 py-1 rounded-full hover:bg-white/10 absolute top-2 right-2 cursor-pointer transition-all duration-150">
                <p class="font-bold text-white ">Profili düzenle</p>
            </div>
            <img draggable="false" class="border-sl-black border-4 rounded-full cursor-pointer w-20 h-20 -mt-10 shrink-0 md:w-36 md:h-36 md:-mt-16" src="/src/assets/mini_PP.png" alt="pp"> 
            <p class="text-white/90 font-bold text-xl">name</p>
            <p class="text-zinc-400 font-thin text-base">@username</p>
            <p class="text-base text-white my-4 pr-2 md:pr-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div class="flex items-center justify-start gap-4 flex-wrap w-full">
                <p class="text-zinc-500 text-sm flex items-center justify-start gap-2">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 5h-6V2h-2v3H5C3.346 5 2 6.346 2 8v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.654-1.346-3-3-3ZM5 7h14a1 1 0 0 1 1 1l.001 3.12c-.896.228-1.469.734-1.916 1.132-.507.45-.842.748-1.588.748-.745 0-1.08-.298-1.587-.747-.595-.529-1.409-1.253-2.915-1.253-1.505 0-2.319.724-2.914 1.253-.507.45-.841.747-1.586.747-.743 0-1.077-.297-1.582-.747-.447-.398-1.018-.905-1.913-1.133V8a1 1 0 0 1 1-1ZM4 18v-4.714c.191.123.374.274.583.461C5.178 14.276 5.991 15 7.495 15c1.505 0 2.319-.724 2.914-1.253.507-.45.841-.747 1.586-.747.745 0 1.08.298 1.587.747.595.529 1.409 1.253 2.915 1.253s2.321-.724 2.916-1.253c.211-.188.395-.34.588-.464L20.002 18H4Z"></path>
                    </svg>
                     Doğum tarihi 05/05/1995
                    </p>
                <p class="text-zinc-500 text-sm flex items-center justify-start gap-2">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3ZM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1Zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1Z"></path>
                        <path d="M8 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                        <path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z"></path>
                    </svg>
                    Kasım 2021 tarihinde katıldı
                </p>
            </div>
            <div class="flex items-center justify-start gap-4 flex-wrap w-full my-3">
                <div class="text-white text-sm cursor-pointer hover:underline flex items-center justify-center"><p class="text-zinc-500"><span class="text-white font-semibold">68</span> Takip edilen</p> </div>
                <div class="text-white text-sm cursor-pointer hover:underline flex items-center justify-center"><p class="text-zinc-500"><span class="text-white font-semibold">68</span> Takipçi</p></div>

            </div>
        </div>
        <div class="flex items-center justify-center w-full border-b border-zinc-600">
            <div @click="tab='slywet'" class="bg-sl-black transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='slywet'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">Slywetler</p></div>
            <div @click="tab='yanıtlar'" class="bg-sl-black transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='yanıtlar'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">Yanıtlar</p></div>
            <div @click="tab='medya'" class="bg-sl-black transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='medya'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">Medya</p></div>
            <div @click="tab='beğeni'" class="bg-sl-black transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='beğeni'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">Beğeni</p></div>
        </div>
        <div v-for="i in 100" :key="i">{{ i }}</div>
    </div>
</template>

<style scoped>
div > svg{
    transition: all;
    filter: drop-shadow(0px 0px 0px transparent);

}
div:hover > svg{
filter: drop-shadow(0px 0px 5px #01BAEF);
}

</style>