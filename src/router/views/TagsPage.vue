<script setup>
import router from "/src/router"
import { computed } from "vue";
import tag from "/src/components/tag.vue"
import store from "/src/store";

const sortedTags = computed(() => {
      return store.state.tags.slice().sort((a, b) => b.count - a.count);
    });


</script>

<template>
    <div class="flex flex-col items-start justify-start w-full h-full overflow-y-auto">
        <!-- header Start -->
        <div class="w-full sticky top-0 items-start justify-start flex px-4 gap-10 z-[999] py-4 text-white cursor-pointer bg-sl-black/80 backdrop-blur-sm">
            <svg @click="router.push('/home')" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11.001H7.14l3.63-4.36a1.001 1.001 0 0 0-1.54-1.28l-5 6a1.184 1.184 0 0 0-.09.15c0 .05 0 .08-.07.13a1 1 0 0 0-.07.36 1 1 0 0 0 .07.36c0 .05 0 .08.07.13.026.052.056.103.09.15l5 6a1 1 0 0 0 1.41.13 1 1 0 0 0 .13-1.41l-3.63-4.36H19a1 1 0 0 0 0-2Z"></path>
            </svg>
            <p class="text-white/90 text-lg font-bold">Gündemler</p>
        </div>
        <!-- header End -->
        
        <!-- tags Start -->
        <ul class="w-full">
            <li v-for="i in sortedTags" :key="i" class="w-full bg-sl-black hover:bg-sl-blue/5 px-2 py-2 md:px-6 cursor-pointer">
            <tag :tag="i.tag " :count=" i.count" ></tag>
            </li>
        </ul>
        <!-- tags End -->
        <ul>
            <li v-for=" i in 200" :key="i">{{ i }}</li>
        </ul>
    </div>
</template>