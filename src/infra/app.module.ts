import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './database/prisma/prisma.service'
import { envSchema } from './env/env'
import { HttpModule } from './http/http.module'
import { EnvModule } from './env/env.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
    EnvModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
