import assume, { Assume } from 'index';

describe('singleton', ()=>{

    it('expects a singleton as a default export from assume', ()=>{
        assume.isInstanceOf(assume, "Assume");
    });
});
