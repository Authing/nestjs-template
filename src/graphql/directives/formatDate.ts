import { SchemaDirectiveVisitor } from 'apollo-server-express';
import { defaultFieldResolver, GraphQLString } from 'graphql';
import moment from 'moment';

export class DateFormatDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    // const { format } = this.args;
    field.resolve = async function (...args) {
      const date = await resolve.apply(this, args);
      // 这里其实可以根据 Format 来格式化
      return moment(new Date(date)).format();
    };
    // The formatted Date becomes a String, so the field type must change:
    field.type = GraphQLString;
  }
}
