import { createPool, sql } from "@vercel/postgres";
import { POSTGRES_URL } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

// async function seed() {
//   const createTable = await sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id SERIAL PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) UNIQUE NOT NULL,
//       image VARCHAR(255),
//       "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );
//     `;

//   console.log(`Created "users" table`);

//   const users = await Promise.all([
//     sql`
//           INSERT INTO users (name, email, image)
//           VALUES ('Guillermo Rauch', 'rauchg@vercel.com', 'https://images.ctfassets.net/e5382hct74si/2P1iOve0LZJRZWUzfXpi9r/9d4d27765764fb1ad7379d7cbe5f1043/ucxb4lHy_400x400.jpg')
//           ON CONFLICT (email) DO NOTHING;
//       `,
//     sql`
//           INSERT INTO users (name, email, image)
//           VALUES ('Lee Robinson', 'lee@vercel.com', 'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg')
//           ON CONFLICT (email) DO NOTHING;
//       `,
//     sql`
//           INSERT INTO users (name, email, image)
//           VALUES ('Steven Tey', 'stey@vercel.com', 'https://images.ctfassets.net/e5382hct74si/4QEuVLNyZUg5X6X4cW4pVH/eb7cd219e21b29ae976277871cd5ca4b/profile.jpg')
//           ON CONFLICT (email) DO NOTHING;
//       `,
//   ]);
//   console.log(`Seeded ${users.length} users`);

//   return {
//     createTable,
//     users,
//   };
// }

// export async function load() {
//   const db = createPool({ connectionString: POSTGRES_URL });
//   const startTime = Date.now();

//   try {
//     const { rows: users } = await db.query("SELECT * FROM users");
//     const duration = Date.now() - startTime;
//     return {
//       users: users,
//       duration: duration,
//     };
//   } catch (error) {
//     if (error?.message === `relation "users" does not exist`) {
//       console.log(
//         "Table does not exist, creating and seeding it with dummy data now..."
//       );
//       // Table is not created yet
//       await seed();
//       await newDb();
//       const { rows: users } = await db.query("SELECT * FROM users");
//       const duration = Date.now() - startTime;
//       return {
//         users: users,
//         duration: duration,
//       };
//     } else {
//       throw error;
//     }
//   }
// }

// async function newDb() {
//   const createTable = await sql`
//     CREATE TABLE IF NOT EXISTS toromaikechodo (
//       id SERIAL PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) UNIQUE NOT NULL,
//       "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     )
//     `;
//   console.log("created new table toromaikechodo");
//   const user = await sql`
//   INSERT INTO users (name, email,)
//   VALUES ('Sai Bhaskar', 'sai@vercel.com')
//   ON CONFLICT (email) DO NOTHING;
// `;
//   console.log("complete ho gaya");

//   return { createTable, user };
// }

export const actions = {
  register: async ({ request }) => {
    const data = await request.formData();
    const db = createPool({ connectionString: POSTGRES_URL });
    const createTable = await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      fname VARCHAR(255) NOT NULL,
      lname VARCHAR(255) ,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `;
    try {
      await sql`
    INSERT INTO users (fname, lname, email, password)
    VALUES (${data.get("fname")}, ${data.get("lname")},${data.get(
        "email"
      )},${data.get("password")})
    ON CONFLICT (email) DO NOTHING;
    `;
      throw redirect(300, "/signin");
    } catch (error) {
      console.log("something went wrong in creating a use user");
      throw error;
    }
  },
};
