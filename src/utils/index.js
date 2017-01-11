/**
 * Created by y1205 on 2017/1/10.
 */
let oneOf = function (value, list) {
  if (value && list.length) {
    return list.indexOf(value) !== -1
  } else {
    throw new Error('value & list can\'t be null')
  }
}
export {
  oneOf
}
