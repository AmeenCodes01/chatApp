import {v} from "convex/values";
import {mutation, query} from "./_generated/server";
import {generateToken} from "../utils/generateToken";
export const login = mutation({
  args: {username: v.string(), password: v.string()},
  handler: async (ctx, {username, password}) => {
    const token = generateToken({username, password});
    const user = await ctx.db
      .query("users")
      .filter((user) => user.eq(user.field("username"), username))
      .unique();
    user.token = token;
    return user;
  },
});
