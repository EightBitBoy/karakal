<template>
  <div>
    <h1>Hello world!</h1>
    <div>
      {{valueAlpha}}
    </div>
    <div>
      {{valueBravo}}
    </div>
    <div>
      {{count}}
    </div>
    <button v-on:click="count++">Count!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return{
      valueAlpha: "foobar",
      valueBravo: "abcde",
      count: 0
    }
  }
}
</script>

<style>

</style>
