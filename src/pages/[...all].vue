<template>
  <n-empty size="large" description="你什么也找不到">
    <template #extra>
      <n-button size="small">
        看看别的
      </n-button>
    </template>
  </n-empty>
</template>

<script setup lang="ts">
import { NEmpty, NButton } from 'naive-ui'
</script>