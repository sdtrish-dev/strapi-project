'use strict';

/**
 * page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findByCategory(ctx) {
    const { categorySlug } = ctx.params;

    const category = await strapi.db.query("api::category.category").findOne({
      where: { slug: categorySlug },
      populate: { pages: true },
    });

    if (!category) {
      return ctx.notFound("Category not found");
    }

    const pages = await strapi.db.query("api::page.page").findMany({
      where: {
        categories: category.id,
      },
    });

    ctx.body = pages;
  },
}));

