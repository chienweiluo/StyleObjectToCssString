import { camelToKebab, ParserType } from './parsers'

const objToString : (styleObj: Record<string, any> , parser: ParserType) => string 
  = (styleObj, parser = camelToKebab) => {
    if (!styleObj || typeof styleObj !== 'object' || Array.isArray(styleObj)) {
      throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`)
    }
    const lines = Object.keys(styleObj).map(property => `${parser(property)}: ${styleObj[property]};`)
    return lines.join('\n')
  }

export default objToString; 
