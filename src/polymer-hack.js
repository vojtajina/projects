window.VojtaPolymer = function(name, controller) {
      var ctrlModule = controller.split(':')[0];
      var ctrlClassName = controller.split(':')[1];

      require(['di/injector', ctrlModule], function(di, m) {
        // TODO(vojta): share injector (create child injector) between components.
        var injector = new di.Injector();
        var CtrlClass = m[ctrlClassName];
        var prototype = CtrlClass.prototype;

        // TODO(vojta): handle if the controller defines "created" method.
        prototype.created = function() {
          injector.invoke(CtrlClass, this);
        };

        Polymer(name, prototype);
      });
    }
