import assume, { AssumptionFailed } from 'utils/assume';

describe('assume', ()=>{

    describe('isDefined', ()=>{

        it('detects undefined',()=>{
            try
            {
                assume.isDefined(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects defined',()=>{
            assume.isDefined(true);
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isDefined(undefined);
            }
            catch (e)
            {
                expect(e.message).toBe("Expected value to be defined");
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isDefined(undefined, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
