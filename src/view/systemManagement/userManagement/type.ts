export interface SearchParams {
  pageSize: number;
  pageNum: number;
  userName: string;
  address: string;
}
export interface TableData {
  age: number;
  userId: number | "";
  userName: string;
  sex: string;
  identityCard: string;
  email: string;
  address: string;
  status: 0 | 1 | Boolean | "";
  createTime: string;
}
export interface AddAndUpdateFormParams {
  age: number;
  userId: number | "";
  userName: string;
  sex: string;
  identityCard: string;
  email: string;
  address: string;
  status: 0 | 1 | Boolean | "";
  createTime: string;
}
