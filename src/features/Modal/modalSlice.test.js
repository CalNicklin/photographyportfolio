import { store } from '../../app/store';

const state = store.getState().modal;

describe('modalSlice reducers', () => {
    it('should initially set modal state isOpen to false, alt and src to empty strings', () => {
        expect(state).toEqual({ "alt": "", "isOpen": false, "src": "" });
    })
})

