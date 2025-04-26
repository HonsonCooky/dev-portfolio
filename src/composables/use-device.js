import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const isMobile = ref(false)
  const switchCallback = ref(null)

  const checkDevice = () => {
    const wasMobile = isMobile.value
    isMobile.value = window.innerWidth <= 768
    if (wasMobile !== isMobile.value && switchCallback.value) {
      switchCallback.value()
    }
  }

  onMounted(() => {
    checkDevice()
    window.addEventListener('resize', checkDevice)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkDevice)
  })

  const onDeviceSwitch = (callback) => {
    switchCallback.value = callback
  }

  return {
    isMobile,
    onDeviceSwitch,
  }
}
