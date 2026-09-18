import { Controller, Get } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
  @Get()
  findAll() {
    return ['Ticket 1', 'Ticket 2', 'Ticket 3'];
  }
}
