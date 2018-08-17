<template>
  <div id="container">
    <div>
      <hello-world/>
      <value-counter/>
      <item-list/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './PlayGround/HelloWorld'
import ValueCounter from './PlayGround/ValueCounter'
import ItemList from './PlayGround/ItemList'

export default {
  name: 'PlayGround',
  components: {HelloWorld, ValueCounter, ItemList}
}
</script>

<style scoped>
#container{
  background-color: rgb(200, 100, 100);
}
</style>
