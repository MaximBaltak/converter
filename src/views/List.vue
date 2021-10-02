<template>
  <nav class="nav">
    <router-link to="/">Выйти</router-link>
    <router-link to="/converter">Конвертер валют</router-link>
  </nav>
    <input class="search" @input="input" :value="text"  type="text" placeholder="Что ищем">
  <transition-group name="list" tag="ul" class="list">
    <li class="el" v-for="el in list" :key="el.ID">
      <h3 class="title">{{el.Name}}</h3>
      <div class="flex">
        <p class="info" ><span>{{el.Nominal}}</span>  <span>{{el.CharCode}}</span>
          <svg  viewBox="0 0 74 16" >
            <path d="M1 8H72.5M1 8L8.5 0.5M1 8L8.5 15.5M72.5 8L65 0.5M72.5 8L65 15.5" />
          </svg>
          {{el.Value}} RUB</p>
        <p v-if="el.bool" class="indicator">
          <svg viewBox="0 0 28 33" >
            <path d="M14 33L14 0.999999M14 0.999999L1 14M14 0.999999L27 14" />
          </svg>
          {{el.difference}}</p>
        <p v-else class="indicator red">
          <svg viewBox="0 0 28 33" >
            <path d="M14 33L14 0.999999M14 0.999999L1 14M14 0.999999L27 14"  />
          </svg>
          {{el.difference}}</p>
      </div>
    </li>
  </transition-group>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "List",
  computed: mapState({
    list: state=>state.list.filterList,
    text: state=>state.list.textChange
  }),
  created() {
    this.$store.dispatch('data')
  },
  methods:{
    input(e){
      this.$store.commit('filter',e.target.value)
    },
  }
}
</script>

<style lang="scss" scoped>

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
.search{
  display: block;
  margin: 50px auto;
  outline: none;
  background: none;
  border: none;
  color: white;
  width: 401px;
  height: 40px;
  border-bottom: solid 1px #FFFF;
  padding: 5px;
  font-size: 18px;
  font-weight: 400;
}
.search::placeholder{
  color: #c5c4c4
}

.list{
  list-style-type: none;
  padding: 0;
  width: 600px;
  margin: 50px auto;
  .el{
    margin-top: 30px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    .title{
      margin: 0;
      text-align: left;
      color: #a5a5a5;
      font-size: 20px;
      font-weight: 700;
    }
    .flex{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .info {
        margin: 0;
        color: #505050;
        font-size: 30px;
        font-weight: 400;
        svg{
          margin-left: 10px;
          width: 77px;
          stroke: #505050;
          stroke-width: 2px;
        }
      }
      .indicator{
        margin: 0;
        color: green;
        font-size: 30px;
        font-weight: 400;
        svg{
          height: 23px;
          stroke-width: 4px;
          stroke: green;
        }
      }
      .red{
        color: red;
        svg{
          stroke: red;
          transform: rotate(180deg);
        }
      }
    }

  }
}
.list-enter-active{
  animation: in 1s ;
}
.list-leave-active{
  animation: in 1s reverse ;
}
.list-move{
  transition: transform 3s;
}
@keyframes in {
  0%{
    transform: rotate(45deg) translateX(100px);
    opacity: 0;
  }
  100%{
    transform: rotate(0deg) translateX(0);
    opacity: 1;

  }
}


</style>
