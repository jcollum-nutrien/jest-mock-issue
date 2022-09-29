export class Logger {
  private logLevel: string;
  constructor(level:string ) {
    this.logLevel = level || 'info'
  }
  info (msg: string) {
    console.info(msg)
  }
}