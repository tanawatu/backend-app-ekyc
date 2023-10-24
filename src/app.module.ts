import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EkycModule } from './ekyc/ekyc.module';

@Module({
  imports: [EkycModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
