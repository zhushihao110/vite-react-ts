const myEvent = new CustomEvent('zsh')
window.addEventListener('zsh', () => {
  console.log('触发自定义事件')
})
function clickMy() {
  console.log('ad')
  window.dispatchEvent(myEvent)
}
