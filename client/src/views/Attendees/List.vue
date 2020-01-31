<template>
  <div class="col s12 m12 l10">
    <div class="card-panel primary-color mt-3 overflow">
      <h5 class="heading mt-0"><strong>Attendees</strong></h5>
      <template v-if="attendees.data.length">
        <table class="centeed nav" id="table">
          <thead class="purple-background white-text">
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>

          <tbody id="tableBody" :class="{ hide: isLoading }">
            <tr v-for="attendee in attendees.data" :key="attendee._id">
              <td>{{ attendee.fullName }}</td>
              <td>{{ attendee.email }}</td>
              <td>{{ attendee.company }}</td>
              <td class="cf">
                <div class="row">
                  <div class="col m2">
                    <a
                      @click="deleteModal(attendee._id)"
                      href="#deleteModal"
                      :ref="attendee._id"
                      class="btn-small red delete-btn modal-trigger"
                    >
                      <i style class="fas fa-trash"></i>
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <div class="row">
                  <div class="col m2 offset-m2">
                    <a
                      @click="detailsModal(attendee._id)"
                      href="#detailsModal"
                      :ref="attendee._id"
                      class="btn-small purple-background modal-trigger"
                      >More</a
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
            v-for="pageNum in attendees.totalPage"
            :key="pageNum"
            class="waves-effect"
            :class="{ active: page == pageNum ? true : false }"
          >
            <a class="white-text" @click="currentPage(pageNum)">{{
              pageNum
            }}</a>
          </li>

          <li
            class="waves-effect"
            :class="{ disabled: page == attendees.totalPage ? true : false }"
          >
            <a class="white-text" @click="currentPage((page += 1))">&gt;</a>
          </li>
        </ul>
      </template>
      <p v-else>No attendees yet</p>
    </div>
    <div id="deleteModal" ref="deleteModal" class="modal">
      <div class="modal-content">
        <h4 class="black-text">Delete Attendee</h4>
        <p>Are you sure?</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat"
          >cancel</a
        >
        <button type="submit" class="btn red" @click="deleteAttendee">
          Delete
        </button>
      </div>
    </div>
    <div id="detailsModal" ref="detailsModal" class="modal">
      <div class="modal-content">
        <h4 class="black-text">Add attendee to talk</h4>
        <div class="row">
          <!-- <div class="input-field col s12"> -->
          <label>Select Talk</label>
          <select v-model="talkId" class="browser-default">
            <option value="" disabled selected>Choose your option</option>
            <option v-for="talk in talks" :key="talk._id" :value="talk._id">{{
              talk.title
            }}</option>
            <!-- <option value="2">Option 2</option>
              <option value="3">Option 3</option> -->
          </select>
          <!-- </div> -->
        </div>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat"
          >cancel</a
        >
        <button type="submit" class="btn red" @click="addAttendee">
          Add Attendee
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.preloader-wrapper {
  display: flex;
  margin: 20px auto;
}
/* .nav {
  overflow-x: scroll !important;
} */
</style>

<script src="/"></script>

<script>
import AttendeeService from '@/services/AttendeeService'
import TalkService from '@/services/TalkService'

export default {
  data() {
    return {
      isLoading: true,
      attendees: { data: [] },
      talks: [],
      talkId: '',
      page: 1,
      attendeeId: null,
      errors: null
    }
  },
  methods: {
    deleteModal(id) {
      this.attendeeId = id
    },
    detailsModal(id) {
      this.attendeeId = id
    },
    async currentPage(num) {
      if (num > this.attendees.totalPage) {
        this.page = this.attendees.totalPage
        return true
      }
      if (this.page <= 0) {
        this.page = 1
        return true
      }

      this.isLoading = true
      this.page = num
      const attendees = await AttendeeService.getAll(
        `limit=5&page=${this.page}`
      ).catch(err => (this.errors = err.reponse.data.error))

      this.attendees = attendees.data
      this.isLoading = false
    },
    async deleteAttendee(event) {
      await AttendeeService.deleteById(this.attendeeId).catch(
        err => (this.errors = err.reponse.data.error)
      )

      const instance = M.Modal.getInstance(this.$refs['deleteModal'])
      instance.close()
      this.$refs[this.attendeeId][0].closest('tr').remove()
      // this.attendees = this.attendees.filter(
      //   attendee => attendee._id == this.attendeeId
      // )
      M.toast({ html: 'Attendee Deleted', classes: 'red rounded' })
    },
    async addAttendee(event) {
      if (this.talkId == '') return true
      const instance = M.Modal.getInstance(this.$refs['detailsModal'])
      const talk = await TalkService.addAttendee(
        this.talkId,
        this.attendeeId
      ).catch(err => {
        this.errors = err.response.data.error
        instance.close()
        M.toast({ html: err.response.data.error, classes: 'red rounded' })
        return false
      })

      if (talk) {
        M.toast({ html: 'Attendee added to talk', classes: 'green rounded' })
      }

      this.$refs['detailsModal']
        .querySelector('select')
        .getElementsByTagName('option')[0].selected = 'selected'

      instance.close()
    }
  },
  async mounted() {
    this.isLoading = true
    const attendees = await AttendeeService.getAll('limit=5').catch(
      err => (this.errors = err.reponse.data.error)
    )
    this.attendees = attendees.data

    this.isLoading = false

    const talks = await TalkService.getAll('sort=title').catch(
      err => (this.errors = err.reponse.data.error)
    )
    this.talks = talks.data.data
    // console.log(this.talks)
    M.AutoInit()
  },
  created() {
    if (this.$store.getters.dataCreated) {
      M.Toast.dismissAll()
      M.toast({ html: 'Attendee Added', classes: 'green' })
      this.$store.dispatch('setDataCreated', false)
    }
  }
}
</script>
