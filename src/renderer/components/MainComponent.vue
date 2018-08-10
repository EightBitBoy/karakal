<template>
  <div>
    <div>
      <transaction-list/>
    </div>
  </div>
</template>

<script>
import TransactionList from './TransactionList'

export default {
  name: 'MainComponent',
  components: {TransactionList}
}
</script>

<style>
body{
  background-color: rgb(220, 220, 220);
}
</style>
