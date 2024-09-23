import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css'],
})
export class DbzListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public characterToDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id: string): void {
    this.characterToDelete.emit(id);
  }
}
