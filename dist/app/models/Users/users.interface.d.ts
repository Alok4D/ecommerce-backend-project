export declare enum UserRole {
    ADMIN = "admin",
    VENDOR = "vendor",
    CUSTOMER = "customer"
}
export declare enum UserStatus {
    ACTIVE = "active",
    BLOCKED = "blocked",
    SUSPENDED = "suspended"
}
export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    phone?: string;
    address?: string;
    image?: string;
    status?: UserStatus;
    isDeleted?: boolean;
    isVerified?: boolean;
}
//# sourceMappingURL=users.interface.d.ts.map