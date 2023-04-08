import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasController } from './controllers/categorias.controller';
import { ProductosController } from './controllers/productos.controller';
import { ProductosService } from './services/productos.service';
import { CategoriasService } from './services/categorias.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriasController, ProductosController],
  providers: [AppService, ProductosService, CategoriasService],
})
export class AppModule {}
