//possible log levels
export type LogLevels = "debug" | "info" | "warn" | "error";

//central log function
export function log(level: LogLevels, data: any) {
  console.log(`[${level}]`, data);
}
