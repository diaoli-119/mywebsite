const { GraphQLScalarType } = require('graphql');

const resolvers = {
  JSON: new GraphQLScalarType({
    name: 'JSON',
    description: 'Custom JSON scalar type',
    serialize(value) {
      return value;
    },
    parseValue(value) {
      return value;
    },
    parseLiteral(ast) {
      return ast.value;
    },
  }),

  Query: {
    hello: () => 'Hello world',
    getVideoUrls: async (_, __, { dataSources }) => {
      const idAndLinks = await dataSources.VideoURLS.getVideoUrls();
      console.log('idAndLinks =', idAndLinks);
      return { items: idAndLinks };
    },
  },

  Mutation: {
    signIn: async (_, args, { dataSources }) => {
      const verifiedUserInfo = dataSources.Accounts.signIn({
        userEmail: args.email,
        userPassword: args.password,
      });
      return verifiedUserInfo;
    },
    register: async (_, args, { dataSources }) => {
      const registeredUser = await dataSources.Accounts.register({
        userEmail: args.email,
        userPassword: args.password,
        confirmPassword: args.confirmPassword,
      });
      return registeredUser;
    },
  },
};

module.exports = {
  resolvers,
};
