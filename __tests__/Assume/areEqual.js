import assume, { AssumptionFailed } from 'assume';

describe('assume', ()=>{

    describe('areEqual',()=>{

        it('detects equal numbers', ()=>{
            assume.areEqual(1,1);
        });

        it('detects equal strings', ()=>{
            assume.areEqual("asdf","asdf");
        });

        it('detects equal objects', ()=>{
            assume.areEqual({a: 1}, {a: 1});
        });

        it('detects equal lists', ()=>{
            assume.areEqual([1,2],[1,2]);
        });

        it('detects equal dates', ()=>{
            assume.areEqual(new Date("2018.04.04"), new Date("2018.04.04"));
        });

        it('detects unequal numbers', ()=>{
            const expected = 1;
            const actual = 2;
            try
            {
                assume.areEqual(expected, actual);
            }
            catch(e)
            {
                expect(e.message).toBe(`Expected values to be equal (${expected},${actual})`);
            }
        });

        it('provides custom failure messages, if requested', ()=>{
            const expected = 1;
            const actual = 2;
            try
            {
                assume.areEqual(expected, actual, 'Dude, expected the params to be equal');
            }
            catch(e)
            {
                expect(e.message).toBe('Dude, expected the params to be equal');
            }
        });

        it('is knows that undefined is not equal to something else', ()=>{
            const expected = 1;
            const actual = undefined;
            try
            {
                assume.areEqual(expected, actual);
            }
            catch(e)
            {
                expect(e.message).toBe(`Expected values to be equal (${expected},<${actual}>)`);
            }
        });
        
        it('is knows that undefined is equal to undefined', ()=>{
            const expected = undefined;
            const actual = undefined;
            try
            {
                assume.areEqual(expected, actual);
            }
            catch(e)
            {
                expect(e.message).toBe(`Expected values to be equal (<${expected}>,<${actual}>)`);
            }
        });
        
        it('detects unequal strings', ()=>{
            const expected = "as2df";
            const actual = "asdf";
            try
            {
                assume.areEqual(expected, actual);
            }
            catch(e)
            {
                expect(e.message).toBe(`Expected values to be equal (\"${expected}\",\"${actual}\")`);
            }
        });

        it('detects unequal objects', ()=>{
            const expected = {a:1};
            const actual = {a:2};
            try
            {
                assume.areEqual(expected, actual);
            }
            catch(e)
            {
                expect(e.message).toBe(`Expected values to be equal (<object>,<object>)`);
            }
        });

        it('detects unequal lists', ()=>{
            const expected = [];
            const actual = ["a"];
            try
            {
                assume.areEqual(expected, actual);
            }
            catch(e)
            {
                expect(e.message).toBe(`Expected values to be equal (<array>,<array>)`);
            }
        });

        it('detects unequal dates', ()=>{
            const expected = new Date("2018.04.04");
            const actual = new Date("2019.04.04");
            try
            {
                assume.areEqual(expected, actual);
            }
            catch(e)
            {
                expect(e.message).toBe(`Expected values to be equal (<date>,<date>)`);
            }
        });
    });
});
