module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts/category/:category",
      handler: "post-category.findByCategory",
      config: {
        auth: false, // Adjust this according to your needs
      },
    },
  ],
};
