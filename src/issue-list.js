import {GitHub} from './github';
import {Inject} from 'di/annotations';

export class IssueListController {
  @Inject(GitHub)
  constructor(github) {
    console.log('issue list controller')
    this.github = github;
    this.issues = [];
    this.organization = 'angular';
    this.repo = 'di.js';
    this.isLoaded = false;
  }

  ready() {
    this.github.getIssues(this.organization, this.repo).then((issues) => {
      console.log(issues)
      this.issues = issues;
      this.hideLoadingMessage();
    });
  }

  hideLoadingMessage() {
    this.isLoaded = true;
  }
}
