module.exports = {
    env: {
        DATABASE: 'mongodb://localhost:27017/stannest',
     //   DB_URI: 'mongodb+srv://ghulamabbas_bookit:bookit258@bookit.ghtfw.mongodb.net/bookit?retryWrites=true&w=majority',

        STRIPE_API_KEY: 'pk_test_51HxxbmA7jBHqn8SBcETk2bjtgQHeM90ymofTiNsoYuwKe8AY9qWHS7begB1DFdE0CS3dCjTYG89GsCD0ipn9dY2W003bNjqKk0',
        STRIPE_SECRET_KEY: 'sk_test_51HxxbmA7jBHqn8SBr6XvJHgvPEXC5twfPYtXuqvPPfJ5Uj0QCYuN9sKS5VKtWvj7hjo08V7bpyieCK10LwdN2jF600jvXBOoLD',

        STRIPE_WEBHOOK_SECRET: 'whsec_2KX5p6VLfvTsRHZv4dclcLjW7ATWilQt',

        CLOUDINARY_CLOUD_NAME: 'bookit',
        CLOUDINARY_API_KEY: '561531929141456',
        CLOUDINARY_API_SECRET: 'vJsEgd2OiuUpPupIYZtrl7BycaE',

        SMTP_HOST: "smtp.mailtrap.io",
        SMTP_PORT: "2525",
        SMTP_USER: "21f85c3da6b84b",
        SMTP_PASSWORD: "72cb3edce57f85",
        SMTP_FROM_EMAIL: "noreply@bookit.com",
        SMTP_FROM_NAME: "BookIT",

        NEXTAUTH_URL: 'https://bookit.vercel.app',
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
}