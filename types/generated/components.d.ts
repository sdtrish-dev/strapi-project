import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockHero extends Schema.Component {
  collectionName: 'components_block_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String;
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlockSlider extends Schema.Component {
  collectionName: 'components_block_sliders';
  info: {
    displayName: 'Slider';
    icon: 'landscape';
  };
  attributes: {
    sliderImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Attribute.String;
  };
}

export interface BlockTwoColumnTextImage extends Schema.Component {
  collectionName: 'components_block_two_column_text_images';
  info: {
    displayName: 'Two Column Text Image';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    content: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    flip: Attribute.Boolean;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    categories: Attribute.Relation<
      'layout.footer',
      'oneToMany',
      'api::category.category'
    >;
    menuLinks: Attribute.Component<'links.menu-links', true>;
    footerLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'logo';
    icon: 'landscape';
  };
  attributes: {
    logoImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoText: Attribute.String;
  };
}

export interface LinksMenuLinks extends Schema.Component {
  collectionName: 'components_links_menu_links';
  info: {
    displayName: 'link';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.hero': BlockHero;
      'block.slider': BlockSlider;
      'block.two-column-text-image': BlockTwoColumnTextImage;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'links.menu-links': LinksMenuLinks;
    }
  }
}
