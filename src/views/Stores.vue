/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <v-card>
    <h2 class="col-12 text-center">Transações por loja</h2>
    <v-list>
      <v-list-group v-for="(item, key) in stores" :key="key" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title
              :data-jest="`store_${key}`"
              class="d-flex justify-space-between"
            >
              <p>
                {{ `${item.name} -- ${item.owner}` }}
              </p>
              <strong>R$ {{ getTotalTransactions(item.transactions) }}</strong>
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <th class="text-left pl-4">CPF</th>
              <th class="text-left pl-4">CARD</th>
              <th class="text-left pl-4">TIPO DE TRANSAÇÃO</th>
              <th class="text-left pl-4">DIA</th>
              <th class="text-left pl-4">HORÁRIO</th>
              <th class="text-left pl-4">VALOR</th>
            </thead>
            <tbody>
              <tr
                v-for="(transaction, index) in item.transactions"
                :key="index"
              >
                <td :data-jest="`cpf_${index}`">{{ transaction.cpf }}</td>
                <td :data-jest="`card_${index}`">{{ transaction.card }}</td>
                <td :data-jest="`transaction_type_${index}`">
                  {{ transaction.transaction_type.name }}
                </td>
                <td :data-jest="`created_at_${index}`">
                  {{ moment(transaction.created_at).format("DD/MM/YYYY") }}
                </td>
                <td :data-jest="`time_at_${index}`">
                  {{
                    moment(transaction.time_at, "h:mm:ss a").format("hh:mm:ss")
                  }}
                </td>
                <td :data-jest="`amount_${index}`">
                  R$ {{ transaction.amount }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { StoreService } from "@/services";
import { IStore, ITransaction } from "@/models";
import moment from "moment";

@Component
export default class Stores extends Vue {
  stores: IStore[] = [];
  moment = moment;

  mounted(): void {
    StoreService.list()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => {
        this.stores = response;
      })
      .catch();
  }

  getTotalTransactions(transactions: Array<ITransaction>): number {
    let total = 0;

    Object.values(transactions).forEach((transaction) => {
      total += transaction.amount;
    });

    return total;
  }
}
</script>
