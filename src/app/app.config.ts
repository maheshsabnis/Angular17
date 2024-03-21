import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
            importProvidersFrom(HttpClientModule,FormsModule),
            provideRouter(routes),
            provideClientHydration(),
            provideHttpClient(withFetch()) // Configures the current HttpClient instance
                                          //to make requests using the fetch API.
          ]
};
