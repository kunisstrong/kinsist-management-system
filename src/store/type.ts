export interface Itab {
  path: string;
  title: string;
}
export interface LoginUserType {
  userId: number;
  userName: string;
  password: string;
  sex: string;
  age: number;
  idCard: string;
  email: string;
  address: string;
  status: 0 | 1;
  createTime: string;
}
