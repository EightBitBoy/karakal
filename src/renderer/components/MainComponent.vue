<template>
  <div>
    <div>
      <transaction-list/>
    </div>
    <div>
      <play-ground/>
    </div>
  </div>
</template>

<script>
import PlayGround from './PlayGround'
import TransactionList from './TransactionList'

export default {
  name: 'MainComponent',
  components: {PlayGround, TransactionList}
}
</script>

<style>
body{
  background-color: rgb(220, 220, 220);
}
</style>
