import moment from 'moment';
import _ from 'lodash';

import normalizeClassNames from './normalizeClassNames';
import AssumptionFailed from './assumptionFailed';

function clarify(value)
{
    if (value === null)
    {
        value = "<null>";
    }
    else if (value === undefined)
    {
        value = "<undefined>";
    }
    else if (_.isArray(value))
    {
        value = "<array>";
    }
    else if (_.isDate(value))
    {
        value = "<date>";
    }
    else if (_.isObject(value))
    {
        value = "<object>";
    }
    else if (_.isString(value))
    {
        value = `"${value}"`;
    }
    return value;
}

export default class Assume
{
    constructor(factory)
    {
        if (factory === undefined)
        {
            factory = (msg)=> {
                return new AssumptionFailed(msg);
            };
        }
        this.factory = factory;
    }

    fail(message)
    {
        throw this.factory(message || 'Assumption failed');
    }

    areEqual(expected, actual, message)
    {
        if (!_.isEqual(expected, actual))
        {
            expected = clarify(expected);
            actual = clarify(actual);

            this.fail(message || `Expected values to be equal (${expected},${actual})`);
        }
    }

    isInstanceOf(value, classNames, message)
    {
        classNames = normalizeClassNames(classNames);

        if (!_.some(classNames,(className)=>{
            return className === value.constructor.name;
        }))
        {
            if (classNames.length === 1)
            {
                this.fail(message || `Expected value to be an instance of ${classNames[0]}`);
            }
            else
            {
                this.fail(message || `Expected value to be an instance of one of the following: ${classNames}`);
            }
        }
    }
    
    isNull(value, message)
    {
        if (null !== value)
        {
            value = clarify(value);

            this.fail(message || `Expected value (${value}) to be null`);
        }
    }

    isNotNull(value, message)
    {
        if (null === value)
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
            value = clarify(value);

            this.fail(message || `Expected value (${value}) to be undefined`);
        }
    }

    isEmpty(value, message)
    {
        if (!_.isEmpty(value))
        {
            value = clarify(value);

            this.fail(message || `Expected value (${value}) to be empty`);
        }
    }

    isNotEmpty(value, message)
    {
        if (_.isEmpty(value))
        {
            value = clarify(value);

            this.fail(message || `Expected value (${value}) to not be empty`);
        }
    }

    isString(value, message)
    {
        if (!_.isString(value))
        {
            value = clarify(value);

            this.fail(message || `Expected value (${value}) to be a string`);
        }
    }

    isImmutable(value, message)
    {
        if (_.isString(value) || _.isNumber(value) || _.isBoolean(value))
        {
            return;
        }

        value = clarify(value);

        this.fail(message || `Expected value (${value}) to be immutable`);
    }

    isInteger(value, message)
    {
        if (!_.isInteger(value))
        {
            if (_.isString(value))
            {
                const p = parseInt(value);
                if ((p !== undefined) && (p.toString() === value))
                {
                    value = `"${value}"`;
                }
            }
            else
            {
                value = clarify(value);
            }
            this.fail(message || `Expected value (${value}) to be an integer`);
        }
    }

    isBoolean(value, message)
    {
        if (!_.isBoolean(value))
        {
            if (_.isString(value) && ((value === "true") || (value === "false")))
            {
                value = `"${value}"`;
            }
            else
            {
                value = clarify(value);
            }
            this.fail(message || `Expected value (${value}) to be a boolean`);
        }
    }

    isArray(value, message)
    {
        if (!_.isArray(value))
        {
            if (_.isString(value) && value.startsWith("[") && value.endsWith("]"))
            {
                value = `"${value}"`;
            }
            else
            {
                value = clarify(value);
            }
            this.fail(message || `Expected value (${value}) to be an array`);
        }
    }

    isObject(value, message)
    {
        if (!_.isObject(value))
        {
            if (_.isString(value) && value.startsWith("{") && value.endsWith("}"))
            {
                value = `"${value}"`;
            }
            else
            {
                value = clarify(value);
            }
            this.fail(message || `Expected value (${value}) to be an object`);
        }
    }

    isDate(value, message)
    {
        if (!_.isDate(value))
        {
            value = clarify(value);

            this.fail(message || `Expected value (${value}) to be a date`);
        }
    }

    isIsoDate(value, message)
    {
        if (!_.isString(value))
        {
            value = clarify(value);

            this.fail(message || `Expected value (${value}) to be a string containing an ISO-8601 date`);
        }
        if (!moment(value, moment.ISO_8601).isValid())
        {
            this.fail(message || `Expected value (${value}) to be a string containing a valid ISO-8601 date`);
        }
    }  
}

