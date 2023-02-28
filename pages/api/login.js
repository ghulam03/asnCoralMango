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


