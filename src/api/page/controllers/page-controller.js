"use strict";

module.exports = {
  async findByCategory(ctx) {
    const { category } = ctx.params;
    try {
      const pages = await strapi.query("page").find({ categories: category });
      return pages;
    } catch (err) {
      // Handle errors appropriately
      console.error("Error fetching pages by category:", err);
      return ctx.badRequest("Failed to fetch pages by category");
    }
  },
};
