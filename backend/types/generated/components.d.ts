import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsContent extends Schema.Component {
  collectionName: 'components_components_contents';
  info: {
    displayName: 'content';
    icon: 'filter';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Blocks;
    Image: Attribute.Media;
    Disabled: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.content': ComponentsContent;
    }
  }
}
