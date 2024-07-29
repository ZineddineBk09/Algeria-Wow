import { getSession } from "next-auth/react";
import {
  privateRoutes,
  authRoutes,
  DEFAULT_REDIRECT_LOGIN_URL,
  DEFAULT_REDIRECT_HOME_URL,
} from "~/routes";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export const middleware = async (
  { req, res, route }: { req: any; res: any; route: string },
  next: any,
) => {};
