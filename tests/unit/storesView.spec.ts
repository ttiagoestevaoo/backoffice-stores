import { createLocalVue, mount } from "@vue/test-utils";
import Stores from "@/views/Stores.vue";
import Vuetify from "vuetify";
import storesMockedPayload from "../mocks/storesMockedPayload";
import moment from "moment";

const vuetify = new Vuetify();
const localVue = createLocalVue();
const wrapper = mount(Stores, {
  localVue,
  vuetify,
});

describe("Stores", () => {
  it("Valida lista de lojas", async () => {
    wrapper.setData({ stores: storesMockedPayload });
    await wrapper.vm.$nextTick();
    const first_store = wrapper.find("[data-jest=store_0");
    expect(first_store.exists()).toBeTruthy();
    expect(first_store.text()).toBe(
      `${storesMockedPayload[0].name} -- ${storesMockedPayload[0].owner}`
    );
  });

  it("Valida lista de transações das lojas", async () => {
    wrapper.setData({ stores: storesMockedPayload });
    await wrapper.vm.$nextTick();
    const first_store = wrapper.find("[data-jest=store_0");
    expect(first_store.exists()).toBeTruthy();
    first_store.trigger("click");

    await wrapper.vm.$nextTick();
    expect(wrapper.find("[data-jest=cpf_0").exists()).toBeTruthy();
    expect(wrapper.find("[data-jest=cpf_0").text()).toEqual(
      String(storesMockedPayload[0].transactions[0].cpf)
    );

    expect(wrapper.find("[data-jest=amount_0").exists()).toBeTruthy();
    expect(wrapper.find("[data-jest=amount_0]").text()).toBe(
      `R$${storesMockedPayload[0].transactions[0].amount}`
    );
    expect(wrapper.find("[data-jest=card_0").exists()).toBeTruthy();
    expect(wrapper.find("[data-jest=card_0").text()).toBe(
      storesMockedPayload[0].transactions[0].card
    );
    expect(wrapper.find("[data-jest=transaction_type_0").exists()).toBeTruthy();
    expect(wrapper.find("[data-jest=transaction_type_0").text()).toBe(
      storesMockedPayload[0].transactions[0].transaction_type.name
    );

    expect(wrapper.find("[data-jest=created_at_0").exists()).toBeTruthy();
    expect(wrapper.find("[data-jest=created_at_0").text()).toBe(
      moment(storesMockedPayload[0].transactions[0].created_at).format(
        "DD/MM/YYYY"
      )
    );

    expect(wrapper.find("[data-jest=time_at_0").exists()).toBeTruthy();
    expect(wrapper.find("[data-jest=time_at_0").text()).toBe(
      moment(
        storesMockedPayload[0].transactions[0].time_at,
        "h:mm:ss a"
      ).format("hh:mm:ss")
    );
  });
});
