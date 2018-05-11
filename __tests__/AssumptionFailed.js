import assume, { AssumptionFailed } from 'src/index';

describe('assumption-failed', ()=>{

    it('constructs new instances with a message', ()=>{
        const vf = new AssumptionFailed("a message");
        expect(vf.message).toBe("a message");
    });

    it('is an Error', ()=>{
        const vf = new AssumptionFailed("a message");
        assume.isError(vf);
    });

});
