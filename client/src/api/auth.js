import axios from 'axios';

const API = 'hhtp://localhost:4000/api'

export const registerRequest = user => axios.post(`${API}/register`, user)