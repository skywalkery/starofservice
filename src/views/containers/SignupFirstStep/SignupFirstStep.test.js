import {renderComponent, expect} from '../../../helpers/test-helper';
import {SignupFirstStep} from '..';

describe('SignupFirstStep', () => {
    let component;

    beforeEach(() => {
        const props = { onSubmit: () => {} };
        component = renderComponent(SignupFirstStep, props);
    });

    it('has email error', () => {
        component.simulate('submit');
        expect(component.find('.signup-first-step__error-email')).to.exist;
    });

    it('has password error', () => {
        component.simulate('submit');
        expect(component.find('.signup-first-step__error-password')).to.exist;
    });

    it('has no error', () => {
        component.find('.signup-first-step__email').simulate('change', 'SkywalkerGer@gmail.com');
        component.find('.signup-first-step__password').simulate('change', 'password');
        component.find('.signup-first-step__confirmPassword').simulate('change', 'password');
        component.simulate('submit');
        expect(component.find('.error-field-msg')).to.not.exist;
    });

});
