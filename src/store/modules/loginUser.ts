import { defineStore } from "pinia";
import { LoginUserType } from "@/store/type";
export interface LoginUserStore {
  loginUser: LoginUserType;
}

export const useLoginUser = defineStore("loginUser", {
  state: (): LoginUserStore => ({
    // @ts-expect-error
    loginUser: {}
  }),
  actions: {
    setLoginUser(loginUser: LoginUserType) {
      this.loginUser = loginUser;
    }
  }
});
