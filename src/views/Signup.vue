<template>
  <div class="signup">
    <div class="signup-form">
      <h2 class="title text-center mt-0 mb-15">Signup</h2>
      <base-input
        class="mb-15"
        v-model="SignupFormData.email"
        type="text"
      ></base-input>

      <base-input
        class="mb-15"
        v-model="SignupFormData.password"
        type="password"
      ></base-input>

      <base-button theme="primary" @click="submitForm">Signup</base-button>
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
