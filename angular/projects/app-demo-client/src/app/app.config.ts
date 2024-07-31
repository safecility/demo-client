import {ApplicationConfig, EnvironmentProviders, Provider, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment} from "../environments/environment";
import { UserService, UserServiceMock } from "safecility-auth";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import {AppInterceptor} from "./app.interceptor";


function getProviders(): Array<Provider | EnvironmentProviders> {
  let providers: Array<Provider | EnvironmentProviders> = [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
  ]
  if (environment.mocking) {
    console.log("mocking")
    providers.push(
      {provide: UserService, useClass: UserServiceMock},
    )
  } else {
    providers.push(
      provideHttpClient(withInterceptorsFromDi()),
      {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
    )
  }
  return providers;
}

export const appConfig: ApplicationConfig = {
  providers: getProviders(),
};
