export default async function handle(req, res) {
  if (req.method === "POST") {
    const { userName, password } = req.body;
    let data = {};
    if (userName === "demo@coralmango.com" && password === "demo123") {
      data = {
        isAuthenticated: true,
      };
    } else {
      data = {
        isAuthenticated: false,
      };
    }
    console.log("user login status",data )

    res.json(data);
  }
}


