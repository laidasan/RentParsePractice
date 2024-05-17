import { compose, defaultTo, pickAll, evolve } from 'ramda'

/**
 * @function toPageInformation
 * @param {Object} pageInformation
 * @returns {PageInformation}
 */
export const toPageInformation = compose(
  pickAll(['domain', 'path']),
  evolve({
    domain: defaultTo(''),
    path: defaultTo('')
  })
)

/**
 * @typedef {Object} PageInformation
 * @property {string} domain
 * @property {string} path 
 */


/**
 * @function toOptions
 * @param {object} Options
 * @returns {Options}
 * @description parse options
 */
export const toOptions = compose(
  pickAll(['queryParams', 'searchOptions']),
  evolve({
    queryParams: compose(
      pickAll(['region', 'section', 'searchtype']),
      evolve({
        region: defaultTo(''),
        section: defaultTo([]),
        searchtype: defaultTo(''),
      })
    ),
    searchOptions: compose(
      pickAll(['isScrapeAll', 'startPage', 'endPage']),
      evolve({
        startPage: compose(defaultTo(1), Number),
        endPage: compose(defaultTo(1), Number),
      })
    )
  })
)

/** 
 * @typedef {Object} Options
 * @param  {QueryParams} queryParam
 * @param  {SearchOptions} searchOptions
 */

/**
 * @typedef {Object} QueryParams
 * @property {string} region
 * @property {Array<string>} section
 * @property {string} searchtype
 */

/**
 * @typedef {Object} SearchOptions
 * @property {boolean} isScrapeAll
 * @property {number} startPage
 * @property {number} endPage
 */
