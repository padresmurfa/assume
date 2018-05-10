import assume, { AssumptionFailed } from 'assume';

describe('assume', ()=>{

    describe('isNotEmpty', ()=>{

        it('detects empty string',()=>{
            try
            {
                assume.isNotEmpty("");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects non-empty string',()=>{
            assume.isNotEmpty("asdf");
        })

        it('detects empty array',()=>{
            try
            {
                assume.isNotEmpty([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects non-empty array',()=>{
            assume.isNotEmpty([1]);
        })
        
        it('detects empty object',()=>{
            try
            {
                assume.isNotEmpty({});
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })

        it('detects not-empty object',()=>{
            assume.isNotEmpty({a: 1});
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isNotEmpty("");
            }
            catch (e)
            {
                expect(e.message).toBe("Expected value (\"\") to not be empty");
            }
        });

        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isNotEmpty("", "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
