<template>
  <div class="resumeEditor" :class="{htmlMode:enableHtml}" ref="container">
    <div v-if="enableHtml" v-html="result"/>
    <pre v-else>{{result}}</pre>
  </div>
</template>

<script lang="ts">
import marked from 'marked'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ResomeEditor extends Vue {
  @Prop() private markdown!: string
  @Prop() private enableHtml!: boolean

  // computed
  public get result(): string {
    return this.enableHtml ? marked(this.markdown) : this.markdown
  }

  // method
  public goBottom(): void {
    this.changeScrollTop(100000)
  }

  public goTop(): void {
    this.changeScrollTop(0)
  }

  private changeScrollTop(scrollTop: number): void {
    (this.$refs.container as Element).scrollTop = scrollTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (max-width: 500px) {
  .resumeEditor {

  }
}

.htmlMode {
  animation: flip 2s;
}

@keyframes flip {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
