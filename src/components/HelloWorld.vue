<template>
  <div>
    <base-button disabled>button</base-button>
    <base-button theme="danger">button</base-button>
    <base-button theme="success">button</base-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseButton from '@/components/elements/BaseButton.vue'

@Component({
  components: {
    BaseButton
  }
})

export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
