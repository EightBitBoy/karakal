<template>
  <div>
    <h1>Hello world!</h1>
    <div>
      {{valueAlpha}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return{
      valueAlpha: "foobar"
    }
  }
}
</script>

<style>

</style>
