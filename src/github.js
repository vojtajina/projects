import {Inject} from 'di/annotations';

function httpGet() {
  return function(url) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.responseType = 'json';
    xmlHttp.open('GET', url);
    xmlHttp.send(null);

    return new Promise(function(resolver) {
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4) {
          resolver.fulfill(xmlHttp.response);
        }
      };
    });
  };
}


export class GitHub {
  @Inject(httpGet)
  constructor(httpGet, clientId, clientSecret) {
    this.httpGet = httpGet;
    this.clientId = clientId || '06a02b469bac52a1fd3e';
    this.clientSecret = clientSecret || 'b7cd8c62becc60ceaf045268c5e23064f8e8c68f';
  }

  getIssues(organization, repoName) {
    return this.httpGet(`https://api.github.com/repos/${organization}/${repoName}/issues?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
  }

  getIssueDetail(organization, repoName, number) {
    return this.httpGet(`https://api.github.com/repos/${organization}/${repoName}/issues/${number}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
  }

}
