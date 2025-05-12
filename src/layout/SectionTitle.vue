<template>
  <h2 class="section-title">
    <slot></slot>
  </h2>
</template>

<style scoped lang="scss">
.section-title {
  font-size: 1.875rem;
  font-weight: 600;
  margin-bottom: map-get($spacing, 'xl');
  text-align: center;
}
</style>