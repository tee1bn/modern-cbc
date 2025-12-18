const AppLayout = {

    bottomNav: `
        <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
            <div class="flex justify-around items-center">
                <button onClick="navigateTo('index.html')" class="btn flex flex-col items-center">
                    <svg class="text-primary-light font-bold" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-plus-icon lucide-house-plus"><path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35"/><path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8"/><path d="M15 18h6"/><path d="M18 15v6"/>
                    </svg>
                    <span class="text-xs font-bold text-primary-light">Home</span>
                </button>
                <button onClick="navigateTo('convert.html')" class="btn flex flex-col items-center">
                    <svg class="text-primary-light font-bold" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw-icon lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
                    <span class="text-xs font-bold text-primary-light">Convert</span>
                </button>
                
                <button onclick="toggleExpandableMenu()" class="btn bg-blue-500 text-white w-12 h-12 rounded-full -mt-6 flex items-center justify-center shadow-lg">
                    <svg class="font-bold" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </button>
                
                <button onClick="navigateTo('bet-editor.html')" class="btn flex flex-col items-center">
                    <svg class="text-primary-light font-bold"class="text-primary-light font-bold" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-cog-icon lucide-monitor-cog"><path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/></svg>
                    <span class="text-xs text-primary-light font-bold">Edit</span>
                </button >
                
                <button onclick="toggleSideMenu()" class="btn flex flex-col items-center">
                    <svg class="text-primary-light font-bold" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-logs-icon lucide-logs"><path d="M3 5h1"/><path d="M3 12h1"/><path d="M3 19h1"/><path d="M8 5h1"/><path d="M8 12h1"/><path d="M8 19h1"/><path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/></svg>
                    <span class="nav-label">Menu</span>
                </button>
            </div>
        </nav>
    `,

    // Expandable Menu (+ button popup)
    expandableMenu: `
        <div class="menu-overlay hidden fixed inset-0 bg-black/1 flex items-end justify-center z-50 pb-24">
            <div onclick="toggleExpandableMenu()" class="absolute inset-0"></div>
            <div class="menu-content">
                <div class="bg-white p-6 rounded-xl shadow-lg grid grid-cols-2 gap-4 w-80 ">
                    <button onClick="navigateTo('prediction.html')" class="btn flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"class="text-red-600 font-bold" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
                      <span class="text-xs text-primary-light font-bold flex flex-row">Hot Prediction</span>
                    </button>
                    <button onClick="navigateTo('free-bet-codes.html')" class="btn flex flex-col items-center">
                      <Ticket class="text-primary-light font-bold"/>
                      <span class="text-xs text-primary-light font-bold">Free Bet Codes</span>
                    </button>
                    <button onClick="navigateTo('bet-viewer.html')" class="btn flex flex-col items-center">
                       <Eye class="text-primary-light font-bold"/>
                      <span class="text-xs  text-primary-light font-bold">Bet Viewer</span>
                    </button>
                    <button onClick="navigateTo('pools-bet-codes.html')" class="btn flex flex-col items-center">
                       <Layers class="text-primary-light font-bold"/>
                      <span class="text-xs text-primary-light font-bold">Pools Bet Codes</span>
                    </button>
                </div>
            </div>
        </div>
    `,

    // Desktop Navbar
    desktopNav: `
            <nav class="bg-linear-to-bl from-blue-200 to-blue-500 text-white shadow-lg ">
                <div class="container mx-auto px-4">
                    <div class="flex items-center justify-between h-16">
                        <!-- Left Side: Logo and Main Links -->
                        <div class="flex items-center space-x-6">
                            <div class="text-2xl font-bold text-white">CONVERT.io</div>
                            <div class="hidden md:flex items-center space-x-4">
                                <a href="#" class="flex items-center space-x-1 hover:text-primary">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                    <span>Live In-Play</span>
                                </a>
                                <a href="#" class="flex items-center space-x-1 hover:text-primary">
                                     <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5-3.5a2.5 2.5 0 113.536 3.536L6.5 17.5 2 19l1.5-4.5 8-8z"></path></svg>
                                    <span>Promotions</span>
                                </a>
                                 <a href="#" class="flex items-center space-x-1">
                                     <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    <span>Boosts</span>
                                </a>
                            </div>
                        </div>

                        <!-- Right Side: Auth Buttons -->
       
                        </div>
                    </div>
                </div>
            </nav>
    `,

    // Side Menu 
    sideMenu: `
        <div class="side-menu hidden">
            <div onclick="toggleSideMenu()" class="absolute inset-0 bg-primary-light"></div>
            <div class="side-menu-content">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-8">
                        <h2 class="text-2xl font-bold">Menu</h2>
                        <button onclick="toggleSideMenu()" class="text-white hover:text-gray-700">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="space-y-2">
                        <a href="index.html" class="menu-link">Home</a>
                        <a href="convert.html" class="menu-link"> Convert</a>
                        <a href="bet-viewer.html" class="menu-link">Bet Viewer</a>
                        <a href="codes.html" class="menu-link">Free Codes</a>
                        <a href="predictions.html" class="menu-link">Predictions</a>
                        <a href="pools.html" class="menu-link">Pools</a>
                        <a href="pricing.html" class="menu-link">Pricing</a>
                        <a href="api.html" class="menu-link">API</a>
                        <hr class="my-4">
                        <a href="profile.html" class="menu-link">Profile</a>
                        <a href="settings.html" class="menu-link">Settings</a>
                        <a href="logout.html" class="menu-link text-red-600">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    `,

    // Initialize layout
    init() {
        document.getElementById('bottom-nav').innerHTML = this.bottomNav;
        document.getElementById('expandable-menu').innerHTML = this.expandableMenu;
        document.getElementById('desktop-nav').innerHTML = this.desktopNav;
        document.getElementById('side-menu').innerHTML = this.sideMenu;
        this.setActiveNav();
    },

    // Set active navigation state
    setActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-item, .nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    },
    
};

const state = {
    expandableMenuOpen: false,
    sideMenuOpen: false
}


// Menu toggle functions
function toggleExpandableMenu() {
    state.expandableMenuOpen = !state.expandableMenuOpen
     const menu = document.querySelector('#expandable-menu > .menu-overlay')

    if(state.expandableMenuOpen) {
        menu.classList.remove('hidden')
    }else {
        menu.classList.add('hidden')
    }
}

function toggleSideMenu() {
    state.sideMenuOpen = !state.sideMenuOpen;
   const menu = document.querySelector('#side-menu > .side-menu');
    
    if (state.sideMenuOpen) {
        menu.classList.remove('hidden');
    } else {
        setTimeout(() => menu.classList.add('hidden'), 300);
    }
}

function navigateTo(page) {
    window.location.href = page
}


// Initialize on page load
document.addEventListener('DOMContentLoaded', () => AppLayout.init());