"use strict";

/**
 * page router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

const customRoutes = [
  {
    method: "GET",
    path: "/pages/category/:categorySlug",
    handler: "page.findByCategory",
    config: {
      policies: [],
    },
  },
];

module.exports = createCoreRouter("api::page.page", {
  config: {
    find: { policies: [] },
    findOne: { policies: [] },
    count: { policies: [] },
    create: { policies: [] },
    update: { policies: [] },
    delete: { policies: [] },
  },
  routes: customRoutes,
});
