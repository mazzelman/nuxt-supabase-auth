<script setup>
useHead({
  title: "Dashboard",
  meta: [
    {
      name: "description",
      content: "Dashboard page",
    },
  ],
});

// get access to the user
const user = useSupabaseUser();
// get access to the supabaseclient
const client = useSupabaseClient();
const router = useRouter();

async function logout() {
  try {
    const { error } = await client.auth.signOut();
    router.push("/login");
  } catch (error) {
    console.error("Sign out error", error);
  }
}
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {{ user?.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>
