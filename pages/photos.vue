<template>
  <div>
    <div class="cover-back">&nbsp;</div>
    <div class="cover">
      <div class="cover-container container mx-auto">
        <div class="cover-title">
          <h1>{{ $t('photos.title') }}</h1>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto content">
      <div>
        <h2 class="index-icon-title py-2 mb-2">
          <i class="fa fas fa-newspaper"></i>
          {{ $t('photos.all') }}
        </h2>
        <photos :limit="null" />
      </div>
    </div>
  </div>
</template>

<script>
import Photos from '../components/Photos.vue'
export default {
  components: {
    'photos': Photos
  }
}
</script>