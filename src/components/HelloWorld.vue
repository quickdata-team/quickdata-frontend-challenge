<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="listTodo">
        <h3>TO DO</h3>
        <label for="item">Adicione um novo item</label><br /><br />
        <input v-model="item" />
        <button @click="newItem">Add +</button><br />
        <span class="title"> Itens </span><br />
        <ul id="listOne">
          <li v-for="(value, index) in itens" :key="value + index">
            👉 {{ value }}
          </li>
        </ul>
      </div>
      <div class="listCheck">
        <h3>CHECKED</h3>
        <label for="item">Adicione um novo item checkado</label><br /><br />
        <input v-model="itemChecked" />
        <button @click="newItemChecked">Add +</button><br />
        <span class="title"> Itens checkados </span><br />
        <ul id="listOne">
          <li v-for="(value, index) in itensCheck" :key="value + index">
            ✅ {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      item: "",
      itemChecked: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    ...mapMutations("todo", ["addItem", "checkItem"]),
    newItem() {
      this.addItem(this.item);
      this.item = "";
    },
    newItemChecked() {
      this.checkItem(this.itemChecked);
      this.itemChecked = "";
    },
  },
  computed: {
    ...mapGetters("todo", {
      itens: "getItens",
      itensCheck: "getItensCheck",
    }),
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
}
.container {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: auto auto;
  align-items: start;
}
</style>
