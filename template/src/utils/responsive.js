window.onresize = () => {
  responsive()
}
const responsive = () => {
  let deviceWidth = document.documentElement.clientWidth
  if (deviceWidth > 750) deviceWidth = 750

  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
}
responsive()
