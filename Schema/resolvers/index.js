const resolvers = {
  Query: {
    findAllCustomers: async (_, args, context) =>
      await context.models.customerModel.queries.findAllCustomers(),
  },
  Mutation: {
    addCustomer: async (_, args, context) =>
      await context.models.customerModel.mutations.addCustomer(
        JSON.parse(JSON.stringify(args.newCustomer))
      ),
    deleteCustomer: async (_, args, context) =>
      await context.models.customerModel.mutations.deleteCustomer(
        JSON.parse(JSON.stringify(args.id))
      ),
    findCustomer: async (_, args, context) =>
      await context.models.customerModel.mutations.findCustomer(
        JSON.parse(JSON.stringify(args.id))
      ),
  },
};

module.exports = resolvers;
