export type SortBy = 'best' | 'price' | 'duration' | 'stops';

export interface Filter {
  filterStops?: number[];
  filterAirlines?: string[];
}

export interface Params {
  origin: string;
  destination: string;
  leaveDate: string;
  returnDate?: string;
  numberOfAdults: string;
  numberOfChildren: string;
  page: string;
  sortBy?: SortBy;
  selectedFlightKey?: string;
  filter?: Filter;
}

export interface SearchPaylod {
  origin: string;
  destination: string;
  leaveDate: string;
  returnDate?: string;
  numberOfAdults: string;
  numberOfChildren: string;
}

export interface Flights {
  originAirportFullName: string;
  originAirportCode: string;
  destinationAirportFullName: string;
  destinationAirportCode: string;
  carrierFullName: string;
  carrierCode: string;
  OperatingAirlineCompanyName: string;
  leaving: string;
  arriving: string;
  arriveDateTime: string;
  departDateTime: string;
  carrierImage: string;
  flightNumber: number;
  actualFlightTime: number;
}

export interface Itinerary {
  flightKey: string;
  carrier: string;
  origin: string;
  destination: string;
  inDuration: number;
  outDuration: number;
  inFlights: Flights[];
  outFlights: Flights[];
  startDateTime: string;
  endDateTime: string;
  destinationGeoname: {
    City: string;
    Name: string;
  };
  originGeoname: {
    City: string;
    Name: string;
  };
}

export interface Legs {
  directions: string;
  cost: {
    price: number;
  };
  itinerary: Itinerary;
}
