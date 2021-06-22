<template>
  <div class="signup">
    <div class="signup-form">
      <h2 class="title text-center mt-0 mb-15">Signup</h2>
      <base-input
        placeholder="Email"
        class="mb-15"
        v-model="SignupFormData.email"
        type="text"
      ></base-input>

      <base-input
        placeholder="Password"
        class="mb-15"
        v-model="SignupFormData.password"
        type="password"
      ></base-input>

      <base-button theme="primary" @click="submitForm">Signup</base-button>

      <p class="mt-15 text-center">Already have an account? <a href="/">Login</a></p>
    </div>
  </div>
</template>

<script lang="ts">
import { auth } from '@/firebase/firebase'
import { Component, Vue } from 'vue-property-decorator'
import BaseButton from '@/components/elements/BaseButton.vue'
import BaseInput from '@/components/elements/BaseInput.vue'

interface SignupFormData {
  email: string;
  password: string;
}

@Component({
  components: {
    BaseButton,
    BaseInput
  }
})

export default class Signup extends Vue {
  private SignupFormData: SignupFormData = {
    email: '',
    password: ''
  };

  submitForm ():void {
    auth.createUserWithEmailAndPassword(this.SignupFormData.email, this.SignupFormData.password)
      .then(() => {
        this.$router.push({ path: '/dashboard' })
      })
  }
}
</script>

<style lang="scss">
.signup {
  display: flex;
  min-height: 100vh;
  align-items: flex-start;
  padding-top: 20vh;
  position: relative;

  &::after {
    content: '';
    background: url('../assets/images/footer-notes.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 60%;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    min-height: 340px;
    filter: brightness(0.9);
  }
}

.signup-form {
  margin: 0 auto;
  width: 100%;
  background: $color-white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 35px;
  max-width: 400px;
  box-shadow: 0px 1px 7px 2px rgba($color-primary, 0.2);
}
</style>
