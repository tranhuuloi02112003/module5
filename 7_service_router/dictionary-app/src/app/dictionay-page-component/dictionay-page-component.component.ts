import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../../service/dictionary-service.service';
import {IWord} from '../../model/iword';

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {
  iWords: IWord[];

  // tslint:disable-next-line:variable-name
  constructor(private _dictionaryService: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.iWords = this._dictionaryService.findAll();

  }

}
