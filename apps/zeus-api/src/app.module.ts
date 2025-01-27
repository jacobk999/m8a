import { Module } from '@nestjs/common'
import {
  GraphQLModule,
  RefreshModule,
  TypegooseModule,
  UserModule,
  AuthModule,
  CacheModule,
  M8aConfigModule
} from '@m8a/core'
import { LoggerModule, OgmaModuleConfig } from '@m8a/logger'
import { OgmaModule } from '@ogma/nestjs-module'

@Module({
  imports: [
    M8aConfigModule,
    RefreshModule,
    LoggerModule,
    CacheModule,
    AuthModule,
    GraphQLModule,
    TypegooseModule,
    UserModule,
    OgmaModule.forRootAsync({
      useClass: OgmaModuleConfig
    })
  ],
  providers: []
})
export class AppModule {}
