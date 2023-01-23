<template>
  <!-- template内にコンポーネントで作ったタグを書くと画面に反映される -->
  <!-- どのメモを表示するか Edit view:{{ $route.params.id }} -->
  <!-- "memo"はcomputedで定義したmemo()。 -->

  <MemoForm v-if="memo" :memo="memo" />
  <p v-else>指定されたメモはありません。</p>
</template>


<script>
// コンポーネントを使う
import MemoForm from "@/components/MemoForm.vue";

export default {
  name: "EditView",

  components: {
    MemoForm,
  },
  computed: {
    memo() {
      //数値に変換して返す
      const id = parseInt(this.$route.params.id);
      return this.$store.getters.getMemoById(id);
    },
  },
};
</script>