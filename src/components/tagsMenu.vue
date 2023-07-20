
<script setup>

import { computed } from "vue";
import tag from "/src/components/tag.vue"
import store from "/src/store";

const sortedTags = computed(() => {
      return store.state.tags.slice().sort((a, b) => b.count - a.count);
    });




</script>
<template>
    <div class="flex items-start justify-center flex-col">
        <div class="w-fit flex items-center justify-center mx-auto relative">
            <svg class="absolute top-6 left-5 text-sl-blue fill-sl-blue" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8Zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6Z"></path>
</svg>
            <input class=" h-fit hidden md:inline mt-3 mb-6 mx-auto bg-sl-blue/5 rounded-full pl-12 pr-3 py-2 w-[280px] focus:ring-0 focus:outline-none  text-sl-blue placeholder:text-sl-blue border border-transparent focus:border-sl-blue focus:bg-sl-black focus:text-white" type="search" placeholder="Slyweester'da Ara" autocomplete="off">
        </div>
        <div class="flex flex-col bg-sl-blue/5 p-0 md:p-10 rounded-3xl w-fit mx-auto items-start justify-center overflow-hidden">
            <div class="text-center text-2xl hidden md:flex items-center justify-center font-bold rounded-2xl px-6 py-2 ">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 1 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20Z"></path>
                </svg>
                <p>Gündem</p>
            </div>
            <tag :tag="sortedTags[0].tag " :count=" sortedTags[0].count" class="mx-auto basis-1/4 hover:bg-sl-blue/10 my-1 rounded-lg"></tag>
            <tag :tag="sortedTags[1].tag " :count=" sortedTags[1].count" class="mx-auto basis-1/4 hover:bg-sl-blue/10 my-1 rounded-lg"></tag>
            <tag :tag="sortedTags[2].tag " :count=" sortedTags[2].count" class="mx-auto basis-1/4 hover:bg-sl-blue/10 my-1 rounded-lg"></tag>
            <tag :tag="sortedTags[3].tag " :count=" sortedTags[3].count" class="mx-auto basis-1/4 hover:bg-sl-blue/10 my-1 rounded-lg"></tag>
            
        </div>
        <div class="mt-auto hidden mx-auto text-xs md:flex flex-wrap items-center justify-center text-sl-blue/50">
            <p class="basis-full text-center"><strong>6atuhan</strong> tarafından tasarlanmıştır.</p>
            <a class="basis-1/2 text-center" href="https://github.com/6atuhan" target="_blank">. github .</a>
            <a class="basis-1/2 text-center" href="https://linkedin.com/in/6atuhan" target="_blank">. linkedin .</a>
        </div>
    </div>
</template>