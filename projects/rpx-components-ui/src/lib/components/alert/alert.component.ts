import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

export type AlertType = 'success' | 'info' | 'warning' | 'danger';

@Component({
  selector: 'rpx-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() message: string;
  @Input() title: string;

  @HostBinding('class')
  @Input() type: AlertType = 'danger';
}
