import assume, { Assume } from 'assume';

describe('singleton', ()=>{

    it('expects a singleton as a default export from assume', ()=>{
        assume.isInstanceOf(assume, "Assume");
    });
});