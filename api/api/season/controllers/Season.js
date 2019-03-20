'use strict';

/**
 * Season.js controller
 *
 * @description: A set of functions called "actions" for managing `Season`.
 */

module.exports = {

  /**
   * Retrieve season records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.season.search(ctx.query);
    } else {
      return strapi.services.season.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a season record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.season.fetch(ctx.params);
  },

  /**
   * Count season records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.season.count(ctx.query);
  },

  /**
   * Create a/an season record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.season.add(ctx.request.body);
  },

  /**
   * Update a/an season record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.season.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an season record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.season.remove(ctx.params);
  }
};
