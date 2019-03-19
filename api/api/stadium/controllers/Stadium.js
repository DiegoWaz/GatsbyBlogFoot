'use strict';

/**
 * Stadium.js controller
 *
 * @description: A set of functions called "actions" for managing `Stadium`.
 */

module.exports = {

  /**
   * Retrieve stadium records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.stadium.search(ctx.query);
    } else {
      return strapi.services.stadium.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a stadium record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.stadium.fetch(ctx.params);
  },

  /**
   * Count stadium records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.stadium.count(ctx.query);
  },

  /**
   * Create a/an stadium record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.stadium.add(ctx.request.body);
  },

  /**
   * Update a/an stadium record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.stadium.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an stadium record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.stadium.remove(ctx.params);
  }
};
