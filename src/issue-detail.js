import {GitHub} from './github';
import {Inject} from 'di/annotations';

export class IssueDetailController {
  @Inject(GitHub)
  constructor(github) {
    console.log('issue detail controller')
    this.github = github;
    this.organization = 'angular';
    this.repo = 'di.js';
    this.isLoaded = false;
  }

  ready() {}

  // This is retarded - this.number is not available during ready(),
  // even though the component is created after we already have the value.
  numberChanged() {
    if (!this.number) {
      return;
    }

    this.github.getIssueDetail(this.organization, this.repo, this.number).then((issue) => {
      this.issue = issue;
      this.hideLoadingMessage();
    });
  }

  hideLoadingMessage() {
    this.isLoaded = true;
  }
}
