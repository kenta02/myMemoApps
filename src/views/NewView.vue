<template>
  <!-- template内にコンポーネントで作ったタグを書くと画面に反映される -->
  <MemoForm memo="" />
</template>

<!-- コンポーネントから読み込む -->
<script>
import MemoForm from "@/components/MemoForm.vue";

//他のファイルから使われることになるので下記を定義
export default {
  name: "NewView",
  components: {
    //コンポーネントを使う
    MemoForm,
  },
};
</script>