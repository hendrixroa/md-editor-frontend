export const Validator = {
  validateEmail: (email) => {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexEmail.test(email)
  },
  passwordLength: (password) => {
  	return password.length > 8
  },
  validateLengthPost: (post) => {
    return post.length > 60
  }
}