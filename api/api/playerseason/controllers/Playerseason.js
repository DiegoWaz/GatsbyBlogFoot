'use strict';

/**
 * Playerseason.js controller
 *
 * @description: A set of functions called "actions" for managing `Playerseason`.
 */

module.exports = {

  /**
   * Retrieve playerseason records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.playerseason.search(ctx.query);
    } else {
      return strapi.services.playerseason.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a playerseason record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.playerseason.fetch(ctx.params);
  },

  /**
   * Count playerseason records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.playerseason.count(ctx.query);
  },

  /**
   * Create a/an playerseason record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.playerseason.add(ctx.request.body);
  },

  /**
   * Update a/an playerseason record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.playerseason.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an playerseason record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.playerseason.remove(ctx.params);
  }
};
