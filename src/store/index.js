import { createStore } from 'vuex'
import converter from './modules/Converter'
import list from './modules/list'
export default createStore({
  modules: {
    converter,
    list
  }
})
