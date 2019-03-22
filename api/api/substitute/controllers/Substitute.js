'use strict';

/**
 * Substitute.js controller
 *
 * @description: A set of functions called "actions" for managing `Substitute`.
 */

module.exports = {

  /**
   * Retrieve substitute records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.substitute.search(ctx.query);
    } else {
      return strapi.services.substitute.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a substitute record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.substitute.fetch(ctx.params);
  },

  /**
   * Count substitute records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.substitute.count(ctx.query);
  },

  /**
   * Create a/an substitute record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.substitute.add(ctx.request.body);
  },

  /**
   * Update a/an substitute record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.substitute.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an substitute record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.substitute.remove(ctx.params);
  }
};
