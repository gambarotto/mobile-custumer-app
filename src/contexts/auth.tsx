import React, { createContext, useState } from 'react';
import api from '../services/api';

interface IUser {
  id: number;
  name: string;
  email: string;
}
interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  signIn(data: ILogin): Promise<void>;
}
interface ILogin {
  email: string;
  password: string;
}
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  async function signIn(data: ILogin) {
    try {
      const response = await api.post('/sessions', {
        email: data.email,
        password: data.password,
      });
      setUser(response.data.user);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
