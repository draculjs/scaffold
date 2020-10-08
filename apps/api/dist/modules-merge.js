"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = exports.resolvers = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _api = require("@dracul/user-backend");

var _api2 = require("@dracul/customize-backend");

var _graphql = require("./modules/base/graphql");

//BASE RESOLVERS
//BASE TYPEDEFS
const resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_graphql.resolvers, _api.securityResolvers, _api2.resolvers]);
exports.resolvers = resolvers;
const typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)([_graphql.types, _api.securityTypes, _api2.types]);
exports.typeDefs = typeDefs;