import app from "./app";

export default (): void => {
  const port = process.env.PORT;
  app.listen(port, function() {
    console.log("Express server listening on port " + port);
  });
};
