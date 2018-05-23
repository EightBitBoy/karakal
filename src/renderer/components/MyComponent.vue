<template>
    <div>
        <h2>Hello world!</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: 'This is a message!'
    }
  }
}
</script>

<style>
h2 {
    color: blue;
}
</style>
