<script setup>
import tag from "/src/components/tag.vue";

import store from "/src/store"
import { ref } from "vue";



const slywetContent=ref('')
const tagContent=ref('')
const openTagInput=ref(false)

const props= defineProps({
    closeModal:Function
})

const resetInputs=()=>{
    tagContent.value = ''
    slywetContent.value = ''
    openTagInput.value=false
}

const toggleTagInput = ()=>{
    openTagInput.value = !openTagInput.value
}

const addTag = () => {
  openTagInput.value = false;
};

const slywetle =()=>{

    const date = Date.now()
    const slyweet ={
        content:slywetContent.value,
        tag: tagContent.value =='' ? null : tagContent.value,
        date: date,
        id:"batuhanma",
        name:"batuhan"
    }

  store.commit("pushSlyweet", slyweet);
  if(tagContent.value != '')
  {
    store.commit("pushTag", tagContent.value);
  }
  console.log('slyweet :>> ', slyweet);
  if(props.closeModal != undefined)
  {
    props.closeModal()
  }
  resetInputs()


}

</script>


<template>
<div class="w-full border-b ">
    <div class="h-fit max-w-2xl overflow-hidden flex items-start justify-start p-4 mx-auto">
        <!-- user photo Start -->
        <img draggable="false" class="border-sl-blue border rounded-full w-10 h-10 shrink-0 md:w-12 md:h-12" src="/src/assets/mini_PP.png" alt="pp"> 
        <!-- user photo End -->

        <!-- slywet inputs Start -->
        <form action="" @submit.prevent class="mx-2 relative ml-5 w-full flex items-center justify-between flex-wrap gap-4 flex-row">
            <!-- char limit Start -->
            <p class="absolute top-0 right-5 text-xs select-none">{{slywetContent.length}}/180</p>
            <p v-if="slywetContent !='' || tagContent !=''" @click="resetInputs" class="absolute -top-1 -right-2 text-sm select-none text-zinc-200 hover:text-sl-blue">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.41 11.996 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a.999.999 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-4.3-4.29Z"></path>
                </svg>
            </p>
            <!-- char limit End -->
            <!-- tag Start -->
            <tag v-show="tagContent !=''" :tag="tagContent" class="!absolute -top-3 left-10 !pointer-events-none"></tag>
            <!-- tag End -->
            <!-- content input Start -->
            <textarea maxlength="180" v-model="slywetContent" class="bg-sl-black outline-none w-full  border-b border-zinc-500 mt-5 h-24 text-white break-words resize-none" onkeydown="if(event.key === 'Enter') return false;" name="content" id="content" placeholder="Neler oluyor?" autocomplete="off"></textarea>
            <!-- content input End -->
            <!--button tag input Start -->
            <button @click="toggleTagInput" class="px-4 relative cursor-pointer py-1 bg-sl-blue text-white rounded-full flex items-center justify-center ">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 1 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20Z"></path>
                </svg>
                <p>+</p>
            </button>
            <!--button tag input End -->
            <!-- tag input Start -->
            <div :class="{'visible':openTagInput==true , 'invisible':openTagInput==false}" class="w-44 h-16 z-50 cursor-default text-sl-blue border border-sl-blue p-2 rounded-full bg-sl-black/80 hover:bg-sl-black absolute flex flex-wrap items-center justify-start top-1/2 -translate-y-1/2 left-20">
            <svg class="basis-1/5  border-sl-blue" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 1 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20Z"></path>
            </svg>  
            <input type="text" maxlength="10"  placeholder="..." class="rounded-tr-lg bg-sl-black/80  border-sl-blue font-semibold outline-none w-full basis-4/5" v-model="tagContent">
            <button @click="addTag" :disabled="tagContent==''" class="disabled:saturate-0 disabled:pointer-events-none disabled:!cursor-default cursor-pointer disabled:opacity-75 mx-auto text-white bg-sl-blue px-1 hover:px-4 transition-all py-px rounded-full"><svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
            </div>
            <!-- tag input End -->

            <!-- button send slywet Start -->
            <input @click="slywetle" :disabled="slywetContent=='' || openTagInput==true " type="button" value="slywetle" class="  disabled:saturate-0 font-semibold disabled:pointer-events-none disabled:opacity-75 px-4 cursor-pointer py-1  bg-sl-blue text-white rounded-full">
            <!-- button send slywet End -->
        </form>
        <!-- slywet inputs End -->

    </div>
</div>
</template>