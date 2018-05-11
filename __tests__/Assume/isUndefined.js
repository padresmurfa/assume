import assume, { AssumptionFailed } from 'index';

describe('assume', ()=>{

    describe('isUndefined', ()=>{

        it('detects defined',()=>{
            try
            {
                assume.isUndefined(true);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects undefined',()=>{
            assume.isUndefined(undefined);
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isUndefined(true);
            }
            catch (e)
            {
                expect(e.message).toBe("Expected value (true) to be undefined");
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isUndefined(true, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
