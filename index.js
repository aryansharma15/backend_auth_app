const app = require("./app")

const {PORT} = process.env
// above line translates to "process.env.PORT"

app.listen(PORT, () => "Server running at port 4000")