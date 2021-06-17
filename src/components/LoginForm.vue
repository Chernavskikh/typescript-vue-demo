<template>
  <div class="login-form">
    <h2 class="title text-center mt-0 mb-15">Welcome Back</h2>
    <base-input
      class="mb-15"
      v-model="loginFormData.login"
      type="text"
    ></base-input>

    <base-input
      class="mb-15"
      v-model="loginFormData.password"
      type="password"
    ></base-input>

    <base-button theme="primary">Login</base-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseButton from '@/components/elements/BaseButton.vue'
import BaseInput from '@/components/elements/BaseInput.vue'

interface LoginFormData {
  login: string;
  password: string;
}

@Component({
  components: {
    BaseButton,
    BaseInput
  }
})

export default class LoginForm extends Vue {
  private inputValue = ''

  private loginFormData: LoginFormData = {
    login: '',
    password: ''
  };
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
