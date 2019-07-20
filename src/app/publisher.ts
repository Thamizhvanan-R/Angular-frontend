import { Client } from './client';

export interface Publisher {
  Clients:Client[];
  subscribe(client:Client):Boolean;
  unsubscribe(client:Client):Boolean;
  publish();
}