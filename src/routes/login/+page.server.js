export const actions = {
    login: async ({request, locals, url}) => {
        try {
            // Get form data
            const form = await request.formData();
            const email = form.get("email");
            const password = form.get("password");
        } catch (e) {
            return {
                status: 300,
                message: "Invalid email or password",
            };
        }
    }
}