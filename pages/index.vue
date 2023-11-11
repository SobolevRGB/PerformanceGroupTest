<template>
  <div class="main-page">
    <h1>Список пользователей</h1>
    <table class="main-page__table">
      <thead>
        <tr>
          <th>Имя</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ name, email, id } in users"
          :key="id"
          @click="goToUser(id)"
        >
          <td>{{ name }}</td>
          <td>{{ email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  async asyncData({ app }) {
    const users = await app.$api.getUsers();
    return { users: users };
  },
  methods: {
    goToUser(userId: number): void {
      this.$router.push(`/users/${userId}`);
    },
  },
});
</script>

<style lang="scss" scoped>
$shadow: #0e1119;
$red: #fb667a;
$row-hover: #464a52;
.main-page {
  &__table {
    text-align: left;
    overflow: hidden;
    width: 50%;
    margin: 0 auto;
    display: table;
    padding: 0 0 8em 0;

    td {
      font-weight: normal;
      font-size: 1em;
      box-shadow: 0 2px 2px -2px $shadow;
      &:first-child {
      color: $red;
    }
    }

    th {
      background-color: #1f2739;
      cursor: default;
    }

    td,
    th {
      padding: 2% 0 2% 2%;
    }

    tr {
      &:nth-child(odd) {
        background-color: #323c50;
      }
      &:nth-child(even) {
        background-color: #2c3446;
      }
      &:hover {
        cursor: pointer;
        background-color: $row-hover;
        box-shadow: 0 6px 6px -6px $shadow;
      }
    }
  }
}
</style>
