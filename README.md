# Nuxt 3 with supabase auth

This is a little template to get started with nuxt 3 and supabase auth.  
With this template you can register an user with email and password.  
You can login to the dashboard and logout from the dashboard.

## Setup

1. Please setup a supabase account first. [Supabase](https://supabase.com).
2. Download this repository and put it where you like.
3. In the project folder install the dependencies.

```bash
# npm
npm install
```

4. Then use the .env.example file and rename it to .env and put in the "SUPABASE_URL" and the
   "SUPABASE_KEY". You can get these values in the supabase dashboard, when you created a new project.
5. In your supabase project under "authentication -> URL Configuration", change the url to:

```bash
http://localhost:3000/confirm
```

6. Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Routes

These routes are available in the project.

```bash
# home
/

# login
/login

# register
/register

# dashboard (protected)
/dashboard

```
