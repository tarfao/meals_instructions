<template>
  <Home />
</template>

<script>
import Home from './pages/Home';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import url('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css');
*{
  font-family: 'Roboto Mono', monospace;
  margin: 0px;
}
#app{
  display: flex;
  justify-content: center;
}
</style>
