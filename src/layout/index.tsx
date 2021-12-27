import { defineComponent } from 'vue'
import { SideBar, AppMain, TopBar } from './components'

export default defineComponent({
  setup() {
    return () => (
      <div class='app-wrapper'>
        <TopBar></TopBar>
        <transition name='fade-transform' mode='out-in'>
          <SideBar class='sidebar-container' />
        </transition>
        <div class='main-container'>
          <AppMain />
        </div>
      </div>
    )
  }
})
