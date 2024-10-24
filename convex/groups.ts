import {v} from "convex/values";
import {mutation, query} from "./_generated/server";
import {validateToken} from "../utils/validateToken";
export const get = query({
  args: {token: v.any()},
  handler: async (ctx, {token}) => {
    if (token) {
      const data = validateToken(token);
      return await ctx.db.query("groups").collect();
    }
    return "no token";
  },
});
export const getGroup = query({
  args: {id: v.id("groups")},
  handler: async (ctx, {id}) => {
    return await ctx.db
      .query("groups")
      .filter((q) => q.eq(q.field("_id"), id))
      .unique();
  },
});
export const create = mutation({
  args: {
    description: v.string(),
    name: v.string(),
    icon_url: v.string(),
  },
  handler: async ({db}, args) => {
    await db.insert("groups", args);
  },
});
