<template>
  <div class="flex">
    <button @click="click1" class="button">Список валют</button>
    <button @click="click2" class="button">Конвертер валют</button>
  </div>
</template>

<script>
export default {
  name: "Main",
  methods:{
    click1(){
      this.$router.push('/list')
    },
    click2(){
      this.$router.push('/converter')
    }
  }
}
</script>

<style lang="scss" scoped>
.flex{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 430px auto;
  width: 536px;
  .button{
    outline: none;
    cursor: pointer;
    display: block;
    background: none;
    border: solid 1px white;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    font-size: 16px;
    width: 200px;
    height: 52px;
  }
}

</style>
