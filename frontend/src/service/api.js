import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const registerUser = (data) => api.post("/auth/register", data);

export const loginUser = (data) => api.post("/auth/login", data);

export const getMe = () => api.get("/auth/me");

export const getUsers = (params = {}) => api.get("/users", { params });

export const getUser = (id) => api.get(`/users/${id}`);

export const updateUser = (id, data) => api.put(`/users/${id}`, data);

export const deleteUser = (id) => api.delete(`/users/${id}`);
export const getCategories = (params = {}) =>
  api.get("/categories", { params });

export const getCategory = (id) => api.get(`/categories/${id}`);

export const createCategory = (data) => api.post("/categories", data);

export const updateCategory = (id, data) => api.put(`/categories/${id}`, data);

export const deleteCategory = (id) => api.delete(`/categories/${id}`);

export const getProducts = (params = {}) => api.get("/products", { params });

export const getProduct = (id) => api.get(`/products/${id}`);

export const createProduct = (data) => api.post("/products", data);

export const updateProduct = (id, data) => api.put(`/products/${id}`, data);

export const deleteProduct = (id) => api.delete(`/products/${id}`);

export const createOrder = (data) => api.post("/orders", data);

export const getOrders = (params = {}) => api.get("/orders", { params });

export const getOrder = (id) => api.get(`/orders/${id}`);

export const updateOrder = (id, data) => api.put(`/orders/${id}`, data);

export const deleteOrder = (id) => api.delete(`/orders/${id}`);



export default api;
