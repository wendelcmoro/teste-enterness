import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from '../entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  findAll(
    @Query('sender') sender?: number,
    @Query('receiver') receiver?: number,
  ): Promise<Message[]> {
    return this.messageService.findAll(sender, receiver);
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageService.create(createMessageDto);
  }
}
