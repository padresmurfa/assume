import assume, { AssumptionFailed } from 'utils/assume';

describe('assume', ()=>{

    describe('isDate', ()=>{

        it('detects string as not-date',()=>{
            try
            {
                assume.isDate("1");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects array as not-date',()=>{
            try
            {
                assume.isDate([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects integer as not-date',()=>{
            try
            {
                assume.isDate(1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects float as not-date',()=>{
            try
            {
                assume.isDate(1.1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects undefined as not-date',()=>{
            try
            {
                assume.isDate(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects null as not-date',()=>{
            try
            {
                assume.isDate(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects object as not-date',()=>{
            try
            {
                assume.isDate({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects date',()=>{
            assume.isDate(new Date());
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isDate("b");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value (\"b\") to be a date');
            }
        });
        
        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isDate(1.1, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
