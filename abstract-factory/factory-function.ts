 interface ILogger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}
//In the production logger all you want is the warning and the error
const ProductionLogger = (): ILogger => ({
   info(message: string): void{},
  warn(message: string): void{
    console.log(message);
  },
  debug(message: string): void{},
  error(message: string): void{console.log(message)}
})

 const DevelopmentLogger =(): ILogger =>  ({
   info(message: string): void{console.log(message)},
  warn(message: string): void{
    console.log(message);
  },
  debug(message: string): void{console.log(message)},
  error(message: string): void{console.log(message)},
})

//Creating the Logger Factory 
export const createLogger = (): ILogger =>  {
  if (process.env.NODE_ENV === "production") {
      return ProductionLogger(); 
    }                             else {
      return  DevelopmentLogger();
    }
  }
