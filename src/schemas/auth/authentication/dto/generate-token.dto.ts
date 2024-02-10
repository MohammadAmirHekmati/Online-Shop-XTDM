import {RolesEnum} from "../../user/enum/role.enum";

export class GenerateTokenDto {
    userId:string
    roles:RolesEnum[]
}