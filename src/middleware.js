import { getSession } from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const response = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  const auth = await getSession();

  if (auth) {
    const userEmail = auth?.user?.email;
    const userAvatar = auth?.user?.picture;
    response.headers.set("x-api-key", userEmail);
    response.headers.set("x-avatar", userAvatar);

    // response.headers.set(`Set-cookie`, `picture=${userAvatar};path=/`);
    // response.cookies.set({
    //   name: "picture",
    //   value: userAvatar,
    //   path: "/",
    //   // httpOnly: true,
    //   maxAge: 86400,
    // });
  }

  if (pathname.startsWith("/api/auth/logout")) {
    response.headers.remove("x-api-key");
    response.headers.remove("x-avatar");
    // response.cookies.delete("picture");
  }

  return response;
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
