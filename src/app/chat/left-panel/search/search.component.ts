import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import { DbService } from 'src/app/services/db.service';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private dbService: DbService,
    private fb: FormBuilder,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
    });

    // this.searchForm.controls['search'].valueChanges.debounceTime(300);
  }

  onSearch() {
    this.dbService
      .searchUser(this.searchForm.value.search)
      .pipe(debounceTime(1000))
      .subscribe((res) => {
        console.log(res);
        this.chatService.userSearch$.next(res);
      });
  }

  onCancelSearch() {
    this.chatService.userSearch$.next([]);
    this.searchForm.reset();
  }
}
