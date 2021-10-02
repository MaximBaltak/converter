export default {
    state:{
        textChange:'',
        list:[],
        filterList:[],
        a:[]
    },
    actions:{
        data({commit}){
            fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                .then(res=>res.json())
                .then(data=>{
                    let arr=[]
                    let bool;
                    for (let key in data.Valute) {
                        let value = data.Valute[key].Value - data.Valute[key].Previous
                        bool = value > 0;
                        let el={
                            ...data.Valute[key],
                            bool,
                            difference:+value.toFixed(4)
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
            state.filterList=[...data]
            data.forEach(el=>{
                state.a.push(el)
            })
        },
        filter(state,text) {
            state.filterList=[]
            state.textChange = text
            state.list.forEach(el=>{
                if(el.CharCode.includes(state.textChange)||el.Name.includes(state.textChange)){
                        state.filterList.push(el)
                }
                if(state.textChange===''){
                    state.filterList=[...state.list]
                }
            })
        },

    }
}
