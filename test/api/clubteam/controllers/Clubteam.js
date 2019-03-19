'use strict';

/**
 * Clubteam.js controller
 *
 * @description: A set of functions called "actions" for managing `Clubteam`.
 */

module.exports = {

  /**
   * Retrieve clubteam records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.clubteam.search(ctx.query);
    } else {
      return strapi.services.clubteam.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a clubteam record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.clubteam.fetch(ctx.params);
  },

  /**
   * Count clubteam records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.clubteam.count(ctx.query);
  },

  /**
   * Create a/an clubteam record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.clubteam.add(ctx.request.body);
  },

  /**
   * Update a/an clubteam record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.clubteam.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an clubteam record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.clubteam.remove(ctx.params);
  }
};
