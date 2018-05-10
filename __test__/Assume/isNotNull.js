import assume, { AssumptionFailed } from 'utils/assume';

describe('assume', ()=>{

    describe('isNotNull', ()=>{

        it('detects null',()=>{
            try
            {
                assume.isNotNull(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects not-null',()=>{
            assume.isNotNull("null");
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isNotNull(null);
            }
            catch (e)
            {
                expect(e.message).toBe("Expected value to not be null");
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isNotNull(null, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
