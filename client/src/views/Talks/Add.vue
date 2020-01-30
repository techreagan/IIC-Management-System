<template>
  <div class="col s12 m10 l8 xl6">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="card primary-color">
          <div class="card-content pb-0">
            <span class="card-title">Add Talk</span>
            <div class="row mb-0">
              <validation-provider
                rules="required|min:3"
                v-slot="{ errors }"
                tag="div"
                name="title"
                class="input-field col s12 m12"
              >
                <input
                  id="title"
                  type="text"
                  class="mb-0 white-text"
                  name="title"
                  v-model="title"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                />

                <span class="helper-text invalid-feedback white-text">{{
                  errors[0]
                }}</span>
                <label for="title" class="secondary-color">Title</label>
              </validation-provider>
              <validation-provider
                rules="required|min:3"
                v-slot="{ errors }"
                tag="div"
                name="description"
                class="input-field col s12 m12"
              >
                <textarea
                  id="description"
                  class="materialize-textarea white-text mb-0"
                  v-model="description"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                ></textarea>

                <span
                  class="helper-text invalid-feedback white-text"
                  style="position: relative; top: -10px"
                  >{{ errors[0] }}</span
                >
                <label for="description" class="secondary-color"
                  >Description</label
                >
              </validation-provider>
              <validation-provider
                rules="required|numeric"
                v-slot="{ errors }"
                tag="div"
                name="hall"
                class="input-field col s12 m12"
              >
                <input
                  id="hall"
                  type="text"
                  class="mb-0 white-text"
                  name="hall"
                  v-model="hall"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                />

                <span class="helper-text invalid-feedback white-text">{{
                  errors[0]
                }}</span>
                <label for="hall" class="secondary-color">Hall</label>
              </validation-provider>
              <validation-provider
                rules="required|min:3"
                v-slot="{ errors }"
                tag="div"
                name="speaker full name"
                class="input-field col s12 m12"
              >
                <input
                  id="speakerFullName"
                  type="text"
                  class="mb-0 white-text"
                  name="speakerFullName"
                  v-model="speakerFullName"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                />

                <span class="helper-text invalid-feedback white-text">{{
                  errors[0]
                }}</span>
                <label for="speakerFullName" class="secondary-color"
                  >Speaker Full Name</label
                >
              </validation-provider>
              <validation-provider
                rules="required|min:3"
                v-slot="{ errors }"
                tag="div"
                name="speaker company"
                class="input-field col s12 m12"
              >
                <input
                  id="speakerCompany"
                  type="text"
                  class="mb-0 white-text"
                  name="speakerCompany"
                  v-model="speakerCompany"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                />

                <span class="helper-text invalid-feedback white-text">{{
                  errors[0]
                }}</span>
                <label for="speakerCompany" class="secondary-color"
                  >Speaker Company</label
                >
              </validation-provider>
              <validation-provider
                rules="required|min:3"
                v-slot="{ errors }"
                tag="div"
                name="speaker bio"
                class="input-field col s12 m12"
              >
                <input
                  id="speakerBio"
                  type="text"
                  class="mb-0 white-text"
                  name="speakerBio"
                  v-model="speakerBio"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                />

                <span class="helper-text invalid-feedback white-text">{{
                  errors[0]
                }}</span>
                <label for="speakerBio" class="secondary-color"
                  >Speaker Bio</label
                >
              </validation-provider>
              <validation-provider
                rules="required|email"
                v-slot="{ errors }"
                tag="div"
                name="speaker email"
                class="input-field col s12 m12"
              >
                <input
                  id="speakerEmail"
                  type="text"
                  class="mb-0 white-text"
                  name="speakerEmail"
                  v-model="speakerEmail"
                  :class="{ 'is-invalid': errors[0] ? true : false }"
                />

                <span class="helper-text invalid-feedback white-text">{{
                  errors[0]
                }}</span>
                <label for="speakerEmail" class="secondary-color"
                  >Speaker Email</label
                >
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
import TalkService from '@/services/TalkService'

export default {
  data() {
    return {
      title: '',
      description: '',
      hall: '',
      speakerFullName: '',
      speakerCompany: '',
      speakerEmail: '',
      speakerBio: ''
    }
  },
  methods: {
    async onSubmit() {
      const talk = await TalkService.create({
        title: this.title,
        description: this.description,
        hall: this.hall,
        speakerFullName: this.speakerFullName,
        speakerCompany: this.speakerCompany,
        speakerEmail: this.speakerEmail,
        speakerBio: this.speakerBio
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

      if (!talk || talk.data.data.success == true) {
        return
      }

      this.$store.dispatch('setDataCreated', true)
      this.$router.push('/talks')
    }
  }
}
</script>
