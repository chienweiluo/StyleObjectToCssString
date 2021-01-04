type ParserType = (string: string) => string

type ParserGeneraterType  =
  (
    matcher: RegExp,
    replacer: (string: string) => string
  ) => ParserType


const generateParser: ParserGeneraterType = (matcher, replacer?) => {
  const regex = RegExp(matcher, 'g')

  return string => {
    // * throw an error if not a string
    if (typeof string !== 'string') {
      throw new TypeError(`expected an argument of type string, but not`);
    }

    // * if no match between string and matcher
    if (!string.match(regex)) {
      return string;
    }

    // * executes the replacer function for each match
    // ? replacer can take any arguments valid for String.prototype.replace
    return string.replace(regex, replacer);
  }
}

const camelToKebab:ParserType = generateParser(/[A-Z]/, match => `-${match.toLowerCase()}`)

export { ParserType, camelToKebab }
