<template>
  <div class="styleEditor" ref="container">
    <div class="code" v-html="codeInStyleTag" />
    <pre class="" v-html="highlightedCode" />
  </div>
</template>

<script lang="ts">
import Prism from 'prismjs'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class StyleEditor extends Vue {
  @Prop() private code!: string

  // computed
  public get highlightedCode(): string {
    return Prism.highlight(this.code, Prism.languages.css)
  }

  public get codeInStyleTag(): string {
    return `<style>${this.code}</style>`
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
pre {

}

@media (max-width: 500px) {
  pre {

  }
}

.code {
  display: none;
}
</style>
