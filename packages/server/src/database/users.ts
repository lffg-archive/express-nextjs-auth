export interface User {
  id: number;
  username: string;
  password: string;
  age: number;
}

export const usersDb: User[] = [
  { id: 1, username: 'Foo', password: '123', age: 10 },
  { id: 2, username: 'Bar', password: '456', age: 20 },
  { id: 3, username: 'Baz', password: '789', age: 30 }
];
