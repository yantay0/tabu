<template>
    <q-page class="q-pa-md">
      <GmapMap
        :center="{ lat: 43.2220, lng: 76.8512 }" 
        :zoom="12"
        style="width: 100%; height: 400px;"
      >
        <GmapMarker
          :position="{ lat: 43.2220, lng: 76.8512 }"  
          :clickable="true"
          :draggable="false"
        />
      </GmapMap>
    </q-page>
  </template>
  
  <script>
  import { GmapMap, GmapMarker } from '@fawmi/vue-google-maps';
  
  export default {
    name: 'Map',
    components: {
      GmapMap,
      GmapMarker,
    },
  };
  </script>

  