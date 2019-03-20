'use strict';

/**
 * Seasonteam.js controller
 *
 * @description: A set of functions called "actions" for managing `Seasonteam`.
 */

module.exports = {

  /**
   * Retrieve seasonteam records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.seasonteam.search(ctx.query);
    } else {
      return strapi.services.seasonteam.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a seasonteam record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.seasonteam.fetch(ctx.params);
  },

  /**
   * Count seasonteam records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.seasonteam.count(ctx.query);
  },

  /**
   * Create a/an seasonteam record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.seasonteam.add(ctx.request.body);
  },

  /**
   * Update a/an seasonteam record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.seasonteam.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an seasonteam record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.seasonteam.remove(ctx.params);
  }
};
