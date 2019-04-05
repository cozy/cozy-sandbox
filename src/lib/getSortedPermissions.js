import manifest from '../../manifest.webapp'

const HANDLED_VERBS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

function getDefault() {
  let defaultObject = {}
  HANDLED_VERBS.forEach(verb => {
    defaultObject[verb] = []
  })
  return defaultObject
}

/**
 * [getSortedPermissions description]
 * @return {Object} Permissions sorted by verbs (ALL or others)
 */
function getSortedPermissions() {
  return Object.keys(manifest.permissions)
    .map(k => manifest.permissions[k])
    .reduce((result, perm) => {
      if (!perm.verbs || perm.verbs.includes('ALL')) {
        HANDLED_VERBS.forEach(verb => {
          result[verb].push(perm.type)
        })
      } else {
        perm.verbs.forEach(verb => {
          if (HANDLED_VERBS.includes(verb)) result[verb].push(perm.type)
        })
      }
      return result
    }, getDefault())
}

export default getSortedPermissions
