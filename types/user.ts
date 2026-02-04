export interface User {
  id: number,
  name: string,
  email: string,
  address: {
    city: string
  }
}

export interface UserChanges {
  name: string,
  email: string,
  city: string
}