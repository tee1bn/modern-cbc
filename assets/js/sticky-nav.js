/**
 * GLOBAL STICKY NAVIGATION SYSTEM
 * Universal sticky header management for all pages
 * 
 * Usage:
 * 1. Include this JS file in your HTML
 * 2. Include sticky-navigation.css in your HTML
 * 3. Add appropriate classes to your sticky elements:
 *    - .sticky-layer-1 for first level (sports bar, filters, etc.)
 *    - .sticky-layer-2 for second level (market tabs, sub-filters, etc.)
 *    - .sticky-layer-3 for third level if needed
 */

(function() {
  'use strict';
  
  // Configuration
  const CONFIG = {
    DESKTOP_NAV_HEIGHT: 72,
    PAGE_HEADER_HEIGHT: 80,
    SCROLL_THRESHOLD: 100, // Pixels to scroll before hiding header
    THROTTLE_DELAY: 10,
    RESIZE_DELAY: 100
  };
  
  // State
  let lastScrollTop = 0;
  let scrollTimeout = null;
  let resizeTimeout = null;
  
  // Elements
  const elements = {
    desktopNav: null,
    pageHeader: null,
    stickyLayers: []
  };
  
  /**
   * Initialize the sticky navigation system
   */
  function init() {
    // Get elements
    elements.desktopNav = document.querySelector('.adminuiux-header');
    elements.pageHeader = document.getElementById('page-header');
    elements.stickyLayers = [
      ...document.querySelectorAll('.sticky-layer-1, .sticky-header.layer-1'),
      ...document.querySelectorAll('.sticky-layer-2, .sticky-header.layer-2'),
      ...document.querySelectorAll('.sticky-layer-3, .sticky-header.layer-3')
    ];
    
    // Initial update
    updateStickyPositions();
    
    // Set up event listeners
    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', throttledResize);
    window.addEventListener('load', updateStickyPositions);
    
    // Expose global functions
    window.StickyNav = {
      refresh: updateStickyPositions,
      hide: hidePageHeader,
      show: showPageHeader,
      config: CONFIG
    };
    
    console.log('✓ Sticky Navigation System initialized');
  }
  
  /**
   * Main update function for sticky positions
   */
  function updateStickyPositions() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = scrollTop > lastScrollTop;
    const isMobile = window.innerWidth < 768;
    
    // Update page header visibility
    if (elements.pageHeader) {
      if (scrollTop > CONFIG.SCROLL_THRESHOLD && isScrollingDown) {
        hidePageHeader();
      } else if (!isScrollingDown && scrollTop < CONFIG.SCROLL_THRESHOLD * 2) {
        showPageHeader();
      }
    }
    
    // Add scrolled class for shadow effects
    updateScrolledClasses(scrollTop);
    
    // Update dynamic positions for all sticky layers
    updateLayerPositions(isMobile);
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
  
  /**
   * Hide the page header
   */
  function hidePageHeader() {
    if (elements.pageHeader && !elements.pageHeader.classList.contains('hidden')) {
      elements.pageHeader.classList.add('hidden');
    }
  }
  
  /**
   * Show the page header
   */
  function showPageHeader() {
    if (elements.pageHeader && elements.pageHeader.classList.contains('hidden')) {
      elements.pageHeader.classList.remove('hidden');
    }
  }
  
  /**
   * Update scrolled classes for shadow effects
   */
  function updateScrolledClasses(scrollTop) {
    const threshold = 10;
    
    // Desktop nav
    if (elements.desktopNav) {
      elements.desktopNav.classList.toggle('scrolled', scrollTop > threshold);
    }
    
    // Page header
    if (elements.pageHeader) {
      elements.pageHeader.classList.toggle('scrolled', scrollTop > threshold);
    }
    
    // All sticky layers
    elements.stickyLayers.forEach(layer => {
      layer.classList.toggle('scrolled', scrollTop > threshold);
    });
  }
  
  /**
   * Update positions for all sticky layers
   */
  function updateLayerPositions(isMobile) {
    const headerIsHidden = elements.pageHeader?.classList.contains('hidden') || false;
    
    // Get layer heights dynamically
    const layer1Height = getElementHeight('.sticky-layer-1, .sticky-header.layer-1', 56);
    const layer2Height = getElementHeight('.sticky-layer-2, .sticky-header.layer-2', 48);
    
    if (!isMobile) {
      // Desktop positioning
      updateDesktopPositions(headerIsHidden, layer1Height, layer2Height);
    } else {
      // Mobile positioning
      updateMobilePositions(headerIsHidden, layer1Height, layer2Height);
    }
  }
  
  /**
   * Update positions for desktop layout
   */
  function updateDesktopPositions(headerIsHidden, layer1Height, layer2Height) {
    const baseTop = headerIsHidden 
      ? CONFIG.DESKTOP_NAV_HEIGHT 
      : CONFIG.DESKTOP_NAV_HEIGHT + CONFIG.PAGE_HEADER_HEIGHT;
    
    // Layer 1
    document.querySelectorAll('.sticky-layer-1, .sticky-header.layer-1').forEach(el => {
      el.style.top = `${baseTop}px`;
    });
    
    // Layer 2
    document.querySelectorAll('.sticky-layer-2, .sticky-header.layer-2').forEach(el => {
      el.style.top = `${baseTop + layer1Height}px`;
    });
    
    // Layer 3
    document.querySelectorAll('.sticky-layer-3, .sticky-header.layer-3').forEach(el => {
      el.style.top = `${baseTop + layer1Height + layer2Height}px`;
    });
  }
  
  /**
   * Update positions for mobile layout
   */
  function updateMobilePositions(headerIsHidden, layer1Height, layer2Height) {
    const baseTop = headerIsHidden ? 0 : CONFIG.PAGE_HEADER_HEIGHT;
    
    // Layer 1
    document.querySelectorAll('.sticky-layer-1, .sticky-header.layer-1').forEach(el => {
      el.style.top = `${baseTop}px`;
    });
    
    // Layer 2
    document.querySelectorAll('.sticky-layer-2, .sticky-header.layer-2').forEach(el => {
      el.style.top = `${baseTop + layer1Height}px`;
    });
    
    // Layer 3
    document.querySelectorAll('.sticky-layer-3, .sticky-header.layer-3').forEach(el => {
      el.style.top = `${baseTop + layer1Height + layer2Height}px`;
    });
  }
  
  /**
   * Get element height dynamically
   */
  function getElementHeight(selector, defaultHeight) {
    const element = document.querySelector(selector);
    return element ? element.offsetHeight : defaultHeight;
  }
  
  /**
   * Throttle scroll events for better performance
   */
  function throttledScroll() {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
      updateStickyPositions();
      scrollTimeout = null;
    }, CONFIG.THROTTLE_DELAY);
  }
  
  /**
   * Throttle resize events
   */
  function throttledResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateStickyPositions, CONFIG.RESIZE_DELAY);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();