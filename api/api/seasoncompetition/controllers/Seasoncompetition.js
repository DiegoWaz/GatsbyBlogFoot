'use strict';

/**
 * Seasoncompetition.js controller
 *
 * @description: A set of functions called "actions" for managing `Seasoncompetition`.
 */

module.exports = {

  /**
   * Retrieve seasoncompetition records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.seasoncompetition.search(ctx.query);
    } else {
      return strapi.services.seasoncompetition.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a seasoncompetition record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.seasoncompetition.fetch(ctx.params);
  },

  /**
   * Count seasoncompetition records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.seasoncompetition.count(ctx.query);
  },

  /**
   * Create a/an seasoncompetition record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.seasoncompetition.add(ctx.request.body);
  },

  /**
   * Update a/an seasoncompetition record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.seasoncompetition.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an seasoncompetition record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.seasoncompetition.remove(ctx.params);
  }
};
