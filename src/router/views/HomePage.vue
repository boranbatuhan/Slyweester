<script setup>
import { computed, ref } from 'vue';
import newSlywet from '/src/components/newSlywet.vue';
import slyweetCard from '/src/components/slyweetCard.vue';
import store from "/src/store"

const tab = ref("sanaÖzel")


// sort list by date
const sortedList = computed(() => {
    const listTemp = store.state.slyweets
  return listTemp.sort((a, b) => b.date - a.date);
});

</script>


<template>
    
    <div class="overflow-x-hidden overflow-y-scroll pb-10 w-full flex items-center justify-start flex-col  ">
        <!-- header Start -->
        <div class=" cursor-pointer pt-2 sticky  top-0 backdrop-blur-md w-full z-[99] text-white tracking-widest ">
            <p class="px-6 py-4 font-bold text-xl hidden md:inline ">Anasayfa</p>
            <div class="flex items-center justify-center w-full border-b border-zinc-600">
                <div @click="tab='sanaÖzel'" class="bg-transparent transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='sanaÖzel'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">Sana özel</p></div>
                <div @click="tab='takipEdilen'" class="bg-transparent transition-all cursor-pointer hover:bg-white/10 px-4 pt-4 pb-px w-full basis-1/2"><p :class="{'!border-sl-blue !text-white !font-semibold':tab=='takipEdilen'}" class="border-b-4 pb-2 mx-auto border-transparent font-normal text-zinc-500 w-fit">Takip Edilenler</p></div>
            </div>
        </div>
        <!-- header End -->
        <!-- new slywet Start -->
        <newSlywet></newSlywet>
        <!-- new slywet End -->
        <!-- slywets Start -->
        <slyweetCard class="px-2" v-for="sly in sortedList" :key="sly" :id="sly.id" :content="sly.content" :date="sly.date" :name="sly.name" :tag="sly.tag" :like="9760" ></slyweetCard>
        <!-- slywets End -->
 
        <ul>
            <li v-for=" i in 200" :key="i">{{ i }}</li>
        </ul>
    </div>
</template>