import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public onNewCharacter(character: Character): void {
    const newCHaracter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCHaracter);
  }

  public characterToDelete(id: string): void {
    this.characters = this.characters.filter((c) => c.id !== id);
  }
}
