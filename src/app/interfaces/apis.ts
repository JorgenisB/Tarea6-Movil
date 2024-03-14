/* eslint-disable @typescript-eslint/naming-convention */
export interface ApisGender {
    gender: string;
  }
  
  export interface ApisAge {
    age: number;
  }
  
  export interface ApisUniversidades {
    domains: string[];
    web_pages: string[];
    name: string;
  }
  
  export interface ApisTime {
    current_weather: {
      temperature: any;
      weathercode: number;
    };
  }
  
  