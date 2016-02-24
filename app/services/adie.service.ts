import {Injectable} from 'angular2/core';
import {Adie} from '../models/adie';
import {ADIES} from '../mocks/mock-adies';

@Injectable()

export class AdieService {
	getAdies() { return ADIES; }
}