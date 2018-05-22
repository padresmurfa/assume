import _ from 'lodash';

const one = 1;

export function isSingular(collection)
{
    return collection.length === one;
}

export function isPlural(collection)
{
    return collection.length > one;
}

export default function normalizeClassNames(classNames)
{
    if (!_.isString(classNames))
    {
        throw new Error("Class names should be specified as a delimited string");
    }

    const normalizedClassNames = classNames.split(/[;:,.\s]/);

    if (isSingular(normalizeClassNames))
    {
        return [classNames];
    }
    else if (isPlural(normalizedClassNames))
    {
        return normalizedClassNames;
    }
    
    return [];
}
