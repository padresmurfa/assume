import assume, { AssumptionFailed } from 'index';

describe('assume', ()=>{

    describe('isTrue', ()=>{

        it('detects integer as not-true',()=>{
            try
            {
                assume.isTrue(1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects string as not-true',()=>{
            try
            {
                assume.isTrue("1");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects object as not-true',()=>{
            try
            {
                assume.isTrue({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects array as not-true',()=>{
            try
            {
                assume.isTrue([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects float as not-true',()=>{
            try
            {
                assume.isTrue(1.1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects undefined as not-true',()=>{
            try
            {
                assume.isTrue(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects null as not-true',()=>{
            try
            {
                assume.isTrue(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects true',()=>{
            assume.isTrue(true);
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isTrue("1");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value (\"1\") to be true');
            }
        });

        it('does not provide misleading result for strings that look like booleans', () => {
            try
            {
                assume.isTrue("true");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("true") to be true');
            }

            try
            {
                assume.isTrue("false");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("false") to be true');
            }
        });
        
        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isTrue(1.1, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
