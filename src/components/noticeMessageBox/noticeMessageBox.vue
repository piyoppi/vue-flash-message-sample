<template>
  <div class="msgbox-outer" :class="outerClass">
    {{ $store.state.noticeMessageBoxStore.text }}
  </div>
</template>

<script>

export default {
  computed: {
    mode: function() {
      return this.$store.state.noticeMessageBoxStore.mode;
    },
    visible: function() {
      return this.$store.state.noticeMessageBoxStore.visible;
    },
    outerClass: function() {
      return {
        darkblue: this.mode === "processing",
        lightblue: this.mode === "done",
        red: this.mode === "error",
        hidden_bottomside: !this.visible && !this.isTopside,
        hidden_topside: !this.visible && this.isTopside,
        show_bottomside: this.visible && !this.isTopside,
        show_topside: this.visible && this.isTopside,
        topside: this.isTopside
      }
    }
  },
  props: {
    isTopside: {
      type: Boolean,
      default: true
    }
  }
}

</script>

<style scoped>
.msgbox-outer {
  width: 450px;
  padding: 20px;
  position: absolute;
  left: 300px;
  font-size: 9pt;
  border-radius: 5px 5px 0 0;
  border-style: solid;
  border-width: 0 3px 0 0;
  transition: color 0.4s ease-out, background-color 0.4s ease-out, bottom 0.3s ease-in, top 0.3s ease-in;
}
.topside {
  border-radius: 0 0 5px 5px;
  border-width: 0 3px 3px 0;
}

.darkblue {
  background-color: #0e6191;
  border-color: #054468;
  color: whitesmoke;
}
.lightblue {
  background-color: #72d0ff;
  border-color: #3386af;
}
.red {
  background-color: #880000;
  border-color: #550000;
  color: whitesmoke;
}
.hidden_bottomside {
  bottom: -150px;
}
.hidden_topside {
  top: -150px;
}
.show_bottomside {
  bottom: 0px;
}
.show_topside {
  top: 0px;
}
</style>
