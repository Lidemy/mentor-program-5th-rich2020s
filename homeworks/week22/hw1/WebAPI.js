const Base_URL = 'https://student-json-api.lidemy.me'

export async function getPosts() {
  const res = await fetch(
    `${Base_URL}/posts?_sort=createdAt&_order=desc&_limit=5`
  )
  console.log(res.json())
}
export async function SignUp(nickname, username, password) {
  let res
  let json
  try {
    res = await fetch(`${Base_URL}/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        nickname,
        username,
        password
      })
    })
    json = await res.json()
  } catch (err) {
    return {
      ok: 0,
      message: err.toString()
    }
  }
  if (Object.keys(json).length !== 0) return json
  if (res.ok) return json
  else {
    return {
      ok: 0,
      message: res.status
    }
  }
}
export async function login(username, password) {
  let res
  let json
  try {
    res = await fetch(`${Base_URL}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    json = await res.json()
  } catch (err) {
    return {
      ok: 0,
      message: err.toString()
    }
  }
  if (Object.keys(json).length !== 0) return json
  if (res.ok) return res.json()
  else {
    return {
      ok: 0,
      message: res.status
    }
  }
}
export async function getMe() {
  const userToken = localStorage.getItem('user_token')
  let res
  let json
  try {
    res = await fetch(`${Base_URL}/me`, {
      headers: {
        authorization: `Bearer ${userToken}`
      }
    })
    json = res.json()
  } catch (err) {
    return {
      ok: 0,
      message: err.toString()
    }
  }
  if (Object.keys(json).length !== 0) return json
  if (res.ok) return json
  else {
    return {
      ok: 0,
      message: res.status
    }
  }
}
export async function addPost(title, body) {
  const userToken = localStorage.getItem('user_token')
  let res
  let json
  try {
    res = await fetch(`${Base_URL}/posts`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${userToken}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title,
        body
      })
    })
    json = res.json()
  } catch (err) {
    return {
      ok: 0,
      message: err.toString()
    }
  }
  if (Object.keys(json).length !== 0) return json
  if (res.ok) return json
  else {
    return {
      ok: 0,
      message: res.status
    }
  }
}

export async function getSinglePost(id) {
  let res
  let json
  try {
    res = await fetch(`${Base_URL}/posts?id=${id}`)
    json = await res.json()
  } catch (err) {
    return {
      ok: 0,
      message: err.toString()
    }
  }
  if (Object.keys(json).length !== 0) return json
  if (res.ok) return json
  else {
    return {
      ok: 0,
      message: res.status
    }
  }
}
export async function getThatPage(page) {
  let res
  try {
    res = await fetch(
      `${Base_URL}/posts?_page=${page}&_sort=createdAt&_order=desc&_limit=5`
    )
  } catch (err) {
    return {
      ok: 0,
      message: err.toString()
    }
  }
  if (res.ok) return res
  else {
    return {
      ok: 0,
      message: res.status
    }
  }
}
