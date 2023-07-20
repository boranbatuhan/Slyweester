<script setup>
import { ref } from "vue";
import slyweetCard from "/src/components/slyweetCard.vue"
import router from "/src/router"
import store from "/src/store"
console.log('router :>> ', router);

const detailedTag = ref(router.currentRoute.value.params.tagname)
const tab = ref('populer')
</script>
<template>
<div class="flex flex-col items-start justify-start w-full h-full overflow-y-auto">
        <div class="w-full sticky top-0 items-start justify-start flex flex-col z-[999] bg-sl-black/80 backdrop-blur-sm">
            <div class="w-full items-start justify-start flex px-4 gap-10 py-4 text-white ">
                <svg @click="router.push('/tags')" class="cursor-pointer" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11.001H7.14l3.63-4.36a1.001 1.001 0 0 0-1.54-1.28l-5 6a1.184 1.184 0 0 0-.09.15c0 .05 0 .08-.07.13a1 1 0 0 0-.07.36 1 1 0 0 0 .07.36c0 .05 0 .08.07.13.026.052.056.103.09.15l5 6a1 1 0 0 0 1.41.13 1 1 0 0 0 .13-1.41l-3.63-4.36H19a1 1 0 0 0 0-2Z"></path>
                </svg>
                <p class="text-white/90 text-lg font-bold">{{ detailedTag }}</p>
            </div>
            <div class="flex items-center justify-center w-full border-b border-zinc-600">
                <div @click="tab='populer'" class="transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='populer'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">Popüler</p></div>
                <div @click="tab='enson'" class="transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='enson'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">En Son</p></div>
                <div @click="tab='foto'" class="transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='foto'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">Fotoğraflar</p></div>
                <div @click="tab='video'" class="transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='video'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">Videolar</p></div>
            </div>
        </div>

        <slyweetCard v-show="sly.tag==detailedTag" class="px-2" v-for="sly in store.state.slyweets" :key="sly" :id="sly.id" :content="sly.content" :date="sly.date" :name="sly.name" :tag="sly.tag" :like="9760" ></slyweetCard>
        <ul>
            <li v-for=" i in 200" :key="i">{{ i }}</li>
        </ul>
</div>
</template>