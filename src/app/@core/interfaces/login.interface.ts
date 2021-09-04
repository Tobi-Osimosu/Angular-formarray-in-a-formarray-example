export interface LoginResponseData {
  isSuccess: boolean;
  message: string;
  token: {
    expiresIn: number;
    accessToken: string;
  };
}
