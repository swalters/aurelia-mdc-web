import 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';

export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia
    .use
    .developmentLogging()
    .standardConfiguration()
    .globalResources([
      'attributes/highlight',
      'elements/component-viewer/component-viewer'
    ])
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/button'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/drawer'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/floating-label'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/form-field'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/line-ripple'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/list'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/notched-outline'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/top-app-bar'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/ripple'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/tab-bar'))
    .plugin(PLATFORM.moduleName('@aurelia-mdc-web/text-field'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('views/root/root'));
}
