import { createStore } from "vuex";
const store = createStore({
    state:{
        tags:[
            {
                tag:'WWWWWWWWWW',
                count:3
            },  
            {
                tag:'secim2023',
                count:3
            },        
            {   
                tag:'ev',
                count:2
            },        
            {   
                tag:'arsa',
                count:7
            },
        ],
        slyweets:[
            {
                content:'taglı slyweet',
                date:1689688535530,
                id:"userid",
                name:"username",
                tag:"taglı"
            },
            {
                content:'tagsız slyweet',
                date:1689688535550,
                id:"userid",
                name:"username",
                tag:null
            }
        ],
        forbiddenids:["home"],
        activePage:false
        

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
