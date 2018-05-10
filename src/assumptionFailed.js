export default class AssumptionFailed
{
    constructor(message)
    {
        try
        {
            throw new Error(message);
        }
        catch(e)
        {
            this.message = message;
            this.stack = e.stack;
        }
    }
}
