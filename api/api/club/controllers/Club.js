'use strict';

/**
 * Club.js controller
 *
 * @description: A set of functions called "actions" for managing `Club`.
 */

module.exports = {

  /**
   * Retrieve club records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.club.search(ctx.query);
    } else {
      return strapi.services.club.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a club record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.club.fetch(ctx.params);
  },

  /**
   * Count club records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.club.count(ctx.query);
  },

  /**
   * Create a/an club record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.club.add(ctx.request.body);
  },

  /**
   * Update a/an club record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.club.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an club record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.club.remove(ctx.params);
  }
};
