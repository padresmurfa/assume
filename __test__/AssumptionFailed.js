import { AssumptionFailed } from 'utils/assume';
import isError from 'utils/isError';

describe('assumption-failed', ()=>{

    it('constructs new instances with a message', ()=>{
        const vf = new AssumptionFailed("a message");
        expect(vf.message).toBe("a message");
    });

    it('is an Error', ()=>{
        const vf = new AssumptionFailed("a message");
        const isErr = isError(vf);
        expect(isErr).toBe(true);
    });

});
