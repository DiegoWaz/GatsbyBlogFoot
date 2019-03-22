'use strict';

/**
 * Lineup.js controller
 *
 * @description: A set of functions called "actions" for managing `Lineup`.
 */

module.exports = {

  /**
   * Retrieve lineup records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.lineup.search(ctx.query);
    } else {
      return strapi.services.lineup.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a lineup record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.lineup.fetch(ctx.params);
  },

  /**
   * Count lineup records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.lineup.count(ctx.query);
  },

  /**
   * Create a/an lineup record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.lineup.add(ctx.request.body);
  },

  /**
   * Update a/an lineup record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.lineup.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an lineup record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.lineup.remove(ctx.params);
  }
};
