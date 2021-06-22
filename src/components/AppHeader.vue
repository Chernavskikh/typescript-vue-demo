<template>
  <header class="header">
    <nav class="header-nav">
      <base-button @click="logout">Logout</base-button>
    </nav>
  </header>
</template>

<script lang="ts">
import { auth } from '@/firebase/firebase'
import { Component, Vue } from 'vue-property-decorator'
import BaseButton from '@/components/elements/BaseButton.vue'

@Component({
  components: {
    BaseButton
  }
})

export default class AppHeader extends Vue {
  logout ():void {
    auth.signOut().then(() => {
      this.$router.push({ path: '/' })
    }).catch((error) => {
      // An error happened.
      console.error(error)
    })
  }
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  box-shadow: 2px 3px 4px rgba(#000, 0.1);
}

.header-nav {
  display: flex;
  justify-content: flex-end;
}
</style>
