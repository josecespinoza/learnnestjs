import { IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    //each : true; indicates that the array is a set of values
    @IsString({each : true})
    readonly flavors: string[];
}
