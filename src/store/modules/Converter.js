export default {
    state:{
        textLeft:'',
        textRight:null,
        valueRight:'',
        valueLeft:'',
        List:[],
        titleLeft:'',
        titleRight:''
    },
    actions:{
        data({commit}){
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                .then(res=>res.json())
                .then(data=>{
                    let arr=[]
                    for (let key in data.Valute) {
                        let el={
                            ...data.Valute[key],
                        }
                        arr.push(el)
                    }
                    commit('add',arr)
                })
        }
    },
    mutations:{
        add(state,data){
            state.list=[...data]
        },
        valueLeft(state,text){
            state.valueLeft=text
            state.list.forEach(el=>{
                if(el.CharCode===state.valueLeft){
                    state.titleLeft=el.Name
                }
            })

        },
        valueRight(state,text){
            state.valueRight=text
            state.list.forEach(el=>{
                if(el.CharCode===state.valueRight){
                    state.titleRight=el.Name
                }
            })
        },
        textLeft(state,text){
            state.textLeft=text
            let left=state.valueLeft
            let Right=state.valueRight
            let vLeft=+state.textLeft
            let leftRUB;
            let rightRUB;
            state.list.forEach(el=>{
                if(el.CharCode===left){
                    leftRUB=el.Value
                }
                if(el.CharCode===Right){
                    rightRUB=el.Value
                }
                let value=(leftRUB*vLeft)/rightRUB
                if(!isNaN(value)){
                    state.textRight=value
                }
            })
        },
        check(state){
            let valueLeft=state.valueLeft
            state.valueLeft=state.valueRight
            state.valueRight=valueLeft
            let tLeft=state.titleLeft
            state.titleLeft=state.titleRight
            state.titleRight=tLeft
            let left=state.valueLeft
            let Right=state.valueRight
            let vLeft=+state.textLeft
            let leftRUB;
            let rightRUB;
            state.list.forEach(el=>{
                if(el.CharCode===left){
                    leftRUB=el.Value
                }
                if(el.CharCode===Right){
                    rightRUB=el.Value
                }
                let value=(leftRUB*vLeft)/rightRUB
                if(!isNaN(value)){
                    state.textRight=value
                }
            })

        },
    },

}
