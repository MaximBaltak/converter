<template>
  <nav class="nav">
    <router-link to="/">Выйти</router-link>
    <router-link to="/list">Список валют</router-link>
  </nav>
  <div class="flex">
    <div class="block">
      <h3 class="title">{{titleLeft}}</h3>
      <div class="wap">
        <select v-model="valueLeft"  class="list" >
          <option v-for="el in list" :key="el.ID" :value="el.CharCode">{{el.CharCode}}</option>
        </select>
        <input v-model="textLeft"  type="text">
      </div>
    </div>
    <button @click="click" class="check">
      <svg  viewBox="0 0 74 16" >
      <path d="M1 8H72.5M1 8L8.5 0.5M1 8L8.5 15.5M72.5 8L65 0.5M72.5 8L65 15.5" />
    </svg>
    </button>
    <div class="block">
      <h3 class="title">{{titleRight}}</h3>
      <div class="wap">
        <select  v-model="valueRight"  class="list" >
          <option v-for="el in list" :key="el.ID" :value="el.CharCode">{{el.CharCode}}</option>
        </select>
        <input disabled :value="value" type="text">
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Converter",
  computed:{
    ...mapState({
      list: state=>state.converter.list,
      titleLeft: state=>state.converter.titleLeft,
      titleRight: state=>state.converter.titleRight,
      value: state=>state.converter.textRight,
    }),
    valueLeft:{
      get(){
        return this.$store.state.converter.valueLeft
      },
      set(value){
          this.$store.commit('valueLeft',value)
      }
    },
    valueRight:{
      get(){
        return this.$store.state.converter.valueRight
      },
      set(value){
        this.$store.commit('valueRight',value)
      }
    },
    textLeft:{
      get(){
        return this.$store.state.converter.textLeft
      },
      set(value){
        this.$store.commit('textLeft',value)
      }
    },
  },
  created() {
    this.$store.dispatch('data')
  },
  methods:{
    click(){
      this.$store.commit('check')
    }
  }

}
</script>

<style lang="scss" scoped>
input{
  outline: none;
  border: none;
  background: none;
  border-bottom: solid 1px #005dc0;
  width: 156px;
  height: 43px;
  color: black;
  font-size: 30px;
  font-weight: 400;
}
.nav{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px ;
  a{
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 400;
    margin: 30px;
  }
}
.flex{
  display: flex;
  margin: 300px auto;
  width: 1000px;
  justify-content: space-between;
  .block{
    margin-top: 30px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    min-width: 250px;
    height: 70px;
    .title{
      margin: 0;
      text-align: left;
      color: #a5a5a5;
      font-size: 20px;
      font-weight: 400;
    }
    .wap{
      .list{
           width: 90px;
          height: 50px;
          background: none;
          border: none;
          font-size: 30px;
          font-weight: 400;
          color: gray;
          outline: none;
          margin-right: 0;

      }
    }

  }
  .check{
    outline: none;
    border: none;
    background: white;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    margin-top: 53px;
    cursor: pointer;
    svg{
      width: 40px;
      stroke: #005dc0;
      stroke-width: 3px;
    }
  }
}


</style>
