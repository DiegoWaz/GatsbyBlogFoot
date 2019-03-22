'use strict';

/**
 * Lineupplayer.js controller
 *
 * @description: A set of functions called "actions" for managing `Lineupplayer`.
 */

module.exports = {

  /**
   * Retrieve lineupplayer records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.lineupplayer.search(ctx.query);
    } else {
      return strapi.services.lineupplayer.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a lineupplayer record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.lineupplayer.fetch(ctx.params);
  },

  /**
   * Count lineupplayer records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.lineupplayer.count(ctx.query);
  },

  /**
   * Create a/an lineupplayer record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.lineupplayer.add(ctx.request.body);
  },

  /**
   * Update a/an lineupplayer record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.lineupplayer.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an lineupplayer record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.lineupplayer.remove(ctx.params);
  }
};
