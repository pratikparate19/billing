export interface User {
    EncUserID?: string,
    UserName?: string,
    Password?: string,
    UserRole?: number,
    UserRoleDesc?: string
    Description?: string,
    CreatedDate?: any
}
export interface UserRole {
    RoleID: number,
    RoleName: string
}