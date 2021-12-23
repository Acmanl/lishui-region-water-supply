import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout>
          <a-layout-sider>Sider</a-layout-sider>
          <a-layout-content>Content</a-layout-content>
        </a-layout>
      </a-layout>
    )
  }
})
