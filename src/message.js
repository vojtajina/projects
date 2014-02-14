export class MessageController {
  constructor() {
    this.text = '';
    this.displayValue = '';
  }

  showChanged(_, show) {
    this.displayValue = show ? '' : 'none';
  }

  hideChanged(_, hide) {
    this.displayValue = hide ? 'none' : '';
  }
}
