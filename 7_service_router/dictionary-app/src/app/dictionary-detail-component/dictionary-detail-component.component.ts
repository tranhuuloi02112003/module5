import {Component, OnInit} from '@angular/core';
import {IWord} from '../../model/iword';
import {DictionaryServiceService} from '../../service/dictionary-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  iWord: IWord;

  // tslint:disable-next-line:variable-name
  constructor(private _dictionaryService: DictionaryServiceService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.iWord = this._dictionaryService.findByIWord(this._activatedRoute.snapshot.params.word);
  }

}
