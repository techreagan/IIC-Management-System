<template>
  <div class="col s12 m12 l10">
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
          <tr>
            <td>dddddddddddd</td>
            <td>ddd</td>
            <td>ddd</td>
            <td>ddd</td>
            <td class="cf">
              <div class="row">
                <div class="col m2">
                  <a
                    data-id="<%= interview._id %>"
                    href="#deleteModal"
                    class="btn-small red delete-btn modal-trigger"
                  >
                    <i data-id="<%= interview._id %>" style class="fas fa-trash"></i>
                  </a>
                </div>

                <div class="col m2 offset-m2">
                  <a
                    href="/interview/<%= interview._id %>"
                    target="_blank"
                    class="btn-small purple-background"
                  >Details</a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.nav {
  overflow-x: scroll !important;
}
</style>
