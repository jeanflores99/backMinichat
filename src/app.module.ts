import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Modules } from './modules/modules.module';
import { Providers } from '../providers/provider.module';
import { ChatGateway } from '../socketConfig/chatgateway';
@Module({
  imports: [Modules],
  controllers: [AppController],
  providers: [AppService, Providers, ChatGateway],
})
export class AppModule {}
