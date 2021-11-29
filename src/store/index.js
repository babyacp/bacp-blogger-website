import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/index'
import router from '../router/index'
import swal from 'sweetalert';

Vue.use(Vuex)

export default new Vuex.Store({
  // state: penyimpanan terakhir dari store
  state: {
    blogs: []
  },
  // dari actions ke mutations lalu ke state
  mutations: {
    SET_BLOGS(state, payload) {
      state.blogs = payload
    }
  },
  actions: {
    // mengambil data dari api
    loginStore(context, payload) {
      console.log(payload)
      axios({
        url: '/auth/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          swal({
            title: "Oops!",
            text: "There is something wrong! Please double check.",
            icon: "error",
            button: "Ok",
          });
        })
    },

    registerStore(context, payload) {
      axios({
        url: '/auth/register',
        method: 'POST',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          photo_profile: payload.photo_profile
        }
      })
        .then(_ => {
          router.push('/login')
        })
        .catch(error => {
          console.log(error)
          swal({
            title: "Oops!",
            text: "There is something wrong! Please double check.",
            icon: "error",
            button: "Ok",
          });
        })
    },

    blogsStore(context, payload) {
      axios({
        url: `/blog?page=${payload}`,
        method: 'GET',

      })
        .then(response => {
          context.commit('SET_BLOGS', response.data.blogs)
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },

    detailBlogStore(context, payload) {
      axios({
        url: '/blog/132',
        method: 'GET'
      })
        .then(response => {
          router.push('/detail-blog')
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
