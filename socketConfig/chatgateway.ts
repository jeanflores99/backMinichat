/* eslint-disable prettier/prettier */
import { WebSocketGateway } from '@nestjs/websockets';
//Inicializamos el socket con el nombre y el puerto
@WebSocketGateway(3333, { namespace: 'chat' })
export class ChatGateway {}
