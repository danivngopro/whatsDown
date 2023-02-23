import jwtDecode from "jwt-decode";
import cookies from "js-cookie";
import { IUser } from "../../interfaces/user";
import { environment } from "../../data/globals";

export class AuthService {
  static getUser = () => {
    // only for react-scripts start
    // if (import.meta.env.MODE === 'development') {
    //   cookies.set(
    //     environment.accessTokenName,
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTY4ODMyNDIwM2ZjNDAwNDM1OTFhYSIsIm5hbWUiOnsiZmlyc3ROYW1lIjoi16DXmdeZ16fXmSIsImxhc3ROYW1lIjoi15DXk9eZ15PXoSJ9LCJkaXNwbGF5TmFtZSI6InQyMzQ1ODc4OUBqZWxsby5jb20iLCJyYW5rIjoibWVnYSIsImpvYiI6Iteo15XXpteXIiwiaWF0IjoxNjI3MTMxNzExLCJleHAiOjIwMDAwMDAwMDB9.yxis0RbaKM9--HPyq34BSZ7QhY8urnyzRo7OpK6GA-4"
    //   );
    // }

    const accessToken = cookies.get(environment.accessTokenName);

    if (!accessToken) {
      AuthService.logout();
      return null;
    }

    const decodedToken = AuthService.parseUserToken(accessToken);

    if (!decodedToken) {
      AuthService.logout();
      return null;
    }
    return decodedToken;
  };

  static logout = () => {
    cookies.remove(environment.accessTokenName);
    window.location.replace(
      `${environment.api.login}?RelayState=${window.location.href}`
    );
  };

  static parseUserToken = (token: string) => {
    try {
      return jwtDecode(token) as IUser & { exp: number; iat: number };
    } catch (error) {
      return null;
    }
  };
}
