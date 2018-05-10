import _ from 'lodash';

export default function normalizeClassNames(classNames)
{
    if (!_.isString(classNames))
    {
        throw new Error("Class names should be specified as a delimited string");
    }

    const normalizedClassNames = classNames.split(/[;:,\.\s]/);
    if (normalizedClassNames.length > 1)
    {
        return normalizedClassNames;
    }

    return [ classNames ];
}
