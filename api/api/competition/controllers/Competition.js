'use strict';

/**
 * Competition.js controller
 *
 * @description: A set of functions called "actions" for managing `Competition`.
 */

module.exports = {

  /**
   * Retrieve competition records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.competition.search(ctx.query);
    } else {
      return strapi.services.competition.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a competition record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.competition.fetch(ctx.params);
  },

  /**
   * Count competition records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.competition.count(ctx.query);
  },

  /**
   * Create a/an competition record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.competition.add(ctx.request.body);
  },

  /**
   * Update a/an competition record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.competition.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an competition record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.competition.remove(ctx.params);
  }
};
