import { LoggerFactory } from "./factory-class";
//The below tests are we expected that the default logger to be the development logger 
//creating a new Logger 
const logger = LoggerFactory.createLogger(); 
logger.debug("debug message")
logger.warn("warn message")
logger.error("error  message")
logger.info("info message") 

