import { z } from 'zod';
const usernameSchema = z
    .string()
    .min(3)
    .refine(async (username) => {
    // Simulate asynchronous check against a database or API
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network latency
    const isUsernameTaken = await checkUsernameAvailability(username); // Assume this function checks username in a database
    return !isUsernameTaken; // Username is valid if not taken
}, { message: 'Username is already taken' });
async function validateUsername(username) {
    try {
        const validatedUsername = await usernameSchema.parseAsync(username);
        console.log(`Username "${validatedUsername}" is valid and available.`);
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            console.error('Username validation failed:', error.errors);
        }
        else {
            console.error('Unexpected error:', error);
        }
    }
}
// Assume checkUsernameAvailability is an asynchronous function that checks username availability
async function checkUsernameAvailability(username) {
    // ... (Implementation to check username in database or API) ...
    // Simulate:
    const takenUsernames = ['takenUser', 'anotherTakenUser'];
    return takenUsernames.includes(username);
}
validateUsername('newUser123'); // Validates asynchronously, assuming "newUser123" is available
// validateUsername("takenUser"); // Validates asynchronously, throws ZodError: Username is alread
//# sourceMappingURL=index.js.map