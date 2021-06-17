<template>
  <button
    @click="handleClick"
    class="btn"
    :class="computeClasses"
    v-bind="$props">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component({
})

export default class BaseButton extends Vue {
  @Prop(String) private theme: string | undefined;
  @Prop({ default: false }) private disabled!: boolean;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Emit('click') private emitClickEvent (event: MouseEvent) {}

  private handleClick (event: MouseEvent) {
    if (!this.disabled) {
      this.emitClickEvent(event)
    }
  }

  get computeClasses (): Array<string> {
    return [
      `btn-${this.theme || 'primary'}`
    ]
  }
}
</script>

<style lang="scss">
@mixin btn-theme($btn-color) {
  background-color: $btn-color;
  color: $color-white;

  &:hover {
    transition: background-color 0.3s;
    background-color: darken($btn-color, 6%);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba($btn-color, 0.5);
  }
}

@each $color, $value in $theme-colors {
  .btn-#{$color} {
    @include btn-theme($value);
  }
}

.btn {
  border: none;
  padding: 10px;
  border-radius: 3px;
}
</style>
