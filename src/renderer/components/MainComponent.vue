<template>
  <div>
    <div>
      <hello-world/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'

export default {
  name: 'MainComponent',
  components: {HelloWorld}
}
</script>

<style>
body{
  background-color: rgb(200, 200, 200);
}
</style>
