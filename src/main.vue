<template>
  <div class="outer">
    <notice-message-box-component></notice-message-box-component>
    <div class="outer__buttons">
      <button @click="showFlashMessage">Show Flush Message 1</button>
      <button @click="showFlashMessage2">Show Flush Message 2</button>
      <button @click="showFlashMessage3">Show Flush Message 3</button>
    </div>
  </div>
</template>

<script>

import noticeMessageBoxComponent from "./components/noticeMessageBox/noticeMessageBox.vue"

export default {
  components: {
    noticeMessageBoxComponent
  },
  methods: {
    showFlashMessage() {
      this.$store.dispatch('showFlashMessage', {text: 'Message!', duration: 4000, mode: 'done'});
    },
    showFlashMessage2() {
      this.$store.dispatch('showFlashMessage', {text: 'Loading...', duration: 0, mode: 'processing'});
      setTimeout( () => {
        this.$store.dispatch('showFlashMessage', {text: 'Completed!', duration: 4000, mode: 'done'});
      }, 1500);
    },
    showFlashMessage3() {
      this.$store.dispatch('showFlashMessage', {text: 'Error!', duration: 4000, mode: 'error'});
    }
  }
}

</script>

<style scoped>
.outer {
  position: relative;
  width: 100%;
  height: 100%;
}
.outer__buttons {
  position: absolute;
  top: 300px;
}
</style>
