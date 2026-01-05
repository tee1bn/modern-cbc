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
          <div class="px-3 not-iconic mt-2">
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
                      Bet Bet Codes Screen
                    </div>
                  </a>
                </li>
                </ul>
            </li>

          </ul>

          <div class="mt-auto"></div>

          <!-- chat -->
          <ul class="nav flex-column menu-active-line mb-2">
            <li class="nav-item">
              <a href="adminux-chat.html" class="nav-link">
                <div class="col-auto">
                  <div
                    class="avatar avatar-30 coverimg rounded d-block align-top"
                  >
                    <img src="assets/img/modern-ai-image/user-2.jpg" alt="" />
                  </div>
                </div>
                <div class="col px-2 menu-name text-start not-iconic">
                  <!-- limit name character-->
                  <p class="mb-0 fs-14 lh-20">
                    Zoory Sen<br /><small class="opacity-75"
                      >Relationship Manager</small
                    >
                  </p>
                </div>
                <div class="col-auto not-iconic">
                  <i class="bi bi-chat-dots"></i>
                </div>
              </a>
            </li>
          </ul>

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
     <!-- footer content -->
    <div class="adminuiux-footer has-adminuiux-sidebar mt-auto py-0">
      <div class="container py-4 py-lg-5">
        <div class="row mb-3">
          <div class="col-12 col-xxl-4 mb-3 mb-xxl-0">
            <a class="style-none d-block mb-3 mb-lg-4" href="#">
              <div class="row gx-3 gx-lg-4">
                <div class="col-auto">
                  <span class="logo-icon"
                    ><img src="assets/img/logo.svg" class="width-50" alt=""
                  /></span>
                </div>
                <div class="col ps-0 align-self-center">
                  <h4 class="text-gradient mb-0">Convert.io</h4>
                  <p class="text-secondary small">Best Converter Platform</p>
                </div>
              </div>
            </a>

            <h3 class="mb-3">
              <span class="text-gradient">#1 Creative</span> &amp;
              <span class="text-gradient">Multipurpose</span> Bet Converter
            </h3>
            <p class="text-secondary">
              Convert.io is creative and multipurpose template. You can use it for
              CRM, Business application, Intranet Application, Portal service
              and Many more. It comes with unlimited possibilities and 10+
              predefined styles which you can also mix up and create new style.
              Do support and spread a word for us.
            </p>
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-xxl offset-xl-1 mb-3 mb-md-0">
            <h5 class="mb-3">
              The <span class="text-gradient">Dashboards</span>
            </h5>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a
                  class="nav-link px-0"
                  href="https://www.adminuiux.com/adminuiux/adminux-mobile/html/finance-dashboard.html"
                  >Finance</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-0"
                  href="https://www.adminuiux.com/adminuiux/adminux-mobile/html/network-dashboard.html"
                  >Network</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-0"
                  href="https://www.adminuiux.com/adminuiux/adminux-mobile/html/inventory-dashboard.html"
                  >Inventory</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-0"
                  href="https://www.adminuiux.com/adminuiux/adminux-mobile/html/social-dashboard.html"
                  >Social</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-0"
                  href="https://www.adminuiux.com/adminuiux/adminux-mobile/html/project-dashboard.html"
                  >Project</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-0"
                  href="https://www.adminuiux.com/adminuiux/adminux-mobile/html/learning-dashboard.html"
                  >Learning</a
                >
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-xxl mb-3 mb-md-0">
            <h5 class="mb-3">
              Creative <span class="text-gradient">Pages</span>
            </h5>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link px-0" href="adminux-calendar.html"
                  >Calendar</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link px-0" href="adminux-email.html">Email</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-0" href="adminux-explorer.html"
                  >Explorer</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link px-0" href="adminux-company-help-center.html"
                  >Need Support
                  <i class="bi bi-heart-fill text-theme-1 theme-red"></i
                ></a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-0"
                  href="https://1.envato.market/7N7Br"
                  target="_blank"
                  >Buy Now <i class="bi bi-arrow-up-right-square"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-4 col-xxl-3">
            <p class="mb-2"><b>Main office:</b></p>
            <p class="mb-1">
              <a href="https://adminuiux.com/" target="_blank"
                >www.adminuiux.com</a
              >
            </p>
            <p class="text-secondary mb-4">
              Test data 103909 Witamer CR, Niagara Falls, NY 14305, United
              States
            </p>

            <div class="row gx-3 align-items-center mb-3">
              <div class="col-auto">
                <i class="bi bi-clock text-theme-1 h4"></i>
              </div>
              <div class="col text-secondary">
                0441-215-518625<br /><span>Mon - Sat, 9:00 am - 10:00pm</span>
              </div>
            </div>
            <div class="row gx-3 align-items-center mb-3">
              <div class="col-auto">
                <i class="bi bi-telephone text-theme-1 h4"></i>
              </div>
              <div class="col text-secondary">+1-000 000 100000</div>
            </div>
          </div>
        </div>

        <div class="row gx-3 gx-lg-4 align-items-center">
          <div class="col-12 col-md-auto mb-4 mb-md-0">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.facebook.com/adminuiux1/"
                  target="_blank"
                >
                  <i class="bi bi-facebook h5"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://twitter.com/admiinuiux"
                  target="_blank"
                >
                  <i class="bi bi-twitter h5"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://linkedin.com/company/adminuiux"
                  target="_blank"
                >
                  <i class="bi bi-linkedin h5"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.instagram.com/adminuiux/"
                  target="_blank"
                >
                  <i class="bi bi-instagram h5"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-auto ms-auto">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div class="row gx-3 gx-lg-4 align-items-center">
                    <div class="col-auto">
                      <i class="bi bi-play-fill h3"></i>
                    </div>
                    <div class="col">
                      <p class="mb-0 fs-12 opacity-50">Get this on</p>
                      <p>Google Play</p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div class="row gx-3 gx-lg-4 align-items-center">
                    <div class="col-auto">
                      <i class="bi bi-apple h4"></i>
                    </div>
                    <div class="col">
                      <p class="mb-0 fs-12 opacity-50">Get this on</p>
                      <p>App Store</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- standard footer -->
    <footer class="adminuiux-footer has-adminuiux-sidebar mt-auto bg-theme-1">
      <div class="container-fluid">
        <div class="row gx-3 gx-lg-4">
          <div class="col-10 col-md col-lg py-2">
            <span class="small"
              >Copyright @2025, Designed by
              <a
                href="https://adminuiux.com/"
                target="_blank"
                class="text-white"
                >Adminuiux</a
              >
              on Earth ❤️
            </span>
          </div>
          <div class="col-12 col-md-auto col-lg-auto align-self-center">
            <ul class="nav small">
              <li class="nav-item">
                <a
                  class="nav-link text-white px-2"
                  href="adminux-company-help-center.html"
                  >Help</a
                >
              </li>
              <li class="nav-item opacity-50">|</li>
              <li class="nav-item">
                <a
                  class="nav-link text-white px-2"
                  href="https://www.adminuiux.com/adminuiux/adminux-mobile/html/terms-of-use.html"
                  >Terms of Use</a
                >
              </li>
              <li class="nav-item opacity-50">|</li>
              <li class="nav-item">
                <a
                  class="nav-link text-white px-2"
                  href="https://www.adminuiux.com/adminuiux/adminux-mobile/html/privacy-policy.html"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>


    <!-- arrow action-->
    <div class="position-fixed bottom-0 end-0 m-3 z-index-5" id="fixedbuttons">
      <button
        class="btn btn-square btn-theme shadow rounded-circle"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#theming"
        aria-controls="theming"
      >
        <i class="bi bi-palette"></i>
      </button>
      <br />
      <button
        class="btn btn-theme btn-square shadow mt-2 d-none rounded-circle theme-black"
        id="backtotop"
      >
        <i class="bi bi-arrow-up"></i>
      </button>
    </div>
  `,

  // Initialize layout
  init() {
    document.getElementById("mobile-nav").innerHTML = this.mobileNav;
    document.getElementById("filter-canvas").innerHTML = this.filterCanvas;
    document.getElementById("desktop-nav").innerHTML = this.desktopNav;
    document.getElementById("side-menu").innerHTML = this.sideMenu;
    document.getElementById("footer").innerHTML = this.footer;
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
