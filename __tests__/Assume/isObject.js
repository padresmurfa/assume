import assume, { AssumptionFailed } from 'index';

describe('assume', ()=>{

    describe('isObject', ()=>{

        it('detects string as not-object',()=>{
            try
            {
                assume.isObject("1");
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        });

        it('detects array as not-object',()=>{
            try
            {
                assume.isObject([]);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects integer as not-object',()=>{
            try
            {
                assume.isObject(1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects float as not-object',()=>{
            try
            {
                assume.isObject(1.1);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects undefined as not-object',()=>{
            try
            {
                assume.isObject(undefined);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects null as not-object',()=>{
            try
            {
                assume.isObject(null);
            }
            catch (e)
            {
                expect(e instanceof AssumptionFailed).toBeTruthy();
            }
        })
        
        it('detects object',()=>{
            assume.isObject({});
        })

        it('will use the default text for assumption failures if none other specified', () => {
            try
            {
                assume.isObject("b");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value (\"b\") to be an object');
            }
        });

        it('does not misrepresent strings that look like objects as objects', () => {
            try
            {
                assume.isObject("{}");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("{}") to be an object');
            }
            try
            {
                assume.isObject("{a:1}");
            }
            catch (e)
            {
                expect(e.message).toBe('Expected value ("{a:1}") to be an object');
            }
        });
        
        it('will use a custom message for assumption failures if requested', () => {
            try
            {
                assume.isObject(1.1, "Intentionally failed with a custom message");
            }
            catch (e)
            {
                expect(e.message).toBe("Intentionally failed with a custom message");
            }
        });
    });
});
