
export const validateText = (text) => {
  const withoutSpaces = text.trim()
  return withoutSpaces.length > 5 ? true : false
}

export const validateEmail = (email) => {
  const withoutSpaces = email.trim()
  const regex = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)
  return regex.test(withoutSpaces) ? true : false
}