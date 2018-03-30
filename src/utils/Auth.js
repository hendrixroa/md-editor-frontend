export const Auth = {
  getUser: () => {
  	return JSON.parse(sessionStorage.getItem('user'))
  },
  setUser: (objUser) => {
  	sessionStorage.setItem('user', JSON.stringify(objUser))
  },
  logout: () => {
  	sessionStorage.removeItem('user')
  },
  isLoged: () => {
    return sessionStorage.getItem('user') !== null 
  }
}