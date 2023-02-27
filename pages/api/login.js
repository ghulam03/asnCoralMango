export default async function handle(req, res) {
  if (req.method === "POST") {
    const { userName, password } = req.body;
    let data = {};
    if (userName === "demo@coralmango.com" && password === "demo123") {
      // const
      data = {
        isAuthenticated: true,
      };
    } else {
      data = {
        isAuthenticated: false,
      };
    }
    console.log(data)

    res.json(data);
  }
}

// res.redirect(307, '/')
// }
// const result = await prisma.user.create({
//   data: {
//     id,
//     name: name,
//     email: email,
//     password:password,
//     age: age,
//     country: country
//   },
// });

// res.status(200).json({ aname, aage });
//   }

// }
