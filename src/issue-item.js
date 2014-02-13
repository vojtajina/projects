export class IssueItemController {
  constructor() {
    console.log('issue item constructor', this.issue)
  }

  ready() {
    console.log(this.issue)
  }

  issueChanged() {
    // console.log('issue changed', this.issue, arguments)
  }


}
