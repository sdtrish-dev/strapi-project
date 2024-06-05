"use strict";

/**
 * post-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async findByCategory(ctx) {
    const { category } = ctx.params;

    const posts = await strapi.entityService.findMany("api::post.post", {
      filters: {
        categories: {
          name: category,
        },
      },
    });

    return posts;
  },
}));
