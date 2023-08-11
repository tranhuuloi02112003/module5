import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  iWords: IWord [] = [
    {word: 'dog', mean: 'con chó'},
    {word: 'monkey', mean: 'con khỉ'},
    {word: 'pig', mean: 'con heo'},
    {word: 'panda', mean: 'con gấu'},
    {word: 'mouse', mean: 'con chuột'},
    {word: 'cat', mean: 'con mèo'}
  ];

  findAll(): IWord[] {
    return this.iWords;
  }

  findByIWord(word: string): IWord {
    return this.iWords.find(obj => obj.word === word);
  }

  constructor() {
  }
}
