import moment from 'moment';

import assume, { AssumptionFailed } from 'index';

describe('assume', ()=>{

    describe('isIsoDate', ()=>{

        it('detects string as not-iso-date',()=>{
            try
            {
                assume.isIsoDate("1");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects array as not-iso-date',()=>{
            try
            {
                assume.isIsoDate([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects integer as not-iso-date',()=>{
            try
            {
                assume.isIsoDate(1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects float as not-iso-date',()=>{
            try
            {
                assume.isIsoDate(1.1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects undefined as not-iso-date',()=>{
            try
            {
                assume.isIsoDate(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects null as not-iso-date',()=>{
            try
            {
                assume.isIsoDate(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects object as not-iso-date',()=>{
            try
            {
                assume.isIsoDate({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects Date as not-iso-date',()=>{
            try
            {
                assume.isIsoDate(new Date());
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects iso date',()=>{
            assume.isIsoDate(moment().toISOString());
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isIsoDate("b");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value (b) to be a string containing a valid ISO-8601 date');
            }
        });
        
        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isIsoDate(1.1, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
