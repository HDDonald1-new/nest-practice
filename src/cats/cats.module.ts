import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CatsController } from "./cats.controller";
import { Cat, CatSchema } from "./schemas/cat.schema";
import { CatsService } from "./services/cats-service/cats.service";

@Module({
  imports: [MongooseModule.forFeature([
    {name: Cat.name, schema: CatSchema}
  ])],
  providers: [CatsService],
  controllers: [CatsController]
})

export class CatsModule {

}
