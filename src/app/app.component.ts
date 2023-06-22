import { Component } from '@angular/core';
import { ProClimber } from './models/pro-climber';
import { ProClimberService } from './services/pro-climber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ClimberApp';
  climbers: ProClimber[] = [];
  climberToEdit: ProClimber | undefined;

constructor(private proClimberService: ProClimberService) {}

ngOnInit(): void {
  this.proClimberService.getProClimbers().subscribe((result: ProClimber[]) => {
    this.climbers = result;
  });
}

updateClimberList(climbers: ProClimber[]) {
  this.climbers = climbers;
}

initNewClimber() {
  this.climberToEdit = new ProClimber();
}

editClimber(climber: ProClimber) {
  this.climberToEdit = climber;
}
}


