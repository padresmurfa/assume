import assume, { AssumptionFailed } from 'index';

describe('assume', ()=>{

    describe('isArray', ()=>{

        it('detects string as not-array',()=>{
            try
            {
                assume.isArray("1");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects object as not-array',()=>{
            try
            {
                assume.isArray({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects integer as not-array',()=>{
            try
            {
                assume.isArray(1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects float as not-array',()=>{
            try
            {
                assume.isArray(1.1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects undefined as not-array',()=>{
            try
            {
                assume.isArray(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects null as not-array',()=>{
            try
            {
                assume.isArray(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects array',()=>{
            assume.isArray([]);
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isArray("b");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value (\"b\") to be an array');
            }
        });

        it('does not misrepresent strings that look like arrays as arrays', () => {
            try
            {
                assume.isArray("[]");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("[]") to be an array');
            }
            try
            {
                assume.isArray("[1,1]");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("[1,1]") to be an array');
            }
        });
        
        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isArray(1.1, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
