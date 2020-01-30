<template>
  <div id="app">
    <div id="dashboard">
      <app-nav></app-nav>
      <main class="dashboard">
        <div class="container-fluid">
          <div class="row">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </div>
    <div id="deleteModal" class="modal">
      <div class="modal-content">
        <h4 class="black-text">Delete Interview</h4>
        <p>Are you sure?</p>
      </div>
      <div class="modal-footer">
        <form action="/dashboard/delete-interview" method="post">
          <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
          <input type="hidden" name="interviewId" />
          <a href="#!" class="modal-close waves-effect waves-green btn-flat"
            >cancel</a
          >
          <button type="submit" class="btn red">Delete</button>
        </form>
      </div>
    </div>
    <input id="message" type="hidden" value="<%= message %>" />
    <!-- <script src="/js/dashboardIndex.js"></script> -->
  </div>
</template>

<style lang="scss">
// @import url('./assets/css/materialize.min.css');
html {
  position: relative;
}

body {
  font-family: Raleway, Verdana, Geneva, Tahoma, sans-serif;
}

#app {
  background: #1a2035;
  color: #a9afbbd1;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pl-0 {
  padding-left: 0 !important;
}

.pr-0 {
  padding-right: 0 !important;
}

.mt-0 {
  margin-top: 0;
}

.mb-0 {
  margin-bottom: 0;
}

.cf::after {
  content: '';
  /* display: table; */
  display: table-cell;
  clear: both;
}

input[type].mb-0,
input.select-dropdown.dropdown-trigger {
  margin-bottom: 0;
}

.invalid-feedback.helper-text {
  opacity: 0;
  background-color: #ba2525;
  padding: 0.3em 0.9em;
  transition: opacity 0.4s;
}

#dashboard input ~ label,
#dashboard select ~ label {
  color: #a9afbbd1;
}

.input-field input[type='text']:focus,
.input-field input[type='password']:focus,
.input-field input:focus.select-dropdown.dropdown-trigger {
  border-bottom: 1px solid #7b1fa2 !important;
  box-shadow: 0 1px 0 0 #7b1fa2 !important;
}

/* =========== Error Input ============== */
.input-field input.is-invalid:focus ~ label,
.input-field select.is-invalid:focus ~ label {
  color: #ba2525;
}

.input-field input.is-invalid + .invalid-feedback.helper-text,
.input-field.is-invalid .invalid-feedback.helper-text {
  opacity: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.input-field input.is-invalid,
.input-field.is-invalid input.select-dropdown.dropdown-trigger {
  border-bottom: 1px solid #ba2525;
  box-shadow: 0 1px 0 0 #ba2525;
  color: #ba2525;
}

.input-field input.is-invalid:focus,
.input-field.is-invalid input.select-dropdown.dropdown-trigger:focus {
  border-bottom: 1px solid #ba2525 !important;
  box-shadow: 0 1px 0 0 #ba2525 !important;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#app nav {
  background: none;
  box-shadow: none;
  padding-right: 10px;
  padding-left: 10px;
}

#app nav h1 {
  font-size: 1.6em;
  margin-top: 1em;
}

#app main {
  flex: 1 0 auto;
}

ul.dropdown-content.select-dropdown span {
  color: #7b1fa2 !important;
}

#dashboard-body {
  background: #1a2035;
  color: #a9afbbd1;
}
.primary-color {
  background-color: #202940 !important;
}

.purple-text-color {
  color: #7b1fa2;
}

.purple-background {
  background: linear-gradient(60deg, #7b1fa2, #913f9e);
  background-image: linear-gradient(
    60deg,
    rgb(123, 31, 162),
    rgb(145, 63, 158)
  );
}

.primary-grey-color {
  color: #a9afbbd1 !important;
}

.secondary-grey-color {
  color: #606477 !important;
}

#dashboard #slide-out,
#app #slide-out,
.collapsible-body {
  background: #1f283e !important;
}

#logout {
  width: 100%;
  text-transform: capitalize;
  box-shadow: none;
  background: #1f283e;
  text-align: left;
  padding: 0 32px;
  height: 48px;
  line-height: 48px;
}

#logout:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

#dashboard header.dashboard,
#dashboard main.dashboard {
  padding-left: 300px;
}

#dashboard nav {
  background: transparent;
  box-shadow: none;
}

#dashboard .nav-wrapper {
  padding-left: 20px;
  padding-right: 20px;
}

#dashboard .nav-wrapper .brand-logo {
  padding-left: 10px;
  font-size: 1.6em;
}

#dashboard main .container-fluid {
  padding-left: 20px;
  padding-right: 20px;
}

@media only screen and (max-width: 992px) {
  #dashboard header.dashboard,
  #dashboard main.dashboard {
    padding-left: 0;
  }
}
</style>

<script src="/"></script>
<script>
import Nav from './components/Nav'
// import 'materialize-css'
export default {
  components: {
    appNav: Nav
  },
  methods: {
    clickModal(e) {
      console.log(e)
    }
  },
  mounted() {
    // var elems = document.querySelector('.modal')
    // console.log(elems)
    // const hello = M.Modal.init(elems)
    M.AutoInit()
  }
}
</script>
