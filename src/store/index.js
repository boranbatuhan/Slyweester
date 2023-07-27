import { createStore } from "vuex";
const store = createStore({
    state:{
        tags:[
            {
                tag:'cats',
                count:2
            },  
            {
                tag:'tailwind',
                count:2
            },        
            {   
                tag:'vuejs',
                count:2
            },        
            {   
                tag:'cars',
                count:7
            },
        ],
        slyweets:[
            {
                content:'slywet with tag',
                date:1689688535510,
                id:"userid",
                name:"username",
                tag:"vuejs"
            },
            {
                content:'vuejs is best!',
                date:1689688535530,
                id:"userid",
                name:"username",
                tag:"vuejs"
            },
            {
                content:'slywet without tag',
                date:1689688535550,
                id:"userid",
                name:"username",
                tag:null
            }
        ],
        forbiddenids:["home","profile","tags","tag"],
        activePage:false,
        

    },
    mutations:{
        pushTag(state,tag){
            
            const existingTag = state.tags.find((t) => t.tag === tag);
            if (existingTag) {
              existingTag.count++;
            } else {
              state.tags.push({ tag: tag, count: 1 });
            }

        },
        pushSlyweet(state,content){
            state.slyweets.push(content)
            console.log('content :>> ', content);
        }
    },
    
})

export default store; 
