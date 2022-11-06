import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
// @WebSocketGateway(3334, { namespace: 'chat' })
@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  //Nos suscribimos
  @SubscribeMessage('message')
  // destructuramos con messsageBoy
  handleMessage(@MessageBody() message: string): void {
    console.log(message);
    //Volvemos a emitir el mensaje
    this.server.emit('message', message);
  }
}
