import userService from '@/utils/userService';
import storageService from '../../service/storageService';

const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: JSON.parse(storageService.get(storageService.USER_INFO)),
  },
  mutations: {
    SET_TOKEN(state, token) {
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token);
      // 更新state
      state.token = token;
    },
    SET_USERINFO(state, userInfo) {
      // 更新本地缓存
      storageService.set(storageService.USER_INFO, JSON.stringify(userInfo));
      // 更新state
      state.userInfo = userInfo;
    },
  },

  actions: {
    register(context, { name, telephone, password }) {
      return new Promise((resolve, reject) => {
        userService.register({ name, telephone, password }).then((res) => {
          // 保存token
          context.commit('SET_TOKEN', res.data.data.token);
          return userService.info();
        }).then((res) => {
          // 保存用户信息
          context.commit('SET_USERINFO', res.data.data.user);
          // 跳转主页
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};

export default userModule;
