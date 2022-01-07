<template>
  <div>
    <v-alert type="success" v-if="messageOn" data-jest="alert-message">
      Transações importadas com sucesso
    </v-alert>
    <h2 class="col-12 text-center">Importar transações</h2>
    <v-card flat class="text-center" v-if="!isUploading">
      <v-file-input
        v-model="file"
        accept="text/plain"
        label="Selecione o arquivo"
        data-jest="input-file"
        @change="onChangeFile"
      />
      <v-btn @click="uploadFile" :disabled="!file">Upload </v-btn>
    </v-card>
    <v-progress-circular
      v-else
      indeterminate
      color="primary"
      data-jest="progress-circle"
    ></v-progress-circular>
  </div>
</template>
<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { UploadTransactionsService } from "@/services";
import { UploadingMixin } from "@/mixins";

@Component
export default class App extends mixins(UploadingMixin) {
  file: any = null;
  private messageOn = false;

  private uploadProgress: {
    [key: string]: { state: string; percentage: number };
  } = {};

  onChangeFile(file: File): void {
    console.log(file);
  }

  async uploadFile(): Promise<boolean> {
    this.setIsUploading(true);
    try {
      await UploadTransactionsService.upload(this.file);
      this.setIsUploading(false);
      this.file = null;
      this.messageOn = true;

      setTimeout(() => {
        this.messageOn = false;
      }, 3000);
      return Promise.resolve(true);
    } catch (error) {
      this.setIsUploading(false);
      return Promise.reject(false);
    }
  }
}
</script>
