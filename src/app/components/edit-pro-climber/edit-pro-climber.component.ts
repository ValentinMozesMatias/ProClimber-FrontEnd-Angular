import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProClimber } from 'src/app/models/pro-climber';
import { ProClimberService } from 'src/app/services/pro-climber.service';

@Component({
  selector: 'app-edit-pro-climber',
  templateUrl: './edit-pro-climber.component.html',
  styleUrls: ['./edit-pro-climber.component.css']
})
export class EditProClimberComponent implements OnInit{
@Input() climber?: ProClimber;
@Output() climbersUpdated = new EventEmitter<ProClimber[]>();

constructor (private proClimberService: ProClimberService) {}

ngOnInit(): void {  }

updateClimber(climber: ProClimber) {
  this.proClimberService.updateProClimber(climber).subscribe((climbers: ProClimber[]) => this.climbersUpdated.emit(climbers));
}
deleteClimber(climber: ProClimber) {
  this.proClimberService.deleteProClimber(climber).subscribe((climbers: ProClimber[]) => this.climbersUpdated.emit(climbers));
}
createClimber(climber: ProClimber) {
  this.proClimberService.createProClimber(climber).subscribe((climbers: ProClimber[]) => this.climbersUpdated.emit(climbers));
}

}
