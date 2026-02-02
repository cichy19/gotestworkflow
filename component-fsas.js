"use strict";

define("nodes/components/driver-fsas/component", [
  "exports",
  "shared/mixins/node-driver"
], function (exports, NodeDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  // Minimal base64-encoded layout: <span>Fsas</span>
  const LAYOUT = "PHNwYW4+RnNhczwvc3Bhbj4K";

  exports.default = Ember.Component.extend(NodeDriver.default, {
    driverName: "fsas",

    init() {
      const template = Ember.HTMLBars.compile(
        window.atob(LAYOUT),
        { moduleName: "nodes/components/driver-fsas/template" }
      );

      Ember.set(this, "layout", template);
      this._super(...arguments);
    },

    bootstrap() {
      const config = Ember.get(this, "globalStore").createRecord({
        type: "fsasConfig"
      });

      Ember.set(this, "model.fsasConfig", config);
    },

    validate() {
      this._super();
      return true;
    }
  });
});
