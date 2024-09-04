export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export const middleware = async (
  { req, res, route }: { req: any; res: any; route: string },
  next: any,
) => {};
