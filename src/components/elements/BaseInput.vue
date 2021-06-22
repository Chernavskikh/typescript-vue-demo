<template>
  <input
    class="input"
    :value="value"
    @input="onInputChange"
    v-bind="$props"/>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component({
})

export default class BaseInput extends Vue {
  @Prop({ required: true }) private value!: string | number;
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: 'text' }) private type!: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Emit('input')
  onInputChange (e:{ target: HTMLInputElement }): string | number | null {
    return e.target.value
  }
}
</script>

<style lang="scss">
.input {
  border: 1px solid $color-grey;
  padding: 10px;
  border-radius: 3px;

  &:focus {
    border-color: $color-primary;
    outline: none;
  }
}
</style>
