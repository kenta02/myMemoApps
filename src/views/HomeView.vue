<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name: 'edit', params: { id: memo.id } }">
          <!-- idをもとにタイトルをデータが有る分だけ表示させる -->
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <!-- メモがない場合 -->
    <p v-else>メモは何もありません。</p>
  </div>
</template>

<!-- このファイルだけに適用する -->
<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>

<script>
export default {
  name: "HomeView",
  computed: {
    //条件分岐(メモがあるかどうか返す)
    hasMemos() {
      //本来はよくない。gettersを使って、stateの内容はstoresに処理を任せたほうがいい。
      // return this.$store.state.memos.length; //Bad

      // ベターな書き方
      return this.$store.getters.getCount;
    },
    memos() {
      // return this.$store.state.memos; //Bad

      return this.$store.getters.getAll;
    },
  },
};
</script> 