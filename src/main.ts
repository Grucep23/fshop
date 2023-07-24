import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from 'path'
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { TransformInterceptor } from './core/transform.interceptor';
import cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';




async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new TransformInterceptor(reflector));

  app.useGlobalGuards( new JwtAuthGuard(reflector));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.setViewEngine('ejs');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  //config cookies
  app.use(cookieParser());

  //config cors
  app.enableCors(
    {
      "origin": true,
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204,
      credentials: true
    }
  );

  //config verioning
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1','2'],//v1,v2
  });
//config swagger
const config = new DocumentBuilder()
.setTitle('APIs Document')
.setDescription('All module APIs')
.setVersion('1.0')
.addBearerAuth(
  {
    type: 'http',
    scheme: 'Bearer',
    bearerFormat: 'JWT',
    in: 'header',
  },
  'token',
)
.addSecurityRequirements('token')
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document, {
swaggerOptions: {
  persistAuthorization: true,
}
});

await app.listen(configService.get<string>('PORT'));
}
bootstrap();
