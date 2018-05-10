import assume, { AssumptionFailed } from 'assume';

describe('assume', ()=>{

    describe('fail', ()=>{

        it('will create a failure of type AssumptionFailed by default',()=>{
            try
            {
                assume.fail();
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.fail();
            }
            catch (e)
            {
                expect(e.message).toBe("Assumption failed");
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.fail("Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });

        it('is immune to null as a custom message', () => {
            try
            {
                assume.fail(null);
            }
            catch (e)
            {
                expect(e.message).toBe("Assumption failed");
            }
        });
    });
});
