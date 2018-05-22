import AssumptionFailed from 'assumptionFailed';
import _ from 'lodash';
import moment from 'moment';

/* eslint-disable sort-imports */
import normalizeClassNames, {isSingular} from 'normalizeClassNames';
/* eslint-enable sort-imports */

const tString = typeof "";
const tUndefined = typeof undefined;

function isUndefinedOrString(value)
{
    const type = typeof value;

    return (type === tUndefined) || (type === tString);    
}

function clarify(value)
{
    if (value === null)
    {
        return "<null>";
    }
    else if (value === undefined)
    {
        return "<undefined>";
    }
    else if (_.isArray(value))
    {
        return "<array>";
    }
    else if (_.isDate(value))
    {
        return "<date>";
    }
    else if (_.isObject(value))
    {
        return "<object>";
    }
    else if (_.isString(value))
    {
        return `"${value}"`;
    }

    return value;
}

export default class Assume
{
    constructor(factory)
    {
        if (factory === undefined)
        {
            this.factory = (msg)=> {
                return new AssumptionFailed(msg);
            };
        }
        else
        {
            this.factory = factory;
        }
    }

    fail(message)
    {
        throw this.factory(message || 'Assumption failed');
    }

    areEqual(expected, actual, message)
    {
        if (!_.isEqual(expected, actual))
        {
            const ce = clarify(expected);
            const ca = clarify(actual);

            this.fail(message || `Expected values to be equal (${ce},${ca})`);
        }
    }

    isTrue(actual, message)
    {
        if (actual !== true)
        {
            const ca = clarify(actual);

            this.fail(message || `Expected value (${ca}) to be true`);
        }
    }

    isFalse(actual, message)
    {
        if (actual !== false)
        {
            const ca = clarify(actual);

            this.fail(message || `Expected value (${ca}) to be false`);
        }
    }
    
    isError(value, message)
    {
        if (value instanceof Error)
        {
            return;
        }
    
        // we're also fine with duck-typing:
        const isMessageLegit = isUndefinedOrString(value.message);
        const isStackLegit = isUndefinedOrString(value.stack);
        const isErrorLegit = isMessageLegit && isStackLegit;

        if (isErrorLegit)
        {
            return;
        }

        const ca = clarify(value);

        this.fail(message || `Expected values to be an Error (${ca})`);
    }

    isInstanceOf(value, classNames, message)
    {
        const normalized = normalizeClassNames(classNames);

        if (!_.some(normalized,(className)=>{
            return className === value.constructor.name;
        }))
        {
            if (isSingular(normalized))
            {
                this.fail(message || `Expected value to be an instance of ${_.first(normalized)}`);
            }
            else
            {
                this.fail(message || `Expected value to be an instance of one of the following: ${normalized}`);
            }
        }
    }
    
    isNull(value, message)
    {
        if (value !== null)
        {
            const cv = clarify(value);

            this.fail(message || `Expected value (${cv}) to be null`);
        }
    }

    isNotNull(value, message)
    {
        if (value === null)
        {
            this.fail(message || 'Expected value to not be null');
        }
    }
    
    isDefined(value, message)
    {
        if (_.isUndefined(value))
        {
            this.fail(message || 'Expected value to be defined');
        }
    }

    isUndefined(value, message)
    {
        if (!_.isUndefined(value))
        {
            const cv = clarify(value);

            this.fail(message || `Expected value (${cv}) to be undefined`);
        }
    }

    isEmpty(value, message)
    {
        if (!_.isEmpty(value))
        {
            const cv = clarify(value);

            this.fail(message || `Expected value (${cv}) to be empty`);
        }
    }

    isNotEmpty(value, message)
    {
        if (_.isEmpty(value))
        {
            const cv = clarify(value);

            this.fail(message || `Expected value (${cv}) to not be empty`);
        }
    }

    isString(value, message)
    {
        if (!_.isString(value))
        {
            const cv = clarify(value);

            this.fail(message || `Expected value (${cv}) to be a string`);
        }
    }

    isImmutable(value, message)
    {
        if (_.isString(value) || _.isNumber(value) || _.isBoolean(value))
        {
            return;
        }

        const cv = clarify(value);

        this.fail(message || `Expected value (${cv}) to be immutable`);
    }

    isInteger(value, message)
    {
        if (!_.isInteger(value))
        {
            let cv = clarify(value);

            if (_.isString(value))
            {
                const p = parseInt(value, 10);
                
                if ((p !== undefined) && (p.toString() === value))
                {
                    cv = `"${value}"`;
                }
            }

            this.fail(message || `Expected value (${cv}) to be an integer`);
        }
    }

    isBoolean(value, message)
    {
        if (!_.isBoolean(value))
        {
            let cv = clarify(value);

            if (_.isString(value) && ((value === "true") || (value === "false")))
            {
                cv = `"${value}"`;
            }

            this.fail(message || `Expected value (${cv}) to be a boolean`);
        }
    }

    isArray(value, message)
    {
        if (!_.isArray(value))
        {
            let cv = clarify(value);

            if (_.isString(value) && value.startsWith("[") && value.endsWith("]"))
            {
                cv = `"${value}"`;
            }

            this.fail(message || `Expected value (${cv}) to be an array`);
        }
    }

    isObject(value, message)
    {
        if (!_.isObject(value))
        {
            let cv = clarify(value);

            if (_.isString(value) && value.startsWith("{") && value.endsWith("}"))
            {
                cv = `"${value}"`;
            }

            this.fail(message || `Expected value (${cv}) to be an object`);
        }
    }

    isDate(value, message)
    {
        if (!_.isDate(value))
        {
            const cv = clarify(value);

            this.fail(message || `Expected value (${cv}) to be a date`);
        }
    }

    isIsoDate(value, message)
    {
        if (!_.isString(value))
        {
            const cv = clarify(value);

            this.fail(message || `Expected value (${cv}) to be a string containing an ISO-8601 date`);
        }
        if (!moment(value, moment.ISO_8601).isValid())
        {
            this.fail(message || `Expected value (${value}) to be a string containing a valid ISO-8601 date`);
        }
    }  
}

