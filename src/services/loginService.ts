class LoginService {
  login(payload: { username: string; password: string }) {
    setTimeout(() => {
      if (payload.username === "Anurag" && payload.password === "anurag") {
        return true;
      } else {
        return false;
      }
    }, 1000);
  }
  register(payload: { username: string; password: string }) {
    setTimeout(() => {
      if (payload.username === "Anurag" && payload.password === "anurag") {
        return true;
      } else {
        return false;
      }
    }, 1000);
  }
}
export const loginService = new LoginService();
