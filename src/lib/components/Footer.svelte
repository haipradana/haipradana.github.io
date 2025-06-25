<script lang="ts">
  import { Github, Linkedin, Mail, Twitter } from 'lucide-svelte';
</script>

<footer class="border-t border-gray-200 dark:border-gray-800 mt-16">
  <div class="max-w-4xl mx-auto px-4 py-6">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
        © 2024 Your Name. All rights reserved.
      </p>
      
      <div class="flex space-x-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          aria-label="GitHub"
        >
          <Github class="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin class="w-4 h-4" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          aria-label="Twitter"
        >
          <Twitter class="w-4 h-4" />
        </a>
        <a
          href="mailto:your.email@example.com"
          class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          aria-label="Email"
        >
          <Mail class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</footer>