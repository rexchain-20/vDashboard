
export const AppInfo = {
  AppName: "vDashboard",
  AppDeveloper: "ifollowyou-hub",
  GithubLink: "https://github.com/ifollowyou-hub/vDashboard"
};

const api = "/api"
const apiAuthBase = api + "/auth"

export const ApiBook = api + "/books"
export const ApiCategory = api + "/categories"
export const ApiFormat = api + "/formats"

export const apiAuth = {
  LoginStatus: apiAuthBase + "/loginStatus",
  LoginAccount: apiAuthBase + "/loginAccount",
  Login: apiAuthBase + "/login",
  Logout: apiAuthBase + "/logout"
}