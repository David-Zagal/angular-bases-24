import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
})
export class ListComponent {

	@Input()
	public characterList: Character[] = [
		{
			name: 'Trunks',
			power: 10
		}
	];

	@Output()
	public onDeleteCharacterById = new EventEmitter<string> ();
	// public onDelete: EventEmitter<number> = new EventEmitter ();

	onDeleteById (id?: string): void {
		if (!id) return;
		this.onDeleteCharacterById.emit (id);
	}
}