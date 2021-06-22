<template>
<div class="dashboard">
  <app-header />
  <div>User is logged in</div>
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AppHeader
  }
})
export default class Dashboard extends Vue {}
</script>

<style lang="scss">
.dashboard {
  padding-top: 100px;
}
</style>
