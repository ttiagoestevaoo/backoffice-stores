import { createLocalVue, mount } from "@vue/test-utils";
import ImportTransactions from "@/views/ImportTransactions.vue";
import Vuetify from "vuetify";

const vuetify = new Vuetify();
const localVue = createLocalVue();
let wrapper = null;

describe("ImportTransactions", () => {
  describe("Input File", () => {
    it("Appears if is not uploading", async () => {
      wrapper = mount(ImportTransactions, {
        localVue,
        vuetify,
      });
      const input_file = wrapper.find("[data-jest=input-file]");
      expect(input_file.exists()).toBeTruthy();
    });

    it("Dont appears if is not uploading", async () => {
      wrapper = mount(ImportTransactions, {
        localVue,
        vuetify,
      });
      wrapper.setData({ isUploading: true });
      await wrapper.vm.$nextTick();
      const input_file = wrapper.find("[data-jest=input-file]");
      expect(input_file.exists()).toBeFalsy();
    });
  });

  describe("Progess circle", () => {
    it("Appears when is uploading", async () => {
      wrapper = mount(ImportTransactions, {
        localVue,
        vuetify,
      });
      wrapper.setData({ isUploading: true });
      await wrapper.vm.$nextTick();
      const input_file = wrapper.find("[data-jest=progress-circle]");
      expect(input_file.exists()).toBeTruthy();
    });

    it("Dont appears when is not uploading", async () => {
      wrapper = mount(ImportTransactions, {
        localVue,
        vuetify,
      });
      wrapper.setData({ isUploading: false });
      await wrapper.vm.$nextTick();
      const input_file = wrapper.find("[data-jest=progress-circle]");
      expect(input_file.exists()).toBeFalsy();
    });
  });

  describe("Alert message", () => {
    it("Appears when uploading finished", async () => {
      wrapper = mount(ImportTransactions, {
        localVue,
        vuetify,
      });
      wrapper.setData({ messageOn: true });
      await wrapper.vm.$nextTick();
      const input_file = wrapper.find("[data-jest=alert-message]");
      expect(input_file.exists()).toBeTruthy();
    });

    it("Dont appears when is not uploading", async () => {
      wrapper = mount(ImportTransactions, {
        localVue,
        vuetify,
      });
      wrapper.setData({ messageOn: false });
      await wrapper.vm.$nextTick();
      const input_file = wrapper.find("[data-jest=alert-message]");
      expect(input_file.exists()).toBeFalsy();
    });
  });
});
