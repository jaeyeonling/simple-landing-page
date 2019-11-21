<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle" />
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import data from '@/Data'
import ResumeEditor from '@/components/ResumeEditor.vue'
import StyleEditor from '@/components/StyleEditor.vue'

@Component({
  components: {
    StyleEditor,
    ResumeEditor,
  },
})
export default class App extends Vue {
  private interval: number = 1
  private currentStyle: string = ''
  private enableHtml: boolean = false
  private currentMarkdown: string = ''

  public created(): void {
    this.makeResume()
  }

  private async makeResume(): Promise<void> {
    await this.progressivelyShowStyle(0)
    await this.progressivelyShowResume()
    await this.progressivelyShowStyle(1)
    await this.showHtml()
    await this.progressivelyShowStyle(2)
  }

  private showHtml(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.enableHtml = true
      return resolve()
    })
  }

  private progressivelyShowStyle(n: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const interval: number = this.interval
      const showStyle = (async () => {
        const style = data.fullStyle[n]
        if (!style) {
          return
        }

        const length = data.fullStyle.filter((_, index) => index <= n)
          .map(item => item.length)
          .reduce((p, c) => p + c, 0)

        const prefixLength = length - style.length
        if (this.currentStyle.length < length) {
          const l = this.currentStyle.length - prefixLength

          this.currentStyle += style.substring(l, l + 1) || ' '

          if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
            this.$nextTick(() => (this.$refs.styleEditor as StyleEditor).goBottom())
          }
          setTimeout(showStyle, interval)
        } else {
          return resolve()
        }
      }).bind(this)

      showStyle()
    })
  }

  private progressivelyShowResume(): Promise<void> {
    return new Promise((resolve, reject) => {
      const length = data.fullMarkdown.length
      const interval = this.interval

      const showResume = () => {
        if (this.currentMarkdown.length < length) {
          this.currentMarkdown = data.fullMarkdown.substring(0, this.currentMarkdown.length + 5)

          const lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
          const prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]

          if (prevChar === '\n' && this.$refs.resumeEditor) {
            this.$nextTick(() => (this.$refs.resumeEditor as ResumeEditor).goBottom())
          }

          setTimeout(showResume, interval)
        } else {
          return resolve()
        }
      }

      showResume()
    })
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}
</style>
