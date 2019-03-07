export const Identifier = () => {
  const identity = document.querySelector('.identifier')
  const date = new Date()
  identity.innerHTML = `&copy; <a href="mailto:joeyrobinsondev@gmail.com">Joey Robinson</a> ${date.getFullYear()}`
}

Identifier()