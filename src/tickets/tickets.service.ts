import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketsService {
  private readonly tickets = [
    {
      id: 1,
      title: 'Ticket 1',
      description: 'Description for Ticket 1',
    },
    {
      id: 2,
      title: 'Ticket 2',
      description: 'Description for Ticket 2',
    },
    {
      id: 3,
      title: 'Ticket 3',
      description: 'Description for Ticket 3',
    },
  ];

  findAll() {
    return this.tickets;
  }
}
