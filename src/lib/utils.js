import {join} from 'path'
import {tmpdir} from 'os'
import truncate from 'lodash/truncate'
import {sdk} from './stellar'

const isPublicKey = keyStr => sdk.StrKey.isValidEd25519PublicKey(keyStr)
// stellar federated address (eg. "stellar*fed.network")
const isStellarAddress = addr => /^[^*,]*\*[a-z0-9-.]*$/i.test(addr)
const isTxHash = hashStr => /^[0-9a-f]{64}$/i.test(hashStr)
const shortHash = hash => truncate(hash, {length: 10})

const isDefInt = (obj, key) => {
  if (!obj || !key || obj.hasOwnProperty(key) === false) return false
  return Number.isInteger(Number(obj[key]))
}

const base64Decode = value => Buffer.from(value, 'base64').toString()
const base64DecodeToHex = value => Buffer.from(value, 'base64').toString('hex')

const handleFetchDataFailure = id => e => {
  let status
  if (e.data && e.data.status) status = e.data.status
  else if (e.response && e.response.status) status = e.response.status

  let msg = `Failed to fetch data:`
  if (status) msg += `\n\tStatus: [${status}]`
  if (e.response && e.response.status)
    msg += `\n\tStatus: [${e.response.status}]`
  if (e.message) msg += `\n\tMessage: [${e.message}]`
  if (e.stack) msg += `\n\tStack: [${e.stack}]`

  console.error(msg)
  console.error(`Raw Error: ${e}`)

  let errorURI
  if (status === 404) {
    let redirectURI = '/error/not-found'
    if (id) redirectURI += `/${id}`
    errorURI = redirectURI
  } else if (e.message === 'Network Error') {
    errorURI = `/error/general/network`
  } else {
    errorURI = `/error/general/${id}`
  }
  window.location.href = errorURI
}

const storageInit = () => {
  let storage
  if (typeof localStorage === 'undefined' || localStorage === null) {
    const storagePath = join(tmpdir(), 'steexp')
    const LocalStorage = require('node-localstorage').LocalStorage
    storage = new LocalStorage(storagePath)
  } else {
    storage = localStorage
  }
  return storage
}

export {
  base64Decode,
  base64DecodeToHex,
  handleFetchDataFailure,
  isDefInt,
  isPublicKey,
  isStellarAddress,
  isTxHash,
  shortHash,
  storageInit,
}
