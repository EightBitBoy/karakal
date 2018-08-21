<template>
  <div>
    <h1>ItemList</h1>
    <ul>
      <li v-for="item in items" v-bind:key="item">{{item}}</li>
    </ul>
    <input v-model="newItem" type="text">
    <button v-on:click="addItem">Add item!</button>
    <br>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  data: function() {
    return {
      items: ["Apple", "Banana", "Cucumber", "Dragonfruit"],
      newItem: ""
    };
  },
  methods: {
    addItem() {
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
};
</script>

<style>
</style>
