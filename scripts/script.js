import {renderCrm} from './modules/render.js';
import {formControl} from './modules/control.js';

{
  const init = () => {
    const {form, formOverlay} = renderCrm();

    formControl(form, formOverlay);
  };
  window.crmInit = init;
}
