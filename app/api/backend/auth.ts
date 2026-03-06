import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function signup(email: string, password: string) {
  return axios.post(`${API_URL}/signup`, { email, password });
}

export async function verifyOtp(email: string, otp: string) {
  return axios.post(`${API_URL}/verify-otp`, { email, otp });
}

export async function login(email: string, password: string) {
  return axios.post(`${API_URL}/login`, { email, password });
}

export async function getProfile(token: string) {
  return axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

