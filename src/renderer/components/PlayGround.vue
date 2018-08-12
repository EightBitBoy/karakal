<template>
  <div id="container">
    <div>
      <hello-world/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './PlayGround/HelloWorld'

export default {
  name: 'PlayGround',
  components: {HelloWorld}
}
</script>

<style scoped>
#container{
  background-color: rgb(200, 100, 100);
}
</style>
