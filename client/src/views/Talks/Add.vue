<template>
  <div class="col s12 m10 l8 xl6">
    <form id="usernameForm" action="/dashboard/change-username" method="post">
      <div class="card primary-color">
        <div class="card-content pb-0">
          <span class="card-title">Add Talk</span>
          <div class="row mb-0">
            <div class="input-field col s12 m12">
              <input id="title" type="text" class="mb-0 white-text" name="title" />

              <span class="helper-text invalid-feedback white-text">dd></span>
              <label for="title" class="secondary-color">Title</label>
            </div>
            <div class="input-field col s12 m12">
              <textarea id="description" class="materialize-textarea white-text"></textarea>

              <span class="helper-text invalid-feedback white-text">Description</span>
              <label for="description" class="secondary-color">Description</label>
            </div>
            <div class="input-field col s12 m12">
              <input
                id="speakerFullName"
                type="text"
                class="mb-0 white-text"
                name="speakerFullName"
              />

              <span class="helper-text invalid-feedback white-text">dd></span>
              <label for="speakerFullName" class="secondary-color">Speaker Full Name</label>
            </div>
            <div class="input-field col s12 m12">
              <input id="speakerCompany" type="text" class="mb-0 white-text" name="speakerCompany" />

              <span class="helper-text invalid-feedback white-text">dd></span>
              <label for="speakerCompany" class="secondary-color">Speaker Company</label>
            </div>
            <div class="input-field col s12 m12">
              <input id="speakerBio" type="text" class="mb-0 white-text" name="speakerBio" />

              <span class="helper-text invalid-feedback white-text">dd></span>
              <label for="speakerBio" class="secondary-color">Speaker Bio</label>
            </div>
            <div class="input-field col s12 m12">
              <input id="speakerEmail" type="text" class="mb-0 white-text" name="speakerEmail" />

              <span class="helper-text invalid-feedback white-text">dd></span>
              <label for="speakerEmail" class="secondary-color">Speaker Email</label>
            </div>
          </div>
        </div>
        <div class="card-action">
          <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
          <button type="submit" class="btn purple-background">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>
