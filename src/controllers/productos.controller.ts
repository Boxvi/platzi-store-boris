import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  Res,
} from "@nestjs/common";
import { Response } from "express";
import { ProductosService } from "../services/productos.service";
import { ParseIntPipe } from "../common/parse-int/parse-int.pipe";
import { CreateProductoDto, UpateProductoDto } from "../dtos/producto.dto";

@Controller('productos')
export class ProductosController {

  constructor(private productosService: ProductosService){

  }

  @Get()
  getProductos(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {

    return this.productosService.findAll();


  }

  @Get('/:productoId')
  getProducto (@Param('productoId', ParseIntPipe) productoId: number) {
    return this.productosService.findOne(productoId);
  }


  @Post()
  crearProducto(@Body() payload: CreateProductoDto){
    console.log(payload)
    this.productosService.create(payload);
  }

  @Put(':id')
  actualizarProducto(@Param('id') id:string , @Body() payload: UpateProductoDto){
    return this.productosService.update(+id, payload);
  }

  @Delete(':id')
  eliminarProducto(@Param('id') id:string){
    return this.productosService.delete(+id);
  }


}

