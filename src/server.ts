import app from "./app";

const port = process.env.PORT;

if (!port) process.exit(1);

app.listen(port, () => console.log(`Running on http://localhost:${port}`));
