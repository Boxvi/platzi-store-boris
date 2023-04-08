import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";


export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly precio: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}


export class UpateProductoDto  extends PartialType(CreateProductoDto){}
