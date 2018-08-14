<template>
  <div id="container">
    <div>
      <hello-world/>
      <value-counter/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './PlayGround/HelloWorld'
import ValueCounter from './PlayGround/ValueCounter'

export default {
  name: 'PlayGround',
  components: {HelloWorld, ValueCounter}
}
</script>

<style scoped>
#container{
  background-color: rgb(200, 100, 100);
}
</style>
