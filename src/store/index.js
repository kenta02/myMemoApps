import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

// ローカルストレージにデータを保存する
const vuexPersist = new VuexPersistence({
  store: localStorage
})

export default createStore({
  //状態管理（どういうデータを保存するのか）
  state: {

    count: 0,//メモが追加されたらカウントする
    memos: [] //データを保存する
  },
  //storeに入ったデータを取得する
  getters: {
    getCount: (state) => {
      return state.memos.length;
    },
    getAll: (state) => {
      return state.memos;
    },
    //ある1件だけ取得

    //functionを使った場合の書き方
    // getMemoById: function (state) {
    //   return function (id) {
    //     return state.memos.find(function (memo) {
    //       return memo.id === id;
    //     });
    //   }
    // }
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => memo.id === id)
    }
  },
  //保存、変更とかstateを変更する時に使う
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    /*メモを保存する */
    save(state, newMemo) {
      if (newMemo.id) {
        let x = state.memos.find(memo => memo.id === newMemo.id);
        x.title = newMemo.title;
        x.content = newMemo.content;
      } else {
        newMemo.id = ++state.count;
        //unshift->配列の先頭に指定の値を挿入する。
        state.memos.unshift(newMemo)
      }
    },
    //削除する
    delete(state, id) {
      //filterで,配列の中から削除したいもの以外を抜き出して、新たに配列とする。（→つまり削除対象のものは消える）
      state.memos = state.memos.filter(memo => memo.id !== id)
    }
  },


  // 非同期通信とか
  actions: {
  },
  modules: {
  },
  // プラグインを使う場合記載する
  plugins: [vuexPersist.plugin]
})
