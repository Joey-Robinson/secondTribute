export const navClose = () => {
  const wowLink = document.getElementById('wowLink')
  const checkbox = document.querySelector('input[type="checkbox"]')
  const ffLink = document.getElementById('ffLink')
  const locationLink = document.getElementById('locationLink')

  wowLink.addEventListener("click", () => {
    if (checkbox.checked) {
      checkbox.checked = false
    }
  })
  ffLink.addEventListener("click", () => {
    if (checkbox.checked) {
      checkbox.checked = false
    }
  })
  locationLink.addEventListener("click", () => {
    if (checkbox.checked) {
      checkbox.checked = false
    }
  })
}

navClose()