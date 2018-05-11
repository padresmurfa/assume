import assume, { AssumptionFailed } from 'index';

describe('assume', ()=>{

    describe('isString', ()=>{

        it('detects int as not-string',()=>{
            try
            {
                assume.isString(1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects object as not-string',()=>{
            try
            {
                assume.isString({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects boolean as not-string',()=>{
            try
            {
                assume.isString(true);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects array as not-string',()=>{
            try
            {
                assume.isString([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects string',()=>{
            assume.isString("");
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isString(1);
            }
            catch (e)
            {
                expect(e.message).toBe("Expected value (1) to be a string");
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isString(undefined, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
