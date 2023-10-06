import { decryptWithAES, encryptWithAES } from "../util/encryptPassword";

class ClientService {
  user: any = null;
  rememberMe: any = null;
  constructor() {
      const ISSERVER = typeof window !== "undefined";
      if (ISSERVER) {
          const token = localStorage.getItem("token");
          const rememberMe: any = localStorage.getItem("rememberMe")
          switch (true) {
            case !!token:
                this.user = {
                    token: token
                }
            case !!rememberMe:
                const rememberMeParse = JSON.parse(rememberMe)
                const decriptRememberMe = {
                    isCheckRemember: rememberMeParse ? rememberMeParse.isCheckRemember : false,
                    username: rememberMeParse ? rememberMeParse.username : "",
                    password: rememberMeParse ? decryptWithAES(rememberMeParse.password) : ""
                }
                this.rememberMe = {
                    ...decriptRememberMe
                }
          }
      }
  }

  getUser() {
      return this.user;
  }
  getRememberMe() {
    return this.rememberMe;
  }

  setUser(newUser: any) {
      if (this.user === newUser) return;
      this.user = newUser;
  }
  setRememberMe(newRememberMe: any) {
    if (this.rememberMe === newRememberMe) return;
    this.rememberMe = newRememberMe
  }
  saveRememberMe(rememberState: any) {
    const encryptRemember = {
        ...rememberState,
        password: encryptWithAES(rememberState.password)
    }
    const jsonRememberMe = JSON.stringify(encryptRemember)
    if( typeof window !== "undefined") {
        localStorage.setItem('rememberMe', jsonRememberMe)
    }
    this.setRememberMe(rememberState)
  }

  unsaveRememberMe() {
    this.setRememberMe(null)
    localStorage.removeItem("rememberMe")
  }

  login(token: string) {
      const loginUser = {
          token: token
      }
      localStorage.setItem('token', token)
      this.setUser(loginUser);
  }

  logout() {
      this.setUser(null);
      localStorage.removeItem('token')
  }

  isAuthenticated() {
      return !!this.user;
  }
  isRemember() {
      return !!this.rememberMe;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ClientService()