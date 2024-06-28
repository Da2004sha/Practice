import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Создание приложения
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
