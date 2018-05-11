import assume, { AssumptionFailed } from 'index';

describe('assume', ()=>{

    describe('isFalse', ()=>{

        it('detects integer as not-false',()=>{
            try
            {
                assume.isFalse(1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects string as not-false',()=>{
            try
            {
                assume.isFalse("1");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects object as not-false',()=>{
            try
            {
                assume.isFalse({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects array as not-false',()=>{
            try
            {
                assume.isFalse([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects float as not-false',()=>{
            try
            {
                assume.isFalse(1.1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects undefined as not-false',()=>{
            try
            {
                assume.isFalse(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects null as not-false',()=>{
            try
            {
                assume.isFalse(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects false',()=>{
            assume.isFalse(false);
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isFalse("1");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value (\"1\") to be false');
            }
        });

        it('does not provide misleading result for strings that look like booleans', () => {
            try
            {
                assume.isFalse("true");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("true") to be false');
            }

            try
            {
                assume.isFalse("false");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("false") to be false');
            }
        });
        
        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isFalse(1.1, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
