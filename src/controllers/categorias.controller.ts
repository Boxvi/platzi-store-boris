import { Controller, Get, Param } from "@nestjs/common";

@Controller("categorias")
export class CategoriasController {

  @Get(":categoriasId")
  getCategorias(@Param("categoriasId") categoriasId: any) {
    return `categoria ` + categoriasId + "soy una categoria";
  }

}
