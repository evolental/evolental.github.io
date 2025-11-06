<template>
  <div>
    <!-- این بخش ثابت برای همه صفحات -->
    <nav style="display: flex; gap: 10px; background: #f3f3f3; padding: 10px;">
      <NuxtLink to="/">صفحه اصلی</NuxtLink>
      <NuxtLink to="/profile">پروفایل</NuxtLink>
    </nav>

    <!-- اینجا صفحات مختلف لود می‌شن -->
    <NuxtPage />
  </div>
</template>
