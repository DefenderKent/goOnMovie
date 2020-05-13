import * as axios from "axios";

const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ff6b4eeb-e771-4422-92ab-0f102d8c578d",
  },
  getHeaderId: "https://social-network.samuraijs.com/api/1.0/auth/me",
});
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instanceAxios
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  // Подписаться на пользователя
  follow(userId) {
    return instanceAxios.post(`follow/${userId}`);
  },
  // Отписаться на пользователя

  unfollow(userId) {
    return instanceAxios.delete(`follow/${userId}`);
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please profileAPI pbject.");
    return profileAPI.getProfile(userId);
  },
};

// export const usersAPIp = {
//   getNews() {
//     return instanceAxios
//       .get(`users?page=${currentPage}&count=${pageSize}`)
//       .then(response => response.data);
//   };
export const profileAPI = {
  getProfile(userId) {
    return instanceAxios.get(`profile/` + userId);
  },
  // получить статус
  getStatus(userId) {
    return instanceAxios.get(`profile/status/` + userId);
  },
  // изменить статус

  updateStatus(status) {
    return instanceAxios.put(`profile/status`, { status: status });
  },
  // добавить фото
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instanceAxios.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  // изменить профиль
  saveProfile(profile) {
    return instanceAxios.put(`profile`, profile);
  },
};
// проверка регистрации
export const authAPI = {
  me() {
    return instanceAxios.get(`auth/me`);
  },
  // войти в систему
  login(email, password, rememberMe = false) {
    return instanceAxios.post(`auth/login`, { email, password, rememberMe });
  },
  // выйти
  logout() {
    return instanceAxios.delete(`auth/login`);
  },
};
export const friendAPI = {
  getFriends() {
    return instanceAxios.get(`users?`).then((response) => response.data);
  },
};
