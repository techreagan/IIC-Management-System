<template>
  <div class="col s12 m12">
    <!-- <button class="btn green">Add Talk</button> -->
    <div class="card-panel primary-color">
      <table class="centeed nav" id="table">
        <thead class="purple-background white-text">
          <tr>
            <th>Title</th>
            <th>Speaker Full Name</th>
            <th>Speaker Email</th>
            <th>Speaker Company</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody id="tableBody">
          <tr v-for="talk in talks.data" :key="talk._id">
            <td class="truncate">{{ talk.title }}</td>
            <td>{{ talk.speakerFullName }}</td>
            <td>{{ talk.speakerEmail }}</td>
            <td class="truncate">{{ talk.speakerCompany }}</td>
            <td class="cf">
              <div class="row">
                <div class="col m2">
                  <a
                    @click="deleteModal(talk._id)"
                    href="#deleteModal"
                    :ref="talk._id"
                    class="btn-small red delete-btn modal-trigger"
                  >
                    <i style class="fas fa-trash"></i>
                  </a>
                </div>

                <div class="col m2 offset-m2">
                  <a
                    href="/interview/<%= interview._id %>"
                    target="_blank"
                    class="btn-small purple-background"
                    >Details</a
                  >
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="preloader-wrapper active" :class="{ hide: !isLoading }">
        <div class="spinner-layer spinner-blue">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>

        <div class="spinner-layer spinner-red">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>

        <div class="spinner-layer spinner-yellow">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>

        <div class="spinner-layer spinner-green">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <ul class="pagination" :class="{ hide: isLoading }">
        <li
          class="waves-effect"
          :class="{ disabled: page == 1 ? true : false }"
        >
          <a class="white-text" @click="currentPage((page -= 1))">&lt;</a>
        </li>
        <li
          v-for="pageNum in talks.totalPage"
          :key="pageNum"
          class="waves-effect"
          :class="{ active: page == pageNum ? true : false }"
        >
          <a class="white-text" @click="currentPage(pageNum)">{{ pageNum }}</a>
        </li>

        <li
          class="waves-effect"
          :class="{ disabled: page == talks.totalPage ? true : false }"
        >
          <a class="white-text" @click="currentPage((page += 1))">&gt;</a>
        </li>
      </ul>
    </div>
    <div id="deleteModal" ref="deleteModal" class="modal">
      <div class="modal-content">
        <h4 class="black-text">Delete Talk</h4>
        <p>Are you sure?</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat"
          >cancel</a
        >
        <button type="submit" class="btn red" @click="deleteTalk">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  overflow-x: scroll !important;
}
</style>

<script src="/"></script>

<script>
import TalkService from '@/services/TalkService'

export default {
  data() {
    return {
      isLoading: true,
      talks: [],
      page: 1,
      talkId: null,
      errors: null
    }
  },
  methods: {
    deleteModal(id) {
      this.talkId = id
    },
    async currentPage(num) {
      if (num > this.talks.totalPage) {
        this.page = this.talks.totalPage
        return true
      }
      if (this.page <= 0) {
        this.page = 1
        return true
      }

      this.isLoading = true
      this.page = num
      const talks = await TalkService.getAll(`limit=5&page=${this.page}`).catch(
        err => (this.errors = err.reponse.data.error)
      )

      this.talks = talks.data
      this.isLoading = false
    },
    async deleteTalk(event) {
      await TalkService.deleteById(this.talkId).catch(
        err => (this.errors = err.reponse.data.error)
      )

      const instance = M.Modal.getInstance(this.$refs['deleteModal'])
      instance.close()
      this.$refs[this.talkId][0].closest('tr').remove()

      M.toast({ html: 'Talk Deleted', classes: 'red rounded' })
    }
  },
  async mounted() {
    this.isLoading = true
    const talks = await TalkService.getAll('limit=5').catch(
      err => (this.errors = err.reponse.data.error)
    )
    this.talks = talks.data
    // console.log(talks)
    this.isLoading = false
    M.AutoInit()
  },
  created() {
    if (this.$store.getters.dataCreated) {
      M.Toast.dismissAll()
      M.toast({ html: 'Talk Added', classes: 'green' })
      this.$store.dispatch('setDataCreated', false)
    }
  }
}
</script>
