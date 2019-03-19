'use strict';

/**
 * Player.js controller
 *
 * @description: A set of functions called "actions" for managing `Player`.
 */

module.exports = {

  /**
   * Retrieve player records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.player.search(ctx.query);
    } else {
      return strapi.services.player.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a player record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.player.fetch(ctx.params);
  },

  /**
   * Count player records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.player.count(ctx.query);
  },

  /**
   * Create a/an player record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.player.add(ctx.request.body);
  },

  /**
   * Update a/an player record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.player.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an player record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.player.remove(ctx.params);
  }
};
