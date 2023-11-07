import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    CommentsModule,
    MongooseModule.forRoot(
      'mongodb+srv://harrie:Harrieson@cluster0.6uiej.mongodb.net',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
