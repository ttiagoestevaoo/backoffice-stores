// mixins.js
import { Component, Vue } from "vue-property-decorator";

// You can declare mixins as the same style as components.
@Component
export class UploadingMixin extends Vue {
  isUploading = false;

  setIsUploading(isUploading: boolean): void {
    this.isUploading = isUploading;
  }
}
