// declare in globall space
declare global {
  namespace NodeJS {
    // js objects in the global namespace.
   interface ProcessEnv {
        APIKEY: string;
        AUTHDOMAIN: string;
        PROJECTID: string;
        STORAGEBUCKET: string;
        MESSAGINGSENDERID: string;
        APPID: string;
    }
  }
}
// convert the file to module
export {};
