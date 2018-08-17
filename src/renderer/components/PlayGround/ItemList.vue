<template>
  <div>
    <h1>ItemList</h1>
    <ul>
      <li v-for="item in items" v-bind:key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  data: function(){
    return {
      items: ['Apple', 'Banana', 'Cucumber', 'Dragonfruit']
    }
  }
}
</script>

<style>

</style>
