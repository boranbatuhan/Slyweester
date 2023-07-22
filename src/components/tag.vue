<script setup>
import {  ref } from 'vue';
import router from '/src/router';

const props = defineProps({
    tag:String,
    count:Number
})

const tagName = ref(props.tag)
const goTagDetails =()=>{
    router.push({ path: "/tag/" + tagName.value })
}

</script>

<template>
<div @click="goTagDetails" :key="tagName" class=" w-[200px] shrink-0">
    <div class="relative  cursor-pointer shrink-0 text-sl-blue w-fit h-fit m-1 select-none flex items-center justify-center ">
        <img draggable="false" loading="lazy" class="absolute py-px top-0 left-0 h-full" src="/src/assets/glitter.gif" alt="glitter">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 1 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20Z"></path>
        </svg>
        <h1 class="font-semibold truncate  hover:break-words max-w-[160px]  h-7">{{ props.tag }}</h1>
    </div>
    <p class="text-xs -mt-2 pl-2 text-sl-blue/40">{{ props.count !=undefined ? props.count + ' slywet' :''}} </p>
</div>
</template>