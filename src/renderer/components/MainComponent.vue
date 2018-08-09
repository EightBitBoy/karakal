<template>
  <div>
    <div>
      <hello-world/>
    </div>
    <div>
      <transaction-list/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
import TransactionList from './TransactionList'

export default {
  name: 'MainComponent',
  components: {HelloWorld, TransactionList}
}
</script>

<style>
body{
  background-color: rgb(220, 220, 220);
}
</style>
