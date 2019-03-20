'use strict';

/**
 * Match.js controller
 *
 * @description: A set of functions called "actions" for managing `Match`.
 */

module.exports = {

  /**
   * Retrieve match records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.match.search(ctx.query);
    } else {
      return strapi.services.match.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a match record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.match.fetch(ctx.params);
  },

  /**
   * Count match records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.match.count(ctx.query);
  },

  /**
   * Create a/an match record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.match.add(ctx.request.body);
  },

  /**
   * Update a/an match record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.match.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an match record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.match.remove(ctx.params);
  }
};
