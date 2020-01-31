<template>
  <div class="col s12 m10 l8 xl6">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="card primary-color mt-3">
          <div class="card-content pb-0">
            <span class="card-title">Add Attendee</span>
            <div class="row mb-0">
              <validation-provider
                rules="required|min:3"
                v-slot="{ errors }"
                tag="div"
                name="full name"
                class="input-field col s12 m12"
              >
                <input
                  id="fullName"
                  type="text"
                  class="mb-0 white-text"
                  name="fullName"
                  v-model="fullName"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                />
                <span class="helper-text invalid-feedback white-text">{{
                  errors[0]
                }}</span>
                <label for="fullName" class="secondary-color">Full Name</label>
              </validation-provider>

              <validation-provider
                rules="min:3"
                v-slot="{ errors }"
                tag="div"
                name="company"
                class="input-field col s12 m12"
              >
                <input
                  id="company"
                  type="text"
                  class="mb-0 white-text"
                  name="company"
                  v-model="company"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                />

                <span class="helper-text invalid-feedback white-text">{{
                  errors[0]
                }}</span>
                <label for="company" class="secondary-color">Company</label>
              </validation-provider>

              <validation-provider
                rules="required|email"
                v-slot="{ errors }"
                tag="div"
                name="email"
                class="input-field col s12 m12"
              >
                <input
                  id="email"
                  type="text"
                  class="mb-0 white-text"
                  name="Email"
                  v-model="email"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                />

                <span class="helper-text invalid-feedback white-text">{{
                  errors[0]
                }}</span>
                <label for="email" class="secondary-color">Email</label>
              </validation-provider>
            </div>
          </div>
          <div class="card-action">
            <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
            <button type="submit" class="btn purple-background">Submit</button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script src="/"></script>

<script>
import AttendeeService from '@/services/AttendeeService'

export default {
  data() {
    return {
      fullName: '',
      company: '',
      email: ''
    }
  },
  methods: {
    async onSubmit() {
      const attendee = await AttendeeService.create({
        fullName: this.fullName,
        company: this.company,
        email: this.email
      }).catch(err => {
        if (err.response.data.error === 'Duplicate field value entered') {
          M.toast({ html: 'Email already been used', classes: 'red rounded' })
          // return true
        } else {
          // console.log(err.response.data.error.isArray())
          if (Array.isArray(err.response.data.error)) {
            M.toast({
              html: err.response.data.error[0].message,
              classes: 'red rounded'
            })
          } else {
            M.toast({ html: err.response.data.error, classes: 'red rounded' })
          }

          // console.log(err.response.data)
          // return true
        }
      })
      console.log(attendee)
      if (!attendee || attendee.data.data.success == true) {
        return
      }

      this.$store.dispatch('setDataCreated', true)
      this.$router.push('/attendees')
    }
  }
}
</script>
