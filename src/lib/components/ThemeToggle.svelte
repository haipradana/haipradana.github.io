<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';
  import { Sun, Moon } from 'lucide-svelte';

  let mounted = false;

  onMount(() => {
    theme.init();
    mounted = true;
  });

  const toggleTheme = () => {
    theme.toggle();
  };
</script>

{#if mounted}
  <button
    on:click={toggleTheme}
    class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
    aria-label="Toggle theme"
    title="Toggle between light and dark mode"
  >
    {#if $theme === 'light'}
      <Moon class="w-5 h-5 text-gray-700 dark:text-gray-300" />
    {:else}
      <Sun class="w-5 h-5 text-gray-700 dark:text-gray-300" />
    {/if}
  </button>
{/if} 