<template>
  <div>
    <h1>Example</h1>
    <p>{{ example }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    example: {
      type:  String, 
      default: ''
    }
  }
};
</script>
