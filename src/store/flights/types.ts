import { Legs, Params } from '../../shared/interfaces/flights';

export interface LegsState {
  legs: Legs[] | null | [];
  loading: boolean;
  error: Error | null | string;
  params: Params | null;
}