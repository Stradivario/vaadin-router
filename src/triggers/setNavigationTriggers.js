/**
 * @typedef NavigationTrigger
 * @type {object}
 * @property {function()} activate
 * @property {function()} inactivate
 * Configures what triggers Router navigation events:
 *  - `POPSTATE`: popstate events on the current `window`
 *  - `CLICK`: click events on `<a>` links leading to the current page
 *
 * This method is invoked with the pre-configured values when creating a new Router instance.
 * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
 *
 * See the `router-config.js` for the default navigation triggers config. Based on it, you can
 * create the own one and only import the triggers you need, instead of pulling in all the code,
 * e.g. if you want to handle `click` differently.
 *
 * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
 *
 * @param {...NavigationTrigger} triggers
 */

/** @type {Array<NavigationTrigger>} */
let triggers = [];

export default function setNavigationTriggers(newTriggers) {
  triggers.forEach((trigger) => trigger.inactivate());

  newTriggers.forEach((trigger) => trigger.activate());

  triggers = newTriggers;
}
