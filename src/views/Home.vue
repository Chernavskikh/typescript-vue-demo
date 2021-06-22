<template>
  <div class="home">
    <div class="column-left">
      <h1 class="title title-lg mb-30">Reminders</h1>
      <img src="~@/assets/images/notes.jpeg" alt="">
    </div>
    <div class="column-right">
      <LoginForm/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.column-left {
  background-color: #f4f5ff;
  flex: 1;
  width: 60vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 15vh;

  img {
    max-width: 75%;
    height: auto;
  }
}

.column-right {
  padding-top: 30vh;
  flex: 1;
}
</style>
