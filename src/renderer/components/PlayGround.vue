<template>
  <div id="container">
    <div>
      <router-link to="/playground/hello-world-example">Hello World Example</router-link><br>
      <router-link to="/playground/list-example">List Example</router-link><br>
      <router-link to="/playground/events-example">Events Example</router-link><br>
    </div>
  </div>
</template>

<script>
import HelloWorldExample from "./PlayGround/HelloWorldExample";
import ListExample from "./PlayGround/ListExample";
import EventsExample from "./PlayGround/EventsExample";

export default {
  name: "PlayGround",
  components: { HelloWorldExample, ListExample, EventsExample }
};
</script>

<style scoped>
#container {
  background-color: rgb(200, 100, 100);
}
</style>
