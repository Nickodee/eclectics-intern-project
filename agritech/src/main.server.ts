import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { LandingComponent } from './app/landing/landing.component';

const bootstrap = () => bootstrapApplication(LandingComponent, config);

export default bootstrap;
