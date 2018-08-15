<template>
  <div>
    <h1>ValueCounter</h1>
    <div>
      {{someString}}
    </div>
    <div>
      {{count}}
    </div>
    <button v-on:click="count++">Do count!</button>
    <div>
      {{factor}}
    </div>
    <button v-on:click="factor++">Increase factor!</button>
    <div>
      {{getCalculatedValue()}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ValueCounter',
  data: function() {
    return {
      someString: "foobar",
      count: 0,
      factor: 1
    }
  },
  methods: {
    getCalculatedValue: function() {
      return this.count * this.factor;
    }
  }
}
</script>

<style>

</style>
