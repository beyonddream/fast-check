import { check, assert } from './check/runner/Runner'
import { sample, statistics } from './check/runner/Sampler'
import { property } from './check/property/Property'

import Arbitrary from './check/arbitrary/definition/Arbitrary'
import Shrinkable from './check/arbitrary/definition/Shrinkable'
import { array } from './check/arbitrary/ArrayArbitrary'
import { boolean } from './check/arbitrary/BooleanArbitrary'
import { char, ascii, unicode, hexa, base64 } from './check/arbitrary/CharacterArbitrary'
import { constant } from './check/arbitrary/ConstantArbitrary'
import { float, double } from './check/arbitrary/FloatingPointArbitrary'
import { integer, nat } from './check/arbitrary/IntegerArbitrary'
import { lorem } from './check/arbitrary/LoremArbitrary'
import { oneof } from './check/arbitrary/OneOfArbitrary'
import { string, asciiString, unicodeString, hexaString, base64String } from './check/arbitrary/StringArbitrary'
import { tuple } from './check/arbitrary/TupleArbitrary'

export {
    // assess the property
    sample, statistics,
    // check the property
    check, assert,
    // property definition
    property,
    // pre-built arbitraries
    boolean, // boolean
    float, double, // floating point types
    integer, nat, // integer types
    char, ascii, unicode, hexa, base64, // single character
    string, asciiString, unicodeString, hexaString, base64String, lorem, // strings
    constant, oneof, array, tuple, // combination of others
    // extend the framework
    Arbitrary, Shrinkable
};