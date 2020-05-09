<template>
    <div id="app">
        <!-- <img class="image-center" src="http://spartadev.com/resources/images/dancercats.gif" alt="gatitos"> -->
        <ejemplo-post/>
    </div>
</template>

<script>
import EjemploPost from './components/Posts'
export default {
  name: 'App',
  components: {
    EjemploPost
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
</style>
