const AppLayout = {
    
  mobileNav: `
    <footer id="bottom-nav" class="adminuiux-mobile-footer hide-on-scrolldown style-2 d-block d-md-none">
      <div class="container">
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <a class="nav-link" onclick="navigateTo('index.html')">
              <span>
                <i class="nav-icon bi bi-house"></i>
                <span class="nav-text">Home</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="initSidebar()">
              <span>
                <i class="nav-icon bi bi-menu-button-wide-fill"></i>
                <span class="nav-text">AZ Menu</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="navigateTo('convert.html')">
              <span>
                <i class="nav-icon bi bi-arrow-clockwise"></i>
                <span class="nav-text">Converter</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a onclick="navigateTo('bet-editor.html')" class="nav-link">
              <span>
                <i class="bi bi-credit-card-2-front"></i>
                <span class="nav-text">Bet Editor</span>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onclick="navigateTo('profile.html')">
              <span>
                <i class="nav-icon avatar avatar-20 coverimg rounded-circle">
                  <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                </i>
                <span class="nav-text">Profile</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    `,

  // Desktop Navbar
  desktopNav: `
    <header id="desktop-nav" class="adminuiux-header">
        
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-lg fixed">
        <div class="container-fluid">
                      <!-- main sidebar toggle -->
            <button class="btn btn-link btn-square sidebar-toggler" type="button" onclick="initSidebar()">
                <i class="sidebar-svg" data-feather="menu"></i>
            </button>
          <!-- logo -->
          <a class="navbar-brand" onclick="navigateTo('index.html')">
            <img data-bs-img="light" src="" alt="" />
            <img data-bs-img="dark" src="assets/img/logo.svg" alt="" />
            <div class="d-block ps-2">
              <span class="h4 text-black"
                >Convert<span class="fw-bold">.IO</span></span
              >
            </div>
          </a>

          <!-- search -->
          <div class="px-3 justify-content-center d-none d-lg-flex">
            <div
              class="input-group input-group-md rounded search-wrap width-300 mx-auto"
            >
              <span class="input-group-text border-0 bg-none">
                <i class="bi bi-search"></i>
              </span>
              <input
                class="form-control border-0 bg-none"
                type="search"
                placeholder="Search here..."
                id="searchglobal"
              />
              <div class="dropdown input-group-text border-0 px-2">
                <button
                  class="dropdown-toggle btn btn-sm btn-link btn-square no-caret"
                  type="button"
                  id="searchfilter"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-sliders fs-6"></i>
                </button>
                <div
                  class="dropdown-menu dropdown-menu-end dropdown-dontclose width-300"
                  aria-labelledby="searchfilter"
                  style=""
                >
                  <ul class="nav nav-underline" id="searchtab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="searchall-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#searchall"
                        type="button"
                        role="tab"
                        aria-controls="searchall"
                        aria-selected="true"
                      >
                        All
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="searchorders-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#searchorders"
                        type="button"
                        role="tab"
                        aria-controls="searchorders"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Orders
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="searchcontacts-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#searchcontacts"
                        type="button"
                        role="tab"
                        aria-controls="searchcontacts"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Contacts
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content py-3" id="searchtabContent">
                    <div
                      class="tab-pane fade active show"
                      id="searchall"
                      role="tabpanel"
                      aria-labelledby="searchall-tab"
                    >
                      <ul
                        class="list-group adminuiux-list-group list-group-flush bg-none show"
                      >
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Search apps</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch1"
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch1"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Include Pages</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch2"
                                  checked=""
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch2"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Internet resource</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch3"
                                  checked=""
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch3"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">News and Blogs</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch4"
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch4"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="searchorders"
                      role="tabpanel"
                      aria-labelledby="searchorders-tab"
                    >
                      <ul
                        class="list-group adminuiux-list-group list-group-flush bg-none show"
                      >
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Show order ID</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch5"
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch5"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">International Order</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch6"
                                  checked=""
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch6"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Taxable Product</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch7"
                                  checked=""
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch7"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Published Product</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch8"
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch8"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="searchcontacts"
                      role="tabpanel"
                      aria-labelledby="searchcontacts-tab"
                    >
                      <ul
                        class="list-group adminuiux-list-group list-group-flush bg-none show"
                      >
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Have email ID</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch9"
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch9"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Have phone number</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch10"
                                  checked=""
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch10"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Photo available</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch11"
                                  checked=""
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch11"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row gx-3 gx-lg-4">
                            <div class="col">Referral</div>
                            <div class="col-auto">
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="isearchswitch12"
                                />
                                <label
                                  class="form-check-label"
                                  for="isearchswitch12"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="">
                    <div class="row gx-3 gx-lg-4">
                      <div class="col">
                        <button class="btn btn-link">Reset</button>
                      </div>
                      <div class="col-auto">
                        <button class="btn btn-theme">Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </ul>

          <!-- right icons button -->
          <div class="ms-auto">
            <!-- global search toggle -->
            <button
              class="btn btn-link btn-square btn-icon btn-link-header d-lg-none"
              type="button"
              onclick="openSearch()"
            >
              <i data-feather="search"></i>
            </button>

            <!-- dark mode -->
            <button
              class="btn btn-link btn-square btnsunmoon btn-link-header"
              id="btn-layout-modes-dark-page"
            >
              <i class="sun mx-auto" data-feather="sun"></i>
              <i class="moon mx-auto" data-feather="moon"></i>
            </button>

            <!-- notification dropdown -->
            <button
              class="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle position-relative no-caret"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#view-notification"
              aria-expanded="false"
            >
              <i data-feather="bell"></i>
              <span
                class="position-absolute top-0 end-0 badge rounded-pill bg-danger p-1"
              >
                <small>9+</small>
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <!-- global search-->
      <div class="adminuiux-search-full">
        <div class="row gx-2 align-items-center">
          <div class="col-auto">
            <!-- close global search toggle -->
            <button
              class="btn btn-link btn-square"
              type="button"
              onclick="closeSearch()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-left"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          </div>
          <div class="col">
            <input
              class="form-control pe-0 border-0"
              type="search"
              placeholder="Type something here..."
            />
          </div>
          <div class="col-auto">
            <!-- filter dropdown -->
            <div class="dropdown input-group-text border-0 p-0">
              <button
                class="dropdown-toggle btn btn-link btn-square no-caret"
                type="button"
                id="searchfilter2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i data-feather="sliders"></i>
              </button>
              <div
                class="dropdown-menu dropdown-menu-end dropdown-dontclose width-300"
              >
                <ul class="nav adminuiux-nav" id="searchtab2" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="searchall-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#searchall2"
                      type="button"
                      role="tab"
                      aria-controls="searchall2"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="searchorders-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#searchorders2"
                      type="button"
                      role="tab"
                      aria-controls="searchorders2"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      Orders
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="searchcontacts-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#searchcontacts2"
                      type="button"
                      role="tab"
                      aria-controls="searchcontacts2"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      Contacts
                    </button>
                  </li>
                </ul>
                <div class="tab-content py-3" id="searchtabContent">
                  <div
                    class="tab-pane fade active show"
                    id="searchall2"
                    role="tabpanel"
                    aria-labelledby="searchall-tab2"
                  >
                    <ul
                      class="list-group adminuiux-list-group list-group-flush bg-none show"
                    >
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Search apps</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch1"
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch1"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Include Pages</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch2"
                                checked=""
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch2"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Internet resource</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch3"
                                checked=""
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch3"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">News and Blogs</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch4"
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch4"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="searchorders2"
                    role="tabpanel"
                    aria-labelledby="searchorders-tab2"
                  >
                    <ul
                      class="list-group adminuiux-list-group list-group-flush bg-none show"
                    >
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Show order ID</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch5"
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch5"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">International Order</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch6"
                                checked=""
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch6"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Taxable Product</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch7"
                                checked=""
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch7"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Published Product</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch8"
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch8"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="searchcontacts2"
                    role="tabpanel"
                    aria-labelledby="searchcontacts-tab2"
                  >
                    <ul
                      class="list-group adminuiux-list-group list-group-flush bg-none show"
                    >
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Have email ID</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch9"
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch9"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Have phone number</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch10"
                                checked=""
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch10"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Photo available</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch11"
                                checked=""
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch11"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row gx-3">
                          <div class="col">Referral</div>
                          <div class="col-auto">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="searchswitch12"
                              />
                              <label
                                class="form-check-label"
                                for="searchswitch12"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="">
                  <div class="row gx-3 mb-1">
                    <div class="col">
                      <button class="btn btn-sm btn-theme">Apply</button>
                    </div>
                    <div class="col-auto">
                      <button class="btn btn-sm btn-link theme-red">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    `,

  // Side Menu
sideMenu: `
    <div id="side-menu" class="adminuiux-wrap">
      <div class="adminuiux-sidebar shadow-sm">
        <div class="adminuiux-sidebar-inner">
          <div class="px-3 not-iconic" id="features">
            <div class="row gx-3 gx-lg-4">
              <div class="col align-self-center menu-name">
                <h6>Features & Pages</h6>
              </div>
              <div class="col-auto">
                <a
                  class="collapsed btn btn-link btn-square"
                  data-bs-toggle="collapse"
                  data-bs-target="#usersidebarprofile"
                  aria-expanded="false"
                  role="button"
                  aria-controls="usersidebarprofile"
                >
                  <i class="bi bi-person-circle"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- user menu navigation -->
          <ul class="nav flex-column menu-active-line">
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                onclick="navigateTo('index.html')"
              >
                <i class="menu-icon bi bi-house-door"></i>
                <div class="col menu-name">Home</div>
              </a>
            </li>

            <!-- converter page -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-coin"></i>
                <div class="col menu-name">Bet Converter</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('convert.html')">
                    <i class="menu-icon bi bi-speedometer2"></i>
                    <div class="col align-self-center menu-name">
                      Converter
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('convertresult-success.html')">
                    <i class="menu-icon bi bi-bank"></i>
                    <div class="col align-self-center menu-name">Converter Result</div>
                  </a>
                </li>
              </ul>
            </li>

            <!-- Bet viewer -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Bet Viewer</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('betviewer.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                      Bet Viewer Screen
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('betviewer-result.html')">
                    <i class="menu-icon bi bi-speedometer"></i>
                    <div class="col align-self-center menu-name">
                      Bet viewer Result Screen
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <!-- Upcoming Events -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Upcoming Events</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('upcoming-events.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                      Upcoming Events Screen
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('upcoming-single-event.html')">
                    <i class="menu-icon bi bi-speedometer"></i>
                    <div class="col align-self-center menu-name">
                      Single Event Screen
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <!-- Bet Editor Events -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Bet Editor</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('bet-editor.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                      Edit bet Screen
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('bet-editor-load.html')">
                    <i class="menu-icon bi bi-speedometer"></i>
                    <div class="col align-self-center menu-name">
                      Load Bet Screen
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('bet-editor-add.html')">
                    <i class="menu-icon bi bi-speedometer"></i>
                    <div class="col align-self-center menu-name">
                      Add Game/Selection Screen
                    </div>
                  </a>
                </li>
                </ul>
            </li>

            <!-- Free Bet Codes -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Free Bet Codes</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('free-bet-codes.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                      Free Bet Codes Screen
                    </div>
                  </a>
                </li>
                </ul>
            </li>

            
            <!-- Free Prediction -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Free Predictions</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('free-prediction.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                      Free Prediction
                    </div>
                  </a>
                </li>
                </ul>
            </li>


            <!-- Bet Safer -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Bet Safer</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('bet-safer.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                      Bet Safer Screen
                    </div>
                  </a>
                </li>
                </ul>
            </li>

            <!-- Pools Bet -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Pool bet codes</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('pools-bet-code.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                      Pools bet Codes Screen
                    </div>
                  </a>
                </li>
                </ul>
            </li>

            <!-- Blog Scree -->
             <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Blog</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('blog.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                      Blog Screen
                    </div>
                  </a>
                </li>
              </ul>
            </li>

              <!-- Share codes screen -->
             <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Share Codes</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('share-codes.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                      Share Codes
                    </div>
                  </a>
                </li>
              </ul>
            </li>

             <!-- Pricing -->
             <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
              >
                <i class="menu-icon bi bi-hdd-network"></i>
                <div class="col menu-name">Pricing</div>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a class="nav-link" onclick="navigateTo('pricing.html')">
                    <i class="menu-icon bi bi-grid"></i>
                    <div class="col align-self-center menu-name">
                     Pricing Screen
                    </div>
                  </a>
                </li>
              </ul>
            </li>



          </ul>

          <div class="mt-auto"></div>


          <!-- quick links -->
          <div class="px-3 not-iconic">
            <div class="row gx-2">
              <div class="col-12 d-flex justify-content-between">
                <a
                  href="adminux-inventory-stock.html"
                  class="btn btn-square btn-link"
                >
                  <span class="position-relative">
                    <i data-feather="heart"></i>
                    <span
                      class="position-absolute top-0 start-100 translate-middle p-1 bg-success rounded-circle"
                    >
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </span>
                </a>
                <a
                  href="adminux-social-schedular.html"
                  class="btn btn-square btn-link"
                >
                  <span class="position-relative">
                    <i data-feather="calendar"></i>
                    <span
                      class="position-absolute top-0 start-100 translate-middle p-1 bg-warning rounded-circle"
                    >
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </span>
                </a>
                <a href="adminux-email.html" class="btn btn-square btn-link">
                  <i data-feather="inbox"></i>
                </a>
                <a
                  href="adminux-company-help-center.html"
                  class="btn btn-square btn-link"
                >
                  <i data-feather="help-circle"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
`,


  filterCanvas: `
      <div
      class="offcanvas offcanvas-end shadow border-0"
      tabindex="-1"
      id="filter"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      aria-labelledby="filterlabel"
    >
      <div class="offcanvas-header border-bottom">
        <div>
          <h5 class="offcanvas-title" id="filterlabel">Filter</h5>
          <p class="text-secondary small">Grab the trimmed details</p>
        </div>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <h6 class="offcanvas-title">Duration</h6>
        <p class="text-secondary small mb-3">
          Filter details with desired period
        </p>
        <div class="row gx-2 align-items-center mb-3 mb-lg-4">
          <div class="col">
            <div class="input-group input-group-md">
              <input
                type="text"
                class="form-control bg-transparent"
                value=""
                id="datepicker"
              />
              <span
                class="input-group-text text-theme-1 bg-transparent width-40"
                id="titlecalendar"
                onclick="this.previousElementSibling.click()"
                ><i class="bi bi-calendar-event"></i
              ></span>
            </div>
          </div>
          <div class="col-auto text-secondary small">-</div>
          <div class="col">
            <div class="input-group input-group-md">
              <input
                type="text"
                class="form-control bg-transparent datepicker-single"
                value=""
              />
              <span
                class="input-group-text text-theme-1 bg-transparent width-40"
                id="titlecalendar"
                onclick="this.previousElementSibling.click()"
                ><i class="bi bi-calendar-event"></i
              ></span>
            </div>
          </div>
        </div>
        <h6 class="offcanvas-title">Country Selection</h6>
        <p class="text-secondary small mb-3">
          Change country for operational details
        </p>
        <div class="mb-3 mb-lg-4">
          <div
            class="input-group input-group-md rounded"
            style="--mw-dynamic: calc(100% - 42px)"
          >
            <span class="input-group-text text-theme-1"
              ><i class="bi bi-box"></i
            ></span>
            <select class="form-control choices" id="titltfilterlist" multiple>
              <option value="San Francisco">San Francisco</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Chicago">Chicago</option>
              <option value="India" selected="">India</option>
              <option value="Sydney">Sydney</option>
              <option value="Seattle">Seattle</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="India">India</option>
            </select>
          </div>
          <div class="invalid-feedback">
            You have already selected maximum option allowed. (This is
            Configurable)
          </div>
        </div>

        <h6 class="offcanvas-title">Orders</h6>
        <p class="text-secondary small mb-2">1256 orders last week</p>
        <div class="row mb-3 mb-lg-4">
          <div class="col-12 px-0">
            <ul class="list-group list-group-flush bg-transparent border-0">
              <li class="list-group-item">
                <div class="row gx-3 gx-lg-4">
                  <div class="col">Online Orders</div>
                  <div class="col-auto">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="titleswitch1"
                      />
                      <label
                        class="form-check-label"
                        for="titleswitch1"
                      ></label>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row gx-3 gx-lg-4">
                  <div class="col">Offline Orders</div>
                  <div class="col-auto">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="titleswitch2"
                        checked=""
                      />
                      <label
                        class="form-check-label"
                        for="titleswitch2"
                      ></label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr class="mb-4" />
        <a
          href="adminux-company-help-center.html"
          class="row gx-3 align-items-center style-none text-theme-1 mb-3 mb-lg-4"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          <div class="col-auto">
            <i
              class="bi bi-life-preserver avatar avatar-30 bg-theme-1-subtle text-theme-1 rounded"
            ></i>
          </div>
          <div class="col">
            <p class="">Need help?</p>
          </div>
        </a>
        <a
          href="https://1.envato.market/nQzeo"
          target="_blank"
          class="row gx-3 align-items-center style-none text-theme-1 mb-3 mb-lg-4"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          <div class="col-auto">
            <span
              class="bi bi-basket avatar avatar-30 bg-theme-1-subtle text-theme-1 rounded position-relative"
            >
              <span
                class="position-absolute top-0 end-0 p-1 bg-green border border-light rounded-circle"
              >
                <span class="visually-hidden">New alerts</span>
              </span>
            </span>
          </div>
          <div class="col">
            <p class="">Buy now and support us!</p>
          </div>
        </a>
      </div>
      <div class="offcanvas-header border-top">
        <div class="col">
          <button class="btn btn-theme" data-bs-dismiss="offcanvas">
            Apply
          </button>
        </div>
        <div class="col-auto">
          <button class="btn btn-link theme-red" data-bs-dismiss="offcanvas">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `,

footer: `
  <!-- Footer Content -->
  <div class="adminuiux-footer has-adminuiux-sidebar mt-auto py-0">
    <div class="container py-4 py-lg-5">
      <!-- Main Footer Content -->
      <div class="row mb-4">
        <!-- Services Column -->
        <div class="col-6 col-md-3 mb-4">
          <h6 class="fw-bold mb-3" style="font-size: 14px;">Services</h6>
          <ul class="nav flex-column" style="gap: 8px;">
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="convert.html" style="color: #666; font-size: 13px;">Bet converter</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="betviewer.html" style="color: #666; font-size: 13px;">Bet viewer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="pools-bet-code.html" style="color: #666; font-size: 13px;">Pools bet codes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="bet-editor.html" style="color: #666; font-size: 13px;">Bet editor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="bet-safer.html" style="color: #666; font-size: 13px;">Bet saver</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Odd comparer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="free-prediction.html" style="color: #666; font-size: 13px;">Accurate predictions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="free-bet-codes.html" style="color: #666; font-size: 13px;">Free bet codes today</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Widget</a>
            </li>
          </ul>
        </div>

        <!-- Developer Column -->
        <div class="col-6 col-md-3 mb-4">
          <h6 class="fw-bold mb-3" style="font-size: 14px;">Developer</h6>
          <ul class="nav flex-column" style="gap: 8px;">
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Bet conversion API</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">API documentation</a>
            </li>
          </ul>
        </div>

        <!-- Quick Links Column -->
        <div class="col-6 col-md-3 mb-4">
          <h6 class="fw-bold mb-3" style="font-size: 14px;">Quick Links</h6>
          <ul class="nav flex-column" style="gap: 8px;">
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Faqs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Advertise with us</a>
            </li>
          </ul>
        </div>

        <!-- Support & Community Column -->
        <div class="col-6 col-md-3 mb-4">
          <h6 class="fw-bold mb-3" style="font-size: 14px;">Support</h6>
          <ul class="nav flex-column mb-4" style="gap: 8px;">
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">support@convertbetcodes.com</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Contact us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Why conversion may fail</a>
            </li>
          </ul>

          <h6 class="fw-bold mb-3" style="font-size: 14px;">Community</h6>
          <div class="d-flex gap-2">
            <a href="#" class="btn btn-sm" style="width: 36px; height: 36px; padding: 0; display: flex; align-items: center; justify-content: center; border: 1px solid #ddd; background: #fff;">
              <i class="bi bi-twitter" style="font-size: 16px; color: #000;"></i>
            </a>
            <a href="#" class="btn btn-sm" style="width: 36px; height: 36px; padding: 0; display: flex; align-items: center; justify-content: center; border: 1px solid #ddd; background: #fff;">
              <i class="bi bi-telegram" style="font-size: 16px; color: #000;"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Resources & Terms Section -->
      <div class="row mb-4 pt-4" style="border-top: 1px solid #e0e0e0;">
        <div class="col-12 col-md-6 mb-3">
          <h6 class="fw-bold mb-3" style="font-size: 14px;">Resources</h6>
          <ul class="nav" style="gap: 16px; flex-wrap: wrap;">
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #007bff; font-size: 13px;">Careers <span style="background: #007bff; color: #fff; padding: 2px 6px; font-size: 10px; border-radius: 3px; margin-left: 4px;">hiring</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Join our affiliate programme</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="blog.html" style="color: #666; font-size: 13px;">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Help Center <span style="background: #28a745; color: #fff; padding: 2px 6px; font-size: 10px; border-radius: 3px; margin-left: 4px;">soon</span></a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-6 mb-3">
          <h6 class="fw-bold mb-3" style="font-size: 14px;">Terms</h6>
          <ul class="nav" style="gap: 16px; flex-wrap: wrap;">
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Terms of service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Cookie Policy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Privacy Policy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Recommended Sites Section -->
      <div class="row pt-4" style="border-top: 1px solid #e0e0e0;">
        <div class="col-12">
          <h6 class="fw-bold mb-3" style="font-size: 14px;">Recommended sites</h6>
          <ul class="nav" style="gap: 16px; flex-wrap: wrap;">
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">bettingsitesbd.com</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Moroccobettingsites.com</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Bookmakerscameroun.com</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Codepromoafrique.com</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Winning Tips</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Live Football Scores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-0 py-1" href="#" style="color: #666; font-size: 13px;">Pools fixtures</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Copyright Footer -->
  <footer class="adminuiux-footer has-adminuiux-sidebar mt-0" style="background: #000; color: #fff;">
    <div class="container-fluid">
      <div class="row gx-3 gx-lg-4 align-items-center py-3">
        <div class="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
          <span style="font-size: 13px;">
            Copyright @2025, Designed by 
            <a href="https://adminuiux.com/" target="_blank" class="text-white text-decoration-underline">Adminuiux</a>
          </span>
        </div>
        <div class="col-12 col-md-6 text-center text-md-end">
          <span style="font-size: 13px;">
            * All Packages are fair use only(rate limited).
          </span>
        </div>
      </div>
    </div>
  </footer>

  <!-- Fixed Buttons -->
  <div class="position-fixed bottom-0 end-0 m-3 z-index-5" id="fixedbuttons">
    <button
      class="btn btn-square shadow rounded-circle"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#theming"
      aria-controls="theming"
      style="background: #000; color: #fff; width: 48px; height: 48px;"
    >
      <i class="bi bi-palette"></i>
    </button>
    <br />
    <button
      class="btn btn-square shadow mt-2 d-none rounded-circle"
      id="backtotop"
      style="background: #000; color: #fff; width: 48px; height: 48px;"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
`,

init() {
  if (document.getElementById("mobile-nav")) {
    document.getElementById("mobile-nav").innerHTML = this.mobileNav;
  }

  if (document.getElementById("filter-canvas")) {
    document.getElementById("filter-canvas").innerHTML = this.filterCanvas;
  }

  if (document.getElementById("desktop-nav") && window.innerWidth >= 1024) {
    document.getElementById("desktop-nav").innerHTML = this.desktopNav;
  }

  if (document.getElementById("side-menu")) {
    document.getElementById("side-menu").innerHTML = this.sideMenu;
  }

  if (document.getElementById("footer")) {
    document.getElementById("footer").innerHTML = this.footer;
  }

  this.setActiveNav();
},

  // Set active navigation state
  setActiveNav() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-item, .nav-link").forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  },
};



function navigateTo(page) {
  window.location.href = page;
}

function pageTitle(title) {
    return title
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => AppLayout.init());
