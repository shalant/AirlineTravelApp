export interface Booking {
    id: number;
    confirmationNumber: number;
    flightId: string;
    passengerId: string;
}

export interface BookingDTO {
    confirmationNumber: number;
    flightId: string;
    passengerId: string;
}
