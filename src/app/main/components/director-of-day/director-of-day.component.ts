import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Component({
  selector: 'app-director-of-day',
  templateUrl: './director-of-day.component.html',
  styleUrls: ['./director-of-day.component.scss']
})
export class DirectorOfDayComponent implements OnInit {

  public infoDirector: InfoDirector;
  public id: string;

  constructor(private getDataService: GetDataService) { }

  get currentLanguage(): BehaviorSubject<string> {
    return this.getDataService.currentLanguage;
  }

  public ngOnInit(): void {
    const date: Date = new Date();
    const index: number = date.getDay();
    this.getDataService.getDataDirectors().subscribe((directors: InfoDirector[]) => {
      this.infoDirector = directors[index];
      this.id = this.infoDirector.id;
    });
  }
}
