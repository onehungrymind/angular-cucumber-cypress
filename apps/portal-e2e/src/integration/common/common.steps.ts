import { Then } from 'cypress-cucumber-preprocessor/steps';
import { getTitle } from '../../support/pages/app.po';

Then(`I should see {string} in the title`, title => {
  getTitle().contains('EnterPortal');
});
