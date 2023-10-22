<template>
  <n-message-provider>
    <n-dialog-provider>
      <main font-sans p="x-4 y-10" text="gray-700 dark:gray-200">
        <RouterView />
      </main>
    </n-dialog-provider>
  </n-message-provider>
</template>

<script setup lang="ts">
import { NMessageProvider, NDialogProvider } from 'naive-ui'
</script>
