import { reactive } from 'vue';

const EventBus = reactive({
  announcements: [], 
  addAnnouncement(announcement) {
    this.announcements.push(announcement);
    this.$emit('announcementAdded', announcement); 
  },

  removeAnnouncement(index) {
    const removed = this.announcements.splice(index, 1);
    this.$emit('announcementRemoved', removed); 
  },

  getAnnouncements() {
    return this.announcements;
  },

  $emit(event, data) {

  },
});

export default EventBus;
