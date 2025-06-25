<script lang="ts">
  import type { Project } from '$lib/data/projects';
  import { ExternalLink, Github, Calendar } from 'lucide-svelte';

  export let project: Project;
</script>

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300">
  <div class="relative overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div class="flex space-x-2">
          {#if project.demoUrl}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
              aria-label="View demo"
            >
              <ExternalLink class="w-4 h-4 text-white" />
            </a>
          {/if}
          {#if project.githubUrl}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
              aria-label="View source code"
            >
              <Github class="w-4 h-4 text-white" />
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <div class="p-6">
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-semibold text-lg text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
        <a href="/portfolio/{project.slug}" class="hover:underline">
          {project.title}
        </a>
      </h3>
      <div class="flex items-center text-sm text-gray-500 dark:text-gray-500">
        <Calendar class="w-4 h-4 mr-1" />
        {project.year}
      </div>
    </div>

    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
      {project.description}
    </p>

    <div class="flex flex-wrap gap-2">
      {#each project.tags as tag}
        <span class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
          {tag}
        </span>
      {/each}
    </div>
  </div>
</div>