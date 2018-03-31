//const auth = require('./Auth').Auth

export const Headers = {
  getHeaderToken: () => {
    //const user = auth.getUser()
    return { 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        //'x-access-token': user.token
      }
    }
  }
}