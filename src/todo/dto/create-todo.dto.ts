import {
    IsAlphanumeric,
    IsBoolean,
    IsNotEmpty,
    MinLength,
} from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    @MinLength(3, { message: "title is too short" })
    @IsAlphanumeric(null, { message: "title must be alphanumeric" })
    title: string;

    @IsNotEmpty()
    @MinLength(3, { message: "description is too short" })
    @IsAlphanumeric(null, { message: "description must be alphanumeric" })
    description: string;

    @IsNotEmpty()
    @IsBoolean()
    isDone: boolean;
}
