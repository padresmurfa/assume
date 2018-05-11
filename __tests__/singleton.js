import assume, { Assume } from 'src/index';

describe('singleton', ()=>{

    it('expects a singleton as a default export from assume', ()=>{
        assume.isInstanceOf(assume, "Assume");
    });
});
