import assume, { AssumptionFailed } from 'utils/assume';

describe('assume', ()=>{

    describe('isBoolean', ()=>{

        it('detects integer as not-boolean',()=>{
            try
            {
                assume.isBoolean(1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects string as not-boolean',()=>{
            try
            {
                assume.isBoolean("1");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects object as not-boolean',()=>{
            try
            {
                assume.isBoolean({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects array as not-boolean',()=>{
            try
            {
                assume.isBoolean([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects float as not-boolean',()=>{
            try
            {
                assume.isBoolean(1.1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects undefined as not-boolean',()=>{
            try
            {
                assume.isBoolean(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects null as not-boolean',()=>{
            try
            {
                assume.isBoolean(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects boolean',()=>{
            assume.isBoolean(true);
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isBoolean("1");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value (\"1\") to be a boolean');
            }
        });

        it('does not provide misleading result for strings that look like booleans', () => {
            try
            {
                assume.isBoolean("true");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("true") to be a boolean');
            }

            try
            {
                assume.isBoolean("false");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("false") to be a boolean');
            }
        });
        
        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isBoolean(1.1, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
