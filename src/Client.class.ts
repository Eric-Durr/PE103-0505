import { connect, Socket } from 'net';

/**
 * # Client Class | Primary parent class
 * manages client connection and command message emission to server
 *
 * ## Features
 * - port | number of port to connect
 *
 * ## Methods
 * - connectToServer() | connects to a server
 */

export default class Server {
  private port: number;

  constructor(port: number) { this.port = port; }

  public connectToServer(): void {
    const connection: Socket = connect({ port: this.port });
    connection.on('data', (dataJSON: Buffer) => {
      console.log(dataJSON.toString());
    });
  }
}
