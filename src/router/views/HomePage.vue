<script setup>
import sideMenu from "/src/components/sideMenu.vue"
import contentsArea from "/src/components/contentsArea.vue"
import profileArea from "/src/components/profileArea.vue"
import tagsMenu from "/src/components/tagsMenu.vue"
import { ref } from "vue"

const activeTab=ref("contentsArea")
const tabs = {contentsArea , profileArea}
const changeTab =(name)=>{
  activeTab.value=name
}
</script>
<template>
<div class="flex items-center justify-center  w-full h-screen  flex-col md:flex-row">
  <sideMenu :changeTab="changeTab"  class=" shrink-0 w-full h-full basis-1/12 md:basis-1/4 order-1 md:order-1" ></sideMenu>
  <!-- <contentsArea class=" border-0 md:border-x shrink-0 w-full h-full basis-11/12 md:basis-2/4 order-3 md:order-2" ></contentsArea> -->
  <!-- <profileArea class=" border-0 md:border-x shrink-0 w-full h-full basis-11/12 md:basis-2/4 order-3 md:order-2" ></profileArea> -->
  <component :is="tabs[activeTab]" class=" border-0 md:border-x shrink-0 w-full h-full basis-11/12 md:basis-2/4 order-3 md:order-2" ></component>
  <tagsMenu  class="border-y md:border-0 shrink-0 w-full h-full basis-1/12 md:basis-1/4 order-2 md:order-3 hidden md:inline-flex" ></tagsMenu>
</div>
</template>