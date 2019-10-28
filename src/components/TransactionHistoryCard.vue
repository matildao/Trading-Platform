<template>
  <v-card color="white darken-3" class="selling-card">
    <v-divider />
    <v-simple-table class="sell-table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left sort-button">Made By</th>
            <th class="text-left sort-button">Asset</th>
            <th class="text-left">Action</th>
            <th class="text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in history.slice(Math.max(history.length - 5, 0))"
            :key="i"
            class="table-row"
          >
            <td></td>
            <td>{{ item.email }}</td>
            <td>{{ item.note }}</td>
            <td>{{ item.type }}</td>
            <td>{{ getCorrectTime(item.occurred) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
  export default {
    props: ["changeViewItem", "history"],
    methods: {
      getCorrectTime(dateString) {
        var d = new Date(dateString),
          dformat =
            [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
            " " +
            [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

        return dformat;
      }
    }
  };
</script>

<style scoped>
  .selling-card {
    width: 100%;
    border-radius: 0;
    margin-bottom: 1em;
    margin-right: 1em !important;
    color: rgb(44, 44, 44);
  }

  .card-content {
    display: flex;
    flex-direction: row;
    padding: 0.8em;
    color: rgb(105, 105, 105);
    border-bottom: 1px solid rgb(49, 49, 49);
  }

  .title-content {
    display: flex;
    flex-direction: row;
  }

  .table-row:hover {
    cursor: pointer;
    transition: 0.5s;
  }
</style>
