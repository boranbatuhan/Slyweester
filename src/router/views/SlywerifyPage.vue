<script setup>
import {  onMounted, ref } from "vue"
import logo from "/src/components/logo.vue"

const tab =ref(1)

const infoInputRef = ref("")
const infoFocus=ref(false)

const forward = ()=>{
    if(tab.value<=1){
        tab.value++
    }
    else if(tab.value >=2)
    {
        tab.value=2
    }
}

onMounted(()=>{
    window.addEventListener('mousedown',(event)=>{
        const liste = event.target.classList
        if(liste.contains("infoInput")==true)
        {
            infoFocus.value=true
        }
        else if( liste.contains("infoInput")==false && infoInputRef.value !="" ){
            infoFocus.value=true

        }
        else {
            infoFocus.value=false
        }
    })
})
</script>

<template>
    <div class="w-full h-full overflow-y-auto">
        <logo @click="tab=1" class="h-10 mx-auto"></logo>
        <!-- tab1 Start -->
        <div v-if="tab==1" class="flex items-center justify-start flex-col text-white/90">
            <p class=" my-5 font-bold animate-glow text-4xl ">Slywerify</p>
            <p class=" my-5 text-3xl font-bold">Hesabının türü hangisi?</p>
            <p class=" my-5 text-sm font-thin">Sana uygun doğru Onaylı aboneliğini seç:</p>
            <!-- radio selector Start -->
            <ul class="w-full flex items-center justify-center gap-5 my-10 px-2">
                <!-- radio user Start -->
                <li class="basis-1/2 md:basis-0 select-none">
                    <input checked class="hidden peer " type="radio" name="slywerify" id="slywerify-user" value="user">
                    <label for="slywerify-user" class="flex items-start justify-center flex-col w-full md:w-52 h-28 px-2 py-3 border-2 bg-zinc-700/50 hover:bg-zinc-700/30 transition-all rounded-lg border-transparent peer-checked:border-sl-blue ">
                        <p class="text-lg font-bold text-white/90">Bireyim</p>
                        <p class="text-xs text-zinc-400">Bireyler ve içerik üreticileri için</p>
                    </label>
                </li>
                <!-- radio user End -->

                <!-- radio company Start -->
                <li class="basis-1/2 md:basis-0 select-none">                    
                    <input class="hidden peer " type="radio" name="slywerify" id="slywerify-company" value="company">
                    <label for="slywerify-company" class="flex items-start justify-center flex-col w-full md:w-52 h-28 px-2 py-3 border-2 bg-zinc-700/50 hover:bg-zinc-700/30 transition-all rounded-lg border-transparent peer-checked:border-sl-blue ">
                            <p class="text-lg font-bold text-white/90">Kuruluşum</p>
                            <p class="text-xs text-zinc-400">İşletmeler, devlet kurumları, kâr amacı gütmeyen kuruluşlar için</p>
                    </label>
                </li>
                <!-- radio company End -->
            </ul>
            <!-- radio selector End -->
            <input @click="forward" type="button" value="Abone ol" class="text-black bg-white w-9/12 py-2 font-bold tracking-wider rounded-full hover:bg-zinc-300 disabled:pointer-events-none disabled:bg-zinc-500">
        </div>
        <!-- tab1 End -->

        <!-- tab2 Start -->
        <div v-if="tab==2" class="flex items-center justify-start flex-col pt-10 text-white/90 h-full bg-gradient-to-b from-sl-blue via-sl-black to-sl-black">
            <!-- head info Start -->
            <div class="flex items-center justify-center bg-black w-11/12 md:w-96 gap-4 rounded-lg px-5 py-3 h-fit">
            <p class="font-bold text-base md:text-xl">Onaylanmış slyweester üyeleri onaylandıktan sonra mavi slyweet onay işareti alır.</p>
            <img draggable="false" class="!w-32 !h-32" loading="eager" src="/src/assets/hdslyweester.png" alt="hd-logo">
            </div>
            <!-- head info End -->
            
            <!-- display info Start -->
            <div class="w-full flex items-center justify-center gap-10 bg-sl-black p-4 border-y border-sl-blue/50 mt-24 mb-10">
                <div id="unverified" class=" saturate-50 select-none flex items-center px-4 justify-center gap-2 bg-gradient-to-r from-transparent to-sl-black opacity-50">
                    <img draggable="false" class="border-sl-blue opacity-20 border rounded-full w-10 h-10 shrink-0 md:w-12 md:h-12" src="/src/assets/mini_PP.png" alt="pp"> 
                <div>
                <p class="flex items-center justify-start">batuhan 
                </p>
                <p class="text-white/50 hover:cursor-pointer hover:text-sl-blue transition-all text-xs">@6atuhan.dev</p>
                </div>
                </div>
                <div id="verified" class=" select-none flex items-center justify-center gap-2 bg-sl-black saturate-150">
                    <img draggable="false" class="border-sl-blue border rounded-full w-10 h-10 shrink-0 md:w-12 md:h-12" src="/src/assets/mini_PP.png" alt="pp"> 
            <div  >
                <p class="flex items-center justify-start">batuhan 
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
                <p class="text-white/50 hover:cursor-pointer hover:text-sl-blue transition-all text-xs">@6atuhan.dev</p>
            </div>
                </div>
            </div>
            <!-- benefits Start -->
            <div class="w-full px-10 md:px-20 mb-10">
                <ul class="list-disc text-sl-blue">
                    <li> <p class="!text-white">Gerçek kişi veya kurum olduğunu göster</p> </li>
                    <li> <p class="!text-white"> Sohbetlerde ve aramada öncelikli sıralamalar</p></li>
                    <li> <p class="!text-white"> Akışta öncelikli gösterim ve öne çıkış</p></li>
                    <li> <p class="!text-white"> Daha uzun slywetler</p></li>
                    <li> <p class="!text-white"> Öncelikli güncelleme erişimi</p></li>
                </ul>
            </div>
            <!-- benefits End -->
            <!-- information Start -->
            <div class="w-11/12 mb-10 infoInput">
                <div  :class="{'text-sl-blue border-sl-blue':infoFocus==true,  'text-zinc-700 border-zinc-700':infoFocus==false}" class="w-full infoInput border relative py-2 transition-all">
                    <p class="absolute infoInput -top-3 left-3 bg-sl-black px-2">Bize kendini tanıt</p>
                    <input @focus="infoFocus=true" type="text" v-model="infoInputRef" class="outline-none infoInput w-full bg-transparent text-white p-2">
                </div>
            </div>
            <!-- information End -->
            <!-- display info End -->
            <input @click="forward" type="button" value="Tamamla" class="text-black bg-white w-9/12 py-2 font-bold tracking-wider rounded-full hover:bg-zinc-300 disabled:pointer-events-none disabled:bg-zinc-500">
            <p class="text-xs my-4 text-zinc-500 pb-4"> Bir yıllık dönemde 2 kere başvurabilirsiniz.</p>
        </div>
        <!-- tab2 End -->
        
    </div>
</template>

<style scoped>
.animate-glow{
    animation: glowing 1.5s infinite alternate ;
}

@keyframes glowing {
    from {
    filter: drop-shadow( 0px 0px 0px  rgb(1 186 239))

    }
    to{
    filter: drop-shadow( 0px 0px 10px  rgb(1 186 239))

    }
}
</style>