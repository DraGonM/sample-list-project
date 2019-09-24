console.log('process.env.CONFIG_ENV:', process.env.CONFIG_ENV)
const Config: string = process.env.CONFIG_ENV === 'production' ? 'localhost:57777/api' : 'localhost:57777/api'

function handleErrors(response: Response) {
  if (response.ok)
    return response

  throw new Error(`[${response.status}] ${response.statusText}`)  
}

const fetcher = {
  get: (url: string) =>
    fetch(`${Config}${url}`, {
      credentials: 'include',
    })
      .then(handleErrors)
      .then(response => response.json()),

  post: (url: string, data: any) =>
    fetch(`${Config}${url}`, {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      }),
      method: 'POST',
    })
      .then(response => handleErrors(response))
      .then(response => response.json()),

  put: (url: string, data: any) =>
    fetch(`${Config}${url}`, {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      }),
      method: 'PUT',
    })
      .then(handleErrors)
      .then(response => response.json()),

  delete: (url: string, data?: any) =>
    fetch(`${Config}${url}`, {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      }),
      method: 'DELETE',
    })
      .then(handleErrors)
      .then(response => response.json()),
}

export default fetcher
