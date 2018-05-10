import assume, { AssumptionFailed } from 'utils/assume';

describe('assume', ()=>{

    describe('isInstanceOf',()=>{

        it('detects exact match', ()=>{
            const e = new Error();
            assume.isInstanceOf(e, "Error");
        });

        it('detects failed match', ()=>{
            const e = new AssumptionFailed();
            try
            {
                assume.isInstanceOf(e, "Error");
            }
            catch (e)
            {
                expect(e.message).toBe("Expected value to be an instance of Error");
            }
        });

        it('will use the default text for assumption failures if none other specified', () => {
            const e = new AssumptionFailed();
            try
            {
                assume.isInstanceOf(e, "Error");
            }
            catch (e)
            {
                expect(e.message).toBe("Expected value to be an instance of Error");
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            const e = new AssumptionFailed();
            try
            {
                assume.isInstanceOf(e, "Error", "Dude, I expected an Error!");
            }
            catch (e)
            {
                expect(e.message).toBe("Dude, I expected an Error!");
            }
        });
        
        it('detects match in comma delimited string', ()=>{
            const e = new AssumptionFailed();
            assume.isInstanceOf(e, "Error,AssumptionFailed");
        });

        it('detects match in period delimited string', ()=>{
            const e = new AssumptionFailed();
            assume.isInstanceOf(e, "Error.AssumptionFailed");
        });

        it('detects match in semicolon delimited string', ()=>{
            const e = new AssumptionFailed();
            assume.isInstanceOf(e, "Error;AssumptionFailed");
        });

        it('detects match in colon delimited string', ()=>{
            const e = new AssumptionFailed();
            assume.isInstanceOf(e, "Error:AssumptionFailed");
        });

        it('detects match in whitespace delimited string', ()=>{
            const e = new AssumptionFailed();
            assume.isInstanceOf(e, "Error AssumptionFailed");
        });

        it('rejects non-strings', ()=>{
            try
            {
                const e = new AssumptionFailed();
                assume.isInstanceOf(e, ["Error","AssumptionFailed"]);
            }
            catch(e)
            {
                expect(e.message).toBe("Class names should be specified as a delimited string");
            }
        });
    });
});
