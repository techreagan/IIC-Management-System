<template>
  <header class="dashboard">
    <div>
      <nav class="cf">
        <div style class="nav-wrapper cf">
          <ul class="left show-on-medium-and-down hide-on-med-and-up">
            <li>
              <a href="#" data-target="slide-out" class="sidenav-trigger" style="margin: 0">
                <i class="fas fa-bars fa-lg primary-grey-color"></i>
              </a>
            </li>
          </ul>

          <a href="#" class="brand-logo primary-grey-color">
            <strong>IIC Management System</strong>
          </a>
        </div>
      </nav>
    </div>
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <li>
        <!-- <div class="user-view"> -->
        <h5 class="primary-grey-color" style="margin-left: .6em">Dashboard</h5>
        <!-- <a href="#name">
            <span class="secondary-grey-color name">Hello, d</span>
          </a>
          <a href="#email">
            <span class="secondary-grey-color email">d</span>
        </a>-->
        <!-- </div> -->
      </li>
      <ul class="collapsible">
        <li>
          <div class="collapsible-header">
            <a class="primary-grey-color">Talks</a>
          </div>
          <div class="collapsible-body">
            <ul>
              <router-link
                to="/talks"
                tag="li"
                class="primary-grey-color"
                activeClass="active"
                exact
              >
                <a>List</a>
              </router-link>
              <router-link
                to="/talks/add"
                tag="li"
                class="primary-grey-color"
                activeClass="active"
                exact
              >
                <a>Add</a>
              </router-link>

              <!-- <li><a href="/dashboard" class="primary-grey-color">List</a></li>
              <li><a href="/dashboard" class="primary-grey-color">Add</a></li>-->
            </ul>
          </div>
        </li>
        <li>
          <div class="collapsible-header">
            <a class="primary-grey-color">Attendees</a>
          </div>
          <div class="collapsible-body">
            <ul>
              <router-link
                to="/attendees"
                tag="li"
                class="primary-grey-color"
                activeClass="active"
                exact
              >
                <a>List</a>
              </router-link>
              <router-link
                to="/attendees/add"
                tag="li"
                class="primary-grey-color"
                activeClass="active"
                exact
              >
                <a>Add</a>
              </router-link>
            </ul>
          </div>
        </li>
      </ul>

      <!-- <li>
        <div class="divider"></div>
      </li>
      <li>
        <a class>Account</a>
      </li>
      <li>
        <a class="waves-effect primary-grey-color" href="/dashboard/settings"
          >Settings</a
        >
      </li>-->
      <!-- <li>
        <form method="post" action="/logout">
          <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
          <input
            value="Logout"
            name="logout"
            type="submit"
            class="btn primary-grey-color"
            id="logout"
          />
        </form>
      </li>-->
    </ul>
  </header>
</template>

<style scoped lang="scss">
.collapsible > .active .collapsible-header {
  background-color: #1a2035 !important;
  a {
    // color: #a9afbbd1 !important;
  }
}
#slide-out.sidenav {
  .user-view {
    padding: 5px 32px 0;
  }
  h5 {
    font-size: 1.3em;
    margin-bottom: 4em;
  }
  .divider {
    background: rgba(255, 255, 255, 0.3);
  }
  li > a {
    font-weight: normal;
  }
}

#slide-out {
  li {
    // border-radius: 10px;
    // margin-left: 5px;
    // margin-right: 5px;
  }
  li.active {
    background: linear-gradient(60deg, #7b1fa2, #913f9e);
    background-image: linear-gradient(
      60deg,
      rgb(123, 31, 162),
      rgb(145, 63, 158)
    );
    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14),
      0 7px 10px -5px rgba(156, 39, 176, 0.4);
    a {
      color: white !important;
    }
  }
}
.user-view {
  margin-bottom: 2em;
}
</style>
