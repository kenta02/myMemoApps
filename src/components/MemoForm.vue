<template>
  <div class="new">
    <p>タイトル</p>
    <div><input type="text" v-model="title" /></div>
    <p>本文</p>
    <div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        style="margin: 10px"
        v-model="content"
      ></textarea
      ><!-- /# -->
    </div>
    <div class="center">
      <button @click="save">保存</button>
      <button @click="remove" v-if="memo.id">削除</button>
    </div>
  </div>
</template>

<script>
//外のファイルからこのコンポーネントが使えるようになる
export default {
  name: "MemoForm",
  props: [
    //editViewから値を受けたわすことができる
    "memo",
  ],
  data() {
    return {
      //入力エリア・本文エリアとのデータバインディング
      //   vuexにデータを渡す
      title: this.memo.title,
      content: this.memo.content,
    };
  },
  methods: {
    save() {
      let memo = {
        // v-modelを通して入力されたデータをsaveメソッドのミューテーションで渡す
        title: this.title,
        content: this.content,
      };

      // 対象データが既に存在する場合
      if (this.memo.id) {
        memo.id = this.memo.id;
      }

      //コンポーネントからは、 this.$store.stateで参照できる
      //   storeのミューテーションにデータを渡す
      this.$store.commit("save", memo);

      //データ送信後、ルーターをトップページに戻す
      this.$router.push("/");
    },
    remove() {
      //コンポーネントからは、 this.$store.stateで参照できる
      //   storeのミューテーションにデータを渡す
      this.$store.commit("delete", this.memo.id);
      //データ送信後、ルーターをトップページに戻す
      this.$router.push("/");
    },
  },
};
</script>

  
  <style scoped>
div {
  margin-bottom: 10px;
}
input[type="text"] {
  width: 100%;
}
textarea {
  width: 100%;
  height: 15em;
}
button {
  width: 5em;
  margin: 3px;
}

.center {
  text-align: center;
}
</style>