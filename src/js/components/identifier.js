export const Identifier = () => {
  const identity = document.querySelector('.identifier')
  const date = new Date()
  identity.innerHTML = `&copy; Joey Robinson ${date.getFullYear()}`
}

Identifier()