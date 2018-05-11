import assume, { AssumptionFailed } from 'src/index';

describe('assume', ()=>{

    describe('isInteger', ()=>{

        it('detects string as not-integer',()=>{
            try
            {
                assume.isInteger("1");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects object as not-integer',()=>{
            try
            {
                assume.isInteger({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects array as not-integer',()=>{
            try
            {
                assume.isInteger([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects float as not-integer',()=>{
            try
            {
                assume.isInteger(1.1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects undefined as not-integer',()=>{
            try
            {
                assume.isInteger(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects null as not-integer',()=>{
            try
            {
                assume.isInteger(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects integer',()=>{
            assume.isInteger(1);
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isInteger("b");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value (b) to be an integer');
            }
        });

        it('does not misrepresent strings that look like integers as integers', () => {
            try
            {
                assume.isInteger("1");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("1") to be an integer');
            }
        });
        
        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isInteger(1.1, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
