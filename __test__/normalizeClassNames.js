import assume, { normalizeClassNames } from 'utils/assume';

describe('normalizeClassNames', ()=>{

    it('normalizes a single class name to be an array', ()=>{
        const normalized = normalizeClassNames("asdf");
        expect(normalized).toEqual(["asdf"]);
    });

    it('normalizes comma-delimited class names to an array', ()=>{
        const normalized = normalizeClassNames("as,df");
        expect(normalized).toEqual(["as","df"]);
    });
    
    it('normalizes period-delimited class names to an array', ()=>{
        const normalized = normalizeClassNames("as.df");
        expect(normalized).toEqual(["as","df"]);
    });
    
    it('normalizes semicolon-delimited class names to an array', ()=>{
        const normalized = normalizeClassNames("as;df");
        expect(normalized).toEqual(["as","df"]);
    });
    
    it('normalizes colon-delimited class names to an array', ()=>{
        const normalized = normalizeClassNames("as:df");
        expect(normalized).toEqual(["as","df"]);
    });
    
    it('normalizes whitespace-delimited class names to an array', ()=>{
        const normalized = normalizeClassNames("as df");
        expect(normalized).toEqual(["as","df"]);
    });
    
    it('does not normalize integers, class names should be strings', ()=>{
        try
        {
            normalizeClassNames(1);
            assume.fail();
        }
        catch (e)
        {
            expect(e.message).toBe("Class names should be specified as a delimited string");
        }
    });

    it('does not normalize objects, class names should be strings', ()=>{
        try
        {
            normalizeClassNames({});
            assume.fail();
        }
        catch (e)
        {
            expect(e.message).toBe("Class names should be specified as a delimited string");
        }
    });

    it('does not normalize arrays, class names should be strings', ()=>{
        try
        {
            normalizeClassNames([]);
            assume.fail();
        }
        catch (e)
        {
            expect(e.message).toBe("Class names should be specified as a delimited string");
        }
    });

    it('does not normalize booleans, class names should be strings', ()=>{
        try
        {
            normalizeClassNames(true);
            assume.fail();
        }
        catch (e)
        {
            expect(e.message).toBe("Class names should be specified as a delimited string");
        }
    });

    it('does not normalize Dates, class names should be strings', ()=>{
        try
        {
            normalizeClassNames(new Date());
            assume.fail();;
        }
        catch (e)
        {
            expect(e.message).toBe("Class names should be specified as a delimited string");
        }
    });
});
