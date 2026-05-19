/**
 * GA4 Event Tracking for Göc Fenster Rheinfelden
 * Tracks conversions: form submissions, phone clicks, WhatsApp clicks, CTA clicks
 *
 * Usage: Include in footer with <script defer src="/js/ga4-events.js"></script>
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // 1. FORM SUBMISSION TRACKING
  setupFormTracking();

  // 2. PHONE CLICK TRACKING
  setupPhoneClickTracking();

  // 3. WHATSAPP CLICK TRACKING
  setupWhatsappClickTracking();

  // 4. CTA BUTTON TRACKING
  setupCTAClickTracking();

  // 5. SCROLL DEPTH TRACKING (automatic in GA4)
  setupScrollTracking();
});

/**
 * Track form submissions
 */
function setupFormTracking() {
  const forms = document.querySelectorAll('form[data-ga-track="form"]');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const formLabel = form.getAttribute('data-form-label') || 'contact_form';

      gtag('event', 'form_submission', {
        'event_category': 'engagement',
        'event_label': formLabel,
        'page_path': window.location.pathname,
        'page_title': document.title,
        'timestamp': new Date().toISOString()
      });
    });
  });
}

/**
 * Track phone clicks (tel: links)
 */
function setupPhoneClickTracking() {
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

  phoneLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const phoneNumber = link.getAttribute('href').replace('tel:', '');

      gtag('event', 'phone_click', {
        'event_category': 'engagement',
        'event_label': phoneNumber,
        'page_path': window.location.pathname,
        'page_title': document.title,
        'timestamp': new Date().toISOString()
      });
    });
  });
}

/**
 * Track WhatsApp clicks
 */
function setupWhatsappClickTracking() {
  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[data-whatsapp="true"]');

  whatsappLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const phoneNumber = link.getAttribute('href').match(/\d+/)[0] || 'unknown';

      gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': phoneNumber,
        'page_path': window.location.pathname,
        'page_title': document.title,
        'timestamp': new Date().toISOString()
      });
    });
  });
}

/**
 * Track CTA button clicks
 */
function setupCTAClickTracking() {
  const ctaButtons = document.querySelectorAll('[data-cta="true"], .btn-cta, [data-ga-cta]');

  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ctaLabel = button.getAttribute('data-cta-label') ||
                       button.getAttribute('data-ga-cta') ||
                       button.textContent.trim() ||
                       'cta_button';

      gtag('event', 'cta_click', {
        'event_category': 'conversion',
        'event_label': ctaLabel,
        'page_path': window.location.pathname,
        'page_title': document.title,
        'timestamp': new Date().toISOString()
      });
    });
  });
}

/**
 * Track scroll depth (25%, 50%, 75%, 90%)
 */
function setupScrollTracking() {
  let scrollTracked = {
    '25': false,
    '50': false,
    '75': false,
    '90': false
  };

  window.addEventListener('scroll', function() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (window.scrollY / docHeight) * 100;

    // Track 25% scroll
    if (scrollPercent >= 25 && !scrollTracked['25']) {
      scrollTracked['25'] = true;
      gtag('event', 'scroll_depth', {
        'event_category': 'engagement',
        'event_label': '25_percent',
        'page_path': window.location.pathname
      });
    }

    // Track 50% scroll
    if (scrollPercent >= 50 && !scrollTracked['50']) {
      scrollTracked['50'] = true;
      gtag('event', 'scroll_depth', {
        'event_category': 'engagement',
        'event_label': '50_percent',
        'page_path': window.location.pathname
      });
    }

    // Track 75% scroll
    if (scrollPercent >= 75 && !scrollTracked['75']) {
      scrollTracked['75'] = true;
      gtag('event', 'scroll_depth', {
        'event_category': 'engagement',
        'event_label': '75_percent',
        'page_path': window.location.pathname
      });
    }

    // Track 90% scroll
    if (scrollPercent >= 90 && !scrollTracked['90']) {
      scrollTracked['90'] = true;
      gtag('event', 'scroll_depth', {
        'event_category': 'engagement',
        'event_label': '90_percent',
        'page_path': window.location.pathname
      });
    }
  });
}

/**
 * Manual event tracking function (for inline use)
 *
 * Usage: trackEvent('phone_click', 'engagement', '07623-9995')
 */
function trackEvent(eventName, category, label) {
  if (typeof gtag === 'undefined') {
    console.warn('GA4 not initialized yet');
    return;
  }

  gtag('event', eventName, {
    'event_category': category,
    'event_label': label,
    'page_path': window.location.pathname,
    'page_title': document.title,
    'timestamp': new Date().toISOString()
  });
}

// Export for external use
window.trackEvent = trackEvent;
