export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 3500)); // Simulate delay
  return {
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
  };
});
