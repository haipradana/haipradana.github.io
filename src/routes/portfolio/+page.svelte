<script lang="ts">
  import { projects, categories } from '$lib/data/projects';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { Filter } from 'lucide-svelte';

  let selectedCategory = 'all';
  let filteredProjects = projects;

  $: {
    if (selectedCategory === 'all') {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter(project => project.category === selectedCategory);
    }
  }

  const selectCategory = (categoryId: string) => {
    selectedCategory = categoryId;
  };
</script>

<svelte:head>
  <title>Portfolio - Your Name</title>
  <meta name="description" content="Portfolio of projects by Your Name - Developer and Designer" />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 py-12">
  <!-- Header -->
  <section class="text-center mb-12">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
      Portfolio
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      A collection of projects showcasing my skills
    </p>
  </section>

  <!-- Filter Section -->
  <section class="mb-12">
    <div class="flex items-center justify-center mb-6">
      <Filter class="w-5 h-5 text-gray-500 dark:text-gray-500 mr-2" />
      <span class="text-gray-600 dark:text-gray-400 font-medium">Filter by category:</span>
    </div>
    
    <div class="flex flex-wrap justify-center gap-3">
      {#each categories as category}
        <button
          on:click={() => selectCategory(category.id)}
          class="px-4 py-2 rounded-full font-medium transition-all duration-200 border
                 {selectedCategory === category.id
                   ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 border-gray-800 dark:border-gray-200 shadow-lg'
                   : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                 }"
        >
          {category.label}
          <span class="ml-2 px-2 py-0.5 text-xs rounded-full
                       {selectedCategory === category.id
                         ? 'bg-white/20 text-white dark:bg-gray-900/20 dark:text-gray-900'
                         : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                       }">
            {category.count}
          </span>
        </button>
      {/each}
    </div>
  </section>

  <!-- Projects Grid -->
  <section>
    <div class="mb-6">
      <p class="text-center text-gray-600 dark:text-gray-400">
        Showing {filteredProjects.length} of {projects.length} projects
        {#if selectedCategory !== 'all'}
          in <span class="font-semibold text-gray-800 dark:text-gray-200">
            {categories.find(c => c.id === selectedCategory)?.label}
          </span>
        {/if}
      </p>
    </div>

    {#if filteredProjects.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredProjects as project}
          <ProjectCard {project} />
        {/each}
      </div>
    {:else}
      <div class="text-center py-16">
        <div class="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <Filter class="w-12 h-12 text-gray-400 dark:text-gray-600" />
        </div>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">
          No projects in this category
        </p>
        <button
          on:click={() => selectCategory('all')}
          class="px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg transition-colors"
        >
          View All Projects
        </button>
      </div>
    {/if}
  </section>
</div>