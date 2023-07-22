<script setup>
import tag from "/src/components/tag.vue"

import { computed, ref } from "vue"

const liked = ref(false)

const props = defineProps({
    content:String,
    id:String,
    name:String,
    date:Number,
    tag:String,
    like:Number

})

const formatLikes= (number)=>{

  if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1) + "k";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  }
  return number.toString();

}


const convertDate = computed(()=>{
    var d = new Date(props.date)
    

   var hour =  d.getHours() <=9 ? "0"+ d.getHours() : d.getHours()
   var minute =  d.getMinutes() <=9 ? "0"+ d.getMinutes() : d.getMinutes() 
   var day =  d.getUTCDate()  <=9 ? "0"+ d.getUTCDate() : d.getUTCDate() 
   var month =  d.getUTCMonth() <=9 ? "0"+ d.getUTCMonth() : d.getUTCMonth() 
   var year=  d.getFullYear()
   return hour + ":" + minute + " " + day + "/" + month + "/"+ year;
})
</script>

<template>

<div class="border-b border-sl-blue/10  my-4 w-full">
    <ul class=" max-w-2xl mx-auto w-full p-3 flex flex-col relative text-white ">
        <!-- user info Start -->
        <li class="flex w-full   gap-5 px-4 py-1">
            <img draggable="false" class="border-sl-blue border rounded-full w-10 h-10 shrink-0 md:w-12 md:h-12" src="/src/assets/mini_PP.png" alt="pp"> 
            <div  >
                <p class="flex items-center justify-start">{{ props.name }} 
                    <svg class="text-sl-blue fill-sl-blue mx-2" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="16" height="16" viewBox="0 0 500.000000 500.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
class="text-sl-blue fill-sl-blue" stroke="none">
<path d="M3760 4683 c-129 -110 -369 -288 -505 -373 -235 -148 -504 -266 -652
-286 -50 -6 -51 -6 -116 48 -132 108 -315 194 -546 254 -126 34 -137 35 -200
24 -131 -23 -276 -82 -393 -161 -32 -22 -94 -50 -145 -66 -87 -27 -91 -27
-328 -24 -236 2 -402 -8 -479 -30 -56 -16 -136 -101 -180 -191 -38 -79 -62
-207 -51 -275 13 -81 29 -141 52 -200 l25 -62 -31 -93 c-62 -187 -78 -320 -51
-417 24 -90 173 -201 390 -294 140 -59 222 -79 505 -127 473 -80 622 -133 781
-282 120 -113 153 -184 264 -568 122 -424 213 -825 245 -1085 28 -225 29 -226
43 -75 74 806 206 1348 366 1514 49 50 105 69 369 121 214 43 297 69 442 139
198 95 374 226 598 445 130 127 143 144 220 276 197 341 359 704 427 960 29
108 57 282 47 291 -3 3 -36 -16 -73 -41 -263 -177 -759 -325 -1182 -352 l-103
-6 64 129 c180 361 285 673 275 820 l-3 51 -75 -64z m-2075 -828 c174 -37 342
-154 486 -337 37 -47 28 -42 -67 35 -225 183 -591 242 -957 153 -54 -13 -97
-22 -97 -20 0 2 35 24 77 49 203 119 382 157 558 120z"/>
</g>
                    </svg>
                </p>
                <p class="text-white/50 hover:cursor-pointer hover:text-sl-blue transition-all text-xs">@{{ props.id }}</p>
            </div>
        </li>
        <!-- user info End -->
        <!-- slywet content Start -->
        <li class=" pl-2 md:pl-20 pr-2 py-2 w-full flex flex-row items-center justify-start">
            <p class="w-full h-fit break-words inline">
                <tag v-if="props.tag !=null" :tag="props.tag" class=" inline"></tag>
                {{ props.content }}
            </p>
        </li>
        <!-- slywet content End -->
        <!-- slywet buttons Start -->
        <li class="w-full flex items-center justify-end mb-4">
            <div @click="liked=false" v-if="liked==true" class=" text-sl-blue hover:saturate-50 cursor-pointer inline-flex ">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21a.998.998 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1.001 1.001 0 0 1 12 21Z"></path>
                </svg>
            <p class="ml-1">{{ formatLikes(props.like) }}</p>

            </div>
            <div @click="liked=true" v-if="liked==false" class=" text-sl-blue hover:saturate-150 cursor-pointer inline-flex ">

                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 21a.998.998 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1.001 1.001 0 0 1 12 21ZM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6Z"></path>
</svg>
<p class="ml-1">{{ formatLikes(props.like) }}</p>
            </div>
        </li>
        <!-- slywet buttons End -->
        <!-- post date Start -->
        <li class="absolute top-1 right-2 select-none text-xs text-white/50">{{ convertDate }}</li>
        <!-- post date End -->
    </ul>
    

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