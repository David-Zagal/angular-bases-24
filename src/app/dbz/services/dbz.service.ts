import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

	public characters: Character[] = [
		{
			id: uuid (),
			name: 'Krilin',
			power: 1000
		},
		{
			id: uuid (),
			name: 'Goku',
			power: 9500
		},
		{
			id: uuid (),
			name: 'Vegeta',
			power: 7500
		}
	];

	addCharacter (character: Character): void {
		const newCharacter: Character = { ...character, id: uuid () };
		// const newCharacter: Character = { id: uuid (), ...character };
		// const newCharacter: Character = {
		// 	id: uuid (),
		// 	name: character.name,
		// 	power: character.power
		// };
		this.characters.push (newCharacter);
	}

	deleteCharacterById (id: string): void {
		this.characters = this.characters.filter (character => character.id !== id);
	}
	// onDeleteCharacter (id: number): void {
	// 	this.characters.splice (id, 1);
	// }
}