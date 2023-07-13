import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { CompaniesModule } from './companies/companies.module';


@Module({
  
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
  imports: [
    MongooseModule.forRootAsync({
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGODB'),
      connectionFactory: (connection) => {
        connection.plugin(softDeletePlugin);
        return connection;
        }
    }),
    inject: [ConfigService],
  }),
    ConfigModule.forRoot({isGlobal:true}),
    UsersModule,
    AuthModule,
    CompaniesModule
  ]
})
export class AppModule {}
