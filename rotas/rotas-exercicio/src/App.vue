<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <router-view name="menu" />
    <!-- Animação na transição de componentes 
    com vue router -->
    <transition mode="out-in"  
      enter-active-class="animate__animated animate__rubberBand"
      leave-active-class="animate__animated animate__rollOut">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
