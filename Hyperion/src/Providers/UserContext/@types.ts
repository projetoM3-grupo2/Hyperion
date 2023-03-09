export interface IDefaultProvidersProps {
  children: React.ReactNode;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  age: number;
  id: number;
  isAdmin: boolean;
  cart: any[];
  paymentData: any[];
}

export interface IUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  age: number;
}

export interface IUserContext {
  userRegister: (data: IUserRegister) => Promise<void>;
  userLogin: (formData: IUser) => Promise<void>;
  userLogout: () => void;
<<<<<<< HEAD
  user: IUser | null
=======
  
>>>>>>> 9afb6e5534e1475a28fd897a3cce7a932ee9d8fb
}
