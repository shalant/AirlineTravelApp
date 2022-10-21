export interface Flight {
    id: number;
    flightNumber: number;
    departureDate: string;
    arrivalDate: string;
    departureTime: string;
    arrivalTime: string;
    departureAirport: string;
    arrivalAirport: string;
    passengerLimit: number;
}

export interface FlightDTO {
    flightNumber: number;
    departureDate: string;
    arrivalDate: string;
    departureTime: string;
    arrivalTime: string;
    departureAirport: string;
    arrivalAirport: string;
    passengerLimit: number;
}






//      demo for typed parameters
//     //getPlaylist: (arg1: number) => void;

//     // demo for overloaded interface
//     // (song: Song): SongDTO;
//     // (song: SongDTO): SongDTO;
//     // (song: string[]): string;

//     // you can define getters for a property
//     get title(): string;

// }




// interface SongDTO {
//     title: string;
//     get artistName(): string;
// }

// export interface SongDTO2 extends SongDTO {};

// export class SongDTO2 implements SongDTO2 {
//     constructor(public title: string) {
//         this.title = title;
//     }
//     get get artistName(): string {
//         (return this.title)
//     }
// }

// // generics demo
// interface Response<T> {
//     data: T;
//     message: string;

// }

// class ActionResponse implements Response<Song> {
//     constructor(public data: Song, public message: string) {}
// }

// class Shape<Type> {
//     constructor(public shapeDefinition: Type) {}
// }

// class Vehicle {
//     // declare some propertires
//     // you are allowed to set properties similar to C#
//     model!: string;
//     private make!: string;
//     year!: number;
//     #color!: string;
//     tires: number = 4;

//     constructor(public name: string) {}

//     static create(name: string): Vehicle {
//         return new Vehicle(name);
//     }

    
//     }
//     class Car extends Vehicle {
//         constructor(name: string) {
//             super(name);
//         }
// }

// abstract class AShape {
//     abstract area(): number;
//     log(msg: string): void {
//         console.log(msg);
//     }
// }

// class Square extends AShape {
//     constructor(public length: number) {
//         super();
//     }
//     area(): number {
//         return this.length * this.length;
//         this.log(`Square area ${this.length * this.length}`)
//     }
// }

// // type definition
// type FlightDetailsProps = {
//     flightNumber: number;
//     departure: string;
//     arrival: string;
// }

// type MyNewString = string;

// let value2: unknown