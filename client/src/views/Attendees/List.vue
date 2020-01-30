<template>
  <div class="col s12 m12 l10">
    <!-- <button class="btn green">Add Talk</button> -->
    <div class="card-panel primary-color">
      <table class="centeed nav" id="table">
        <thead class="purple-background white-text">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody id="tableBody" :class="{ hide: isLoading }">
          <tr v-for="attendee in attendees" :key="attendee._id">
            <td>{{ attendee.fullName }}</td>
            <td>{{ attendee.email }}</td>
            <td>{{ attendee.company }}</td>
            <td class="cf">
              <div class="row">
                <div class="col m2">
                  <a
                    data-id="<%= interview._id %>"
                    href="#deleteModal"
                    class="btn-small red delete-btn modal-trigger"
                  >
                    <i
                      data-id="<%= interview._id %>"
                      style
                      class="fas fa-trash"
                    ></i>
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
    </div>
  </div>
</template>

<style scoped>
.preloader-wrapper {
  display: flex;
  margin: 20px auto;
}
.nav {
  overflow-x: scroll !important;
}
</style>

<script>
import AttendeeService from '@/services/AttendeeService'

export default {
  data() {
    return {
      isLoading: true,
      attendees: [],
      errors: null
    }
  },
  async mounted() {
    const attendees = await AttendeeService.getAll().catch(
      err => (this.errors = err.reponse.data.error)
    )
    this.attendees = attendees.data.data
    this.isLoading = false
  }
}
</script>
