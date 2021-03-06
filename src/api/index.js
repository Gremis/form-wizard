const user = {
  email: 'john@travolta.io',
  password: '123456',
  name: 'John'
}

export const checkIfUserExistsInDB = email => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === user.email) {
          resolve(true)
        } else {
          reject('usuário não encontrado')
        }
      }, 1000)
  })
}

export const authenticateUser = (email, password) => {
  return new Promise((resolve, reject) => {
    console.log(email === user.email && password === user.password)
    setTimeout(() => {
      if (email === user.email && password === user.password) {
        resolve({
          email: user.email,
          name: user.name
        })
      } else {
        reject('as credenciais fornecidas não correspondem a nenhum usuário')
      }
    }, 1000)
  })
}

export const postFormToDB = (form) => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(form), 1000)
  })
}