import assume, { AssumptionFailed } from 'index';

describe('assume', ()=>{

    describe('isImmutable', ()=>{

        it('detects string as immutable',()=>{
            assume.isImmutable("1");
        });

        it('detects integer as immutable',()=>{
            assume.isImmutable(1);
        });

        it('detects float as immutable',()=>{
            assume.isImmutable(1.2);
        });

        it('detects bool as immutable',()=>{
            assume.isImmutable(true);
        });

        it('detects date as not-immutable',()=>{
            try
            {
                assume.isImmutable(new Date());
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects null as not-immutable',()=>{
            try
            {
                assume.isImmutable(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });
        
        it('detects undefined as not-immutable',()=>{
            try
            {
                assume.isImmutable(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects object as not-immutable',()=>{
            try
            {
                assume.isImmutable({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects array as not-immutable',()=>{
            try
            {
                assume.isImmutable([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });
        
        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isImmutable("b");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value (b) to be a immutable');
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isImmutable({}, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
