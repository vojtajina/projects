export class Router {

  // We should make sure there is only a single router on a page.
  // Polymer creates (fires created and ready) this element twice. No idea why.
  // If I create the router (and define routes) in the first case, it won't work.
  // That's why I'm leaving like this.
  ready() {
    var router = new window.Router();

    // Setting up the routes, this is lame, we need to inject route definitions.
    router.on(/detail\/(\d*)/, function(id) {
      console.log('detail route', id)
      this.route = {
        component: 'fsa-issue-detail',
        issueId: id
      };
    }.bind(this));

    router.on(/list/, function() {
      console.log('list route')
      this.route = {
        component: 'fsa-issue-list'
      };
    }.bind(this));

    // singletonLock = true;

    this.asyncMethod(function() {
      router.init();
      Platform.flush();
    });
  }
}
