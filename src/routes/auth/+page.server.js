import { createPool, sql, db } from "@vercel/postgres";
import { POSTGRES_URL } from "$env/static/private";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  login: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    const allUsers = await sql`select * from users where ${email}=email`;
    const User = allUsers.rows[0];
    console.log(User);
    if (!User) {
      return fail(400, { email, missing: true });
    }
    if (User.password !== password) {
      console.log(User.password);
      console.log(password);
      return fail(400, { email, incorrect: true });
    }

    // cookies.set("sessionid", await db.createSession(user), { path: "home" });

    // if (url.searchParams.has("redirectTo")) {
    //   redirect(303, url.searchParams.get("redirectTo"));
    // }

    // redirect(303, "home");

    return redirect(303, "home");
  },
};
