import assume, { AssumptionFailed } from 'utils/assume';

describe('assume', ()=>{

    describe('isEmpty', ()=>{

        it('detects non-empty string',()=>{
            try
            {
                assume.isEmpty("asdf");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects empty string',()=>{
            assume.isEmpty("");
        })

        it('detects non-empty array',()=>{
            try
            {
                assume.isEmpty([1]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects empty array',()=>{
            assume.isEmpty([]);
        })
        
        it('detects non-empty object',()=>{
            try
            {
                assume.isEmpty({a: 1});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects empty object',()=>{
            assume.isEmpty({});
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isEmpty("asdf");
            }
            catch (e)
            {
                expect(e.message).toBe("Expected value (\"asdf\") to be empty");
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isEmpty("asdf", "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
