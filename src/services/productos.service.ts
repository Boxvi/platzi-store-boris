import { Injectable, NotFoundException } from "@nestjs/common";
import { Producto } from "../entitis/producto";
import { CreateProductoDto, UpateProductoDto } from "../dtos/producto.dto";

@Injectable()
export class ProductosService {

  private counterId = 1;


  private productos: Producto[] = [{
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripcion del producto 1",
    precio: 100,
    stock: 10,
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
  },];

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(id: number) {
    const producto = this.productos.find((item) => item.id === id);
    if (!producto) {
      throw new NotFoundException(`Producto #${id} not found`);
    }
    return producto;
  }

  create(payload: CreateProductoDto) {
    this.counterId = this.counterId + 1;
    const newProducto = {
      id: this.counterId,
      ...payload,
    };
    this.productos.push(newProducto);
    return newProducto;
  }

  update(id: number, payload: UpateProductoDto) {
    const producto = this.findOne(id);
    const index = this.productos.findIndex((item) => item.id === id);
    console.log('hola: ' +producto);
    this.productos[index] = {
      ...producto,
      ...payload,
    };
    return this.productos[index];
  }

  delete(id: number) {
    const index = this.productos.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Producto #${id} not found`);
    }
    this.productos.splice(index, 1);
    return true;
  }

}
