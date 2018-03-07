import Vuex from "vuex";
import axios from "axios";

const store = () =>
  new Vuex.Store({
    state: {
      currentMusic: null,
      musics: []
    },
    getters: {
      currentMusic(state) {
        return state.currentMusic;
      },
      musics(state) {
        return state.musics;
      }
    },
    mutations: {
      setMusics(state, musics) {
        state.musics = musics;
      },
      setCurrentMusic(state, music) {
        state.currentMusic = music;
      }
    },
    actions: {
      searchMusics(context, keyword) {
        axios
          .get(
            `http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?term=${keyword}&country=JP&entity=musicTrack`
          )
          .then(res => {
            context.commit("setMusics", res.data.results);
          });
      },
      playMusic(context, music) {
        context.commit("setCurrentMusic", music);
      }
    }
  });

export default store;
