import { createServer } from "./infrastructure/server";
const { app } = createServer();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
