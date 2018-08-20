<template>
  <div id="container">
    <div>
      <hello-world-example/>
      <events-example/>
      <list-example/>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./PlayGround/HelloWorldExample";
import ValueCounter from "./PlayGround/EventsExample";
import ItemList from "./PlayGround/ListExample";

export default {
  name: "PlayGround",
  components: { HelloWorldExample, EventsExample, ListExample }
};
</script>

<style scoped>
#container {
  background-color: rgb(200, 100, 100);
}
</style>
