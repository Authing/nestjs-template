import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path'
import { DateFormatDirective } from './graphql/directives/formatDate';

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
    }),

    GraphQLModule.forRoot({
      cors: false,

      // 加载 src 目录下所有 .graphql 后缀的文件
      typePaths: [path.resolve(__dirname, '**', '*.graphql')],

      // 格式化 @date 字符串
      schemaDirectives: {
        date: DateFormatDirective,
      },

      // 生产环境关闭 debug 选项
      debug: process.env.NODE_ENV !== "prod"
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
