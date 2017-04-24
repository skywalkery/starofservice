import {renderComponent, expect} from '../../../helpers/test-helper';
import {App} from '..';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('renders something', () => {
        expect(component).to.exist;
    });
});
