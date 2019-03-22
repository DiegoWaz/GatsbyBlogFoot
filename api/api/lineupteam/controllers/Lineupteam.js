'use strict';

/**
 * Lineupteam.js controller
 *
 * @description: A set of functions called "actions" for managing `Lineupteam`.
 */

module.exports = {

  /**
   * Retrieve lineupteam records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.lineupteam.search(ctx.query);
    } else {
      return strapi.services.lineupteam.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a lineupteam record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.lineupteam.fetch(ctx.params);
  },

  /**
   * Count lineupteam records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.lineupteam.count(ctx.query);
  },

  /**
   * Create a/an lineupteam record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.lineupteam.add(ctx.request.body);
  },

  /**
   * Update a/an lineupteam record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.lineupteam.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an lineupteam record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.lineupteam.remove(ctx.params);
  }
};
