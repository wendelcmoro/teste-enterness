import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findAll(sender?: number, receiver?: number): Promise<Message[]> {
    const queryBuilder = this.messageRepository.createQueryBuilder('message');

    if (sender !== undefined && receiver !== undefined) {
      queryBuilder
        .where('(message.sender = :sender AND message.receiver = :receiver)')
        .orWhere('(message.sender = :receiver AND message.receiver = :sender)')
        .setParameters({ sender, receiver });
    }

    const messages = await queryBuilder.getMany();

    return messages;
  }

  //   async create(message: Message): Promise<Message> {
  //     return this.messageRepository.save(message);
  //   }

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const newMessage = this.messageRepository.create(createMessageDto);
    return this.messageRepository.save(newMessage);
  }
}
