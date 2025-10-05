export enum UserRole {
  ADMIN = "admin",
  CUSTOMER = "customer",
}

export enum UserStatus {
  ACTIVE = "active",
  BLOCKED = "blocked",
  SUSPENDED = "suspended",
}
export interface IUser {
  _id?: string;                
  name: string;               
  email: string;               // Must be unique and valid email
  password: string;            // Hashed password
  role: UserRole;              // Role-based access control
  status?: UserStatus;
}
