<script setup>
useHead({
  title: "Confirm",
  meta: [
    {
      name: "confirm",
      content: "confirm page",
    },
  ],
});

const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) {
      // Redirect to protected page
      return navigateTo("/dashboard");
    } else {
      // Redirect to login page
      return navigateTo("/login");
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>Waiting for login...</div>
</template>
