interface ILogger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}
//In the production logger all you want is the warning and the error
class ProductionLogger implements ILogger {
   info(message: string): void{};
  warn(message: string): void{
    console.log(message);
  };
  debug(message: string): void{};
  error(message: string): void{console.log(message)};
}
 class DevelopmentLogger implements ILogger {
   info(message: string): void{console.log(message)};
  warn(message: string): void{
    console.log(message);
  };
  debug(message: string): void{console.log(message)};
  error(message: string): void{console.log(message)};
}
//Creating the Logger Factory 
export class LoggerFactory {
public static createLogger(): ILogger { 
  if (process.env.NODE_ENV === "production") {
      return new ProductionLogger; 
    }                             else {
      return new DevelopmentLogger;
    }
  }
}
