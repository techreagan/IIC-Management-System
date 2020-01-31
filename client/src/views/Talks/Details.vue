<template>
  <div class="col s12 m8">
    <h5 style="margin-top: 2.5em" class="heading">
      <strong>Talk Details</strong>
    </h5>
    <div class="card-panel primary-color">
      <p><b>Title: </b>{{ talk.title }}</p>
      <p><b>Description: </b>{{ talk.description }}</p>
      <p><b>Date: </b>{{ talk.date }}</p>
      <p><b>Time: </b>{{ talk.time }}</p>
      <p><b>Hall: </b>{{ talk.hall }}</p>
      <p><b>Speaker Full Name: </b>{{ talk.speakerFullName }}</p>
      <p><b>Speaker Company: </b>{{ talk.speakerCompany }}</p>
      <p><b>Speaker Email: </b>{{ talk.speakerEmail }}</p>
      <p><b>Speaker Bio: </b>{{ talk.speakerBio }}</p>
    </div>
    <h5 class="heading" style="margin-top: 2em">
      <strong>List Of Attendees</strong>
    </h5>

    <div class="card-panel primary-color">
      <template v-if="attendees.data.length">
        <table class="centeed nav" id="table">
          <thead class="purple-background white-text">
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Company</th>
              <!-- <th>Actions</th> -->
            </tr>
          </thead>

          <tbody id="tableBody" :class="{ hide: isLoading }">
            <tr v-for="talk in attendees.data" :key="talk._id">
              <td>{{ talk.attendee.fullName }}</td>
              <td>{{ talk.attendee.email }}</td>
              <td>{{ talk.attendee.company }}</td>
              <!-- <td class="cf">
                <div class="row">
                  <div class="col m2">
                    <a
                      @click="deleteModal(talk.attendee._id)"
                      href="#deleteModal"
                      :ref="talk.attendee._id"
                      class="btn-small red delete-btn modal-trigger"
                    >
                      <i style class="fas fa-trash"></i>
                    </a>
                  </div>

                  <div class="col m2 offset-m2">
                    <a
                      href=""
                      target="_blank"
                      class="btn-small purple-background"
                      >Details</a
                    >
                  </div>
                </div>
              </td> -->
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
  </div>
</template>

<script src="/"></script>

<script>
import TalkService from '@/services/TalkService'
export default {
  data() {
    return {
      talk: {},
      talkId: this.$route.params.id,
      attendees: { data: [] },
      attendeeId: null,
      page: 1,
      isLoading: true,
      errors: null
    }
  },
  methods: {
    deleteModal(id) {
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
      const attendees = await TalkService.getAttendees(
        `talk=${this.talkId}&limit=5&page=${this.page}`
      ).catch(err => (this.errors = err.reponse.data.error))

      this.attendees = attendees.data
      // console.log('hello', this.page, attendees.data)
      this.isLoading = false
    },
    async deleteAttendee(event) {
      // await TalkService.deleteById(this.attendeeId).catch(
      //   err => (this.errors = err.reponse.data.error)
      // )
      // const instance = M.Modal.getInstance(this.$refs['deleteModal'])
      // instance.close()
      // this.$refs[this.attendeeId][0].closest('tr').remove()
      // // this.attendees = this.attendees.filter(
      // //   attendee => attendee._id == this.attendeeId
      // // )
      // M.toast({ html: 'Attendee Deleted', classes: 'red rounded' })
    }
  },
  async created() {
    this.isLoading = true
    const talk = await TalkService.getById(this.talkId).catch(err => {
      if (!err.response.data.success) {
        this.$router.go(-1)
      }
    })
    this.talk = talk.data.data
    const attendees = await TalkService.getAttendees(
      `talk=${this.talkId}`
    ).catch(err => {
      // if (!err.response.data.success) {
      //   this.$router.go(-1)
      // }
    })
    // console.log(attendees.data)
    this.attendees = attendees.data
    this.isLoading = false
  }
}
</script>

<style></style>
