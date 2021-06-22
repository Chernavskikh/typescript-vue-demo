<template>
  <div class="login-form">
    <h2 class="title text-center mt-0 mb-15">Welcome Back</h2>
    <base-input
      class="mb-15"
      v-model="loginFormData.email"
      type="text"
      placeholder="Email"
    ></base-input>

    <base-input
      placeholder="Password"
      class="mb-15"
      v-model="loginFormData.password"
      type="password"
    ></base-input>

    <base-button theme="primary" @click="login">Login</base-button>

    <p class="text-center mt-15">Don't have an account yet? <a href="/signup">Signup</a></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseButton from '@/components/elements/BaseButton.vue'
import BaseInput from '@/components/elements/BaseInput.vue'
import { auth } from '@/firebase/firebase'

interface LoginFormData {
  email: string;
  password: string;
}

@Component({
  components: {
    BaseButton,
    BaseInput
  }
})

export default class LoginForm extends Vue {
  private loginFormData: LoginFormData = {
    email: '',
    password: ''
  };

  login ():void {
    auth.signInWithEmailAndPassword(this.loginFormData.email, this.loginFormData.password)
      .then(() => {
        this.$router.push({ path: '/dashboard' })
      })
      .catch((e) => {
        console.error(e)
      })
  }
}
</script>

<style lang="scss">
.login-form {
  background: $color-white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 35px;
  max-width: 400px;
  margin: auto;
  box-shadow: 0px 1px 7px 2px rgba($color-primary, 0.2);
}
</style>
