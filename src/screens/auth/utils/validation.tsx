function validateEmail(email: string) {
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  if (email.trim() === '') {
    return 'E-mail is required'
  }

  if (!emailReg.test(email)) {
    return 'Invalid email address'
  }
  return ''
}

function validatePassword(password: string) {
  if (password.trim() === '') {
    return 'Password is required'
  }

  if (password.length < 6) {
    return 'Password has to be longer than 6 characters'
  }
  return ''
}

export { validateEmail, validatePassword }
