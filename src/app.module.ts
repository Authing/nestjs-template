import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

function getEnvFile() {
  switch (process.env.NODE_ENV) {
    case "development":
      return "configs/.env.dev"
    case "prod":
      return "configs/.env.prod"
    case "test":
      return "configs/.env.test"
    default:
      return "configs/.env.dev"
  }
}

@Module({
  imports: [
    // NestJS Config Module: https://docs.nestjs.com/techniques/configuration
    ConfigModule.forRoot({

      // 如果有多个配置文件, 在前面的会被优先使用
      envFilePath: [getEnvFile(), 'configs/.env.base'],

      // 设置为全局，这样其他 Module 就不需要再次引入
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
