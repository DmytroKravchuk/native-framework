import { bootstrap } from './framework/core/bootstrap';
import { appModule } from './app/app.module';
import { wfm } from './framework';

wfm.delay(2000).then(() => {
    bootstrap(appModule);
});