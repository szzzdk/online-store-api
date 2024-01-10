import { IsIn, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string
    @IsString()
    phoneNumber: string
    @IsString()
    @IsIn(['WhatsApp', 'Telegram', 'Call'])
    contactMethod: string
}
