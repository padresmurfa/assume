import assume, { AssumptionFailed } from 'utils/assume';

describe('assume', ()=>{

    describe('isNull', ()=>{

        it('detects not-null',()=>{
            try
            {
                assume.isNull("");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects null',()=>{
            assume.isNull(null);
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isNull(undefined);
            }
            catch (e)
            {
                expect(e.message).toBe("Expected value (<undefined>) to be null");
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isNull(undefined, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
