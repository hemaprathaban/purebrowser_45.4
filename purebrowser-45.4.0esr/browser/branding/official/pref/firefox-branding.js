/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "https://puri.sm");
pref("startup.homepage_welcome_url.additional", "https://duckduckgo.com");
// Interval: Time between checks for a new version (in seconds)
pref("app.update.interval", 43200); // 12 hours
// The time interval between the downloading of mar file chunks in the
// background (in seconds)
pref("app.update.download.backgroundInterval", 60);
// Give the user x seconds to react before showing the big UI. default=48 hours
pref("app.update.promptWaitTime", 172800);
// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "https://puri.sm");
// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard. 
pref("app.update.url.details", "https://puri.sm");

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 63);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

// code usage depends on contracts, please contact the Firefox module owner if you have questions
pref("browser.search.param.yahoo-fr", "moz35");
pref("browser.search.param.yahoo-fr-ja", "mozff");

// Number of usages of the web console or scratchpad.
// If this is less than 5, then pasting code into the web console or scratchpad is disabled
pref("devtools.selfxss.count", 0);
lockPref("startup.homepage_override_url","https://duckduckgo.com");
lockPref("startup.homepage_welcome_url","https://duckduckgo.com");
pref("browser.search.defaultenginename",      "DuckDuckGo");
pref("browser.search.order.1",                "data:text/plain,browser.search.order.1=DuckDuckGo");
pref("browser.search.order.2",                "data:text/plain,browser.search.order.2=DuckDuckGo");
 pref("browser.search.order.3",                "data:text/plain,browser.search.order.3=DuckDuckGo");
// // Market-specific search defaults (US market only)
pref("browser.search.geoSpecificDefaults", true);
pref("browser.search.defaultenginename.US",      "data:text/plain,browser.search.defaultenginename.US=DuckDuckGo");
pref("browser.search.order.US.1",                "data:text/plain,browser.search.order.US.1=DuckDuckGo");
pref("browser.search.order.US.2",                "data:text/plain,browser.search.order.US.2=DuckDuckGo");
pref("browser.search.order.US.3",                "data:text/plain,browser.search.order.US.3=DuckDuckGo");
pref("datareporting.healthreport.service.firstRun", false);
pref("datareporting.healthreport.service.enabled", false);
pref("browser.search.suggest.enabled", false);
pref("browser.urlbar.suggest.searches", true);
pref("browser.urlbar.userMadeSearchSuggestionsChoice", false);
pref("browser.urlbar.suggest.bookmark", false);
pref("browser.urlbar.suggest.history", false);
pref("browser.urlbar.suggest.history.onlyTyped", true);
pref("browser.urlbar.suggest.openpage", true);
pref("xpinstall.signatures.required",false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.healthreport.infoURL", "https://puri.sm");
pref("geo.enabled", false);
// Make sure that the request URL of the GeoLocation backend is empty
pref("geo.wifi.uri", "");

// Disable Pocket and make sure that the request URLs of the Pocket are empty
pref("browser.pocket.enabled", false);
pref("browser.pocket.api", "");
pref("browser.pocket.site", "");
pref("browser.pocket.oAuthConsumerKey", "");
pref("browser.pocket.useLocaleList", false);
pref("browser.pocket.enabledLocales", "");

// Poodle attack
pref("security.tls.version.min", 1);

// Don't call home for blacklisting
pref("extensions.blocklist.enabled", false);

// Disable third party cookies
pref("network.cookie.cookieBehavior", 1);

// Prevent EULA dialog to popup on first run
pref("browser.EULA.override", true);

// disable app updater url
pref("app.update.url", "http://127.0.0.1/");"

// Privacy & Freedom Issues
// https://webdevelopmentaid.wordpress.com/2013/10/21/customize-privacy-settings-in-mozilla-firefox-part-1-aboutconfig/
// https://panopticlick.eff.org
// http://ip-check.info
// http://browserspy.dk
// https://wiki.mozilla.org/Fingerprinting
// http://www.browserleaks.com
// http://fingerprint.pet-portal.eu
pref("privacy.donottrackheader.enabled", true);
pref("privacy.donottrackheader.value", 1);
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
pref("browser.safebrowsing.enabled", false);
pref("browser.safebrowsing.malware.enabled", false);
pref("services.sync.privacyURL", "https://www.gnu.org/software/gnuzilla/");
pref("social.enabled", false);
pref("social.remote-install.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.healthreport.about.reportUrl", "127.0.0.1");
pref("datareporting.healthreport.documentServerURI", "127.0.0.1");
pref("healthreport.uploadEnabled", false);
pref("social.toast-notifications.enabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.service.enabled", false);
pref("browser.slowStartup.notificationDisabled", true);
pref("network.http.sendRefererHeader", 2);
pref("network.http.referer.spoofSource", true);
pref("dom.event.clipboardevents.enabled",false);
pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.http.sendSecureXSiteReferrer", false);
pref("toolkit.telemetry.enabled", false);
// Do not tell what plugins do we have enabled: https://mail.mozilla.org/pipermail/firefox-dev/2013-November/001186.html
pref("plugins.enumerable_names", "");
pref("plugin.state.flash", 1);
// Do not autoupdate search engines
pref("browser.search.update", false);
// Warn when the page tries to redirect or refresh
pref("accessibility.blockautorefresh", true);
pref("dom.battery.enabled", false);
pref("device.sensors.enabled", false);
pref("camera.control.face_detection.enabled", false);
pref("camera.control.autofocus_moving_callback.enabled", false);
pref("network.http.speculative-parallel-limit", 0);

// Disable channel updates
pref("app.update.enabled", false);
pref("app.update.auto", false);

// Avoid logjam attack
pref("security.ssl3.dhe_rsa_aes_128_sha", false);
pref("security.ssl3.dhe_rsa_aes_256_sha", false);
pref("security.ssl3.dhe_dss_aes_128_sha", false);
pref("security.ssl3.dhe_rsa_des_ede3_sha", false);

// Disable heartbeat
pref("browser.selfsupport.url", "");

// Don't download ads for the newtab page
pref("browser.newtabpage.directory.source", "");
pref("browser.newtabpage.directory.ping", "");
pref("browser.newtabpage.introShown", true);

// Disable home snippets
pref("browser.aboutHomeSnippets.updateUrl", "data:text/html");

// Disable directory service
pref("social.directories", "");
pref("social.whitelist", "");
pref("social.shareDirectory", "");

// Don't install openh264 codec
pref("media.gmp-gmpopenh264.enabled", false);

// Mobile
pref("privacy.announcements.enabled", false);
pref("browser.snippets.enabled", false);
pref("browser.snippets.syncPromo.enabled", false);
pref("browser.snippets.geoUrl", "http://127.0.0.1/");
pref("browser.snippets.updateUrl", "http://127.0.0.1/");
pref("browser.snippets.statsUrl", "http://127.0.0.1/");
pref("datareporting.policy.firstRunTime", 0);
pref("datareporting.policy.dataSubmissionPolicyVersion", 2);
pref("browser.webapps.checkForUpdates", 0);
pref("browser.webapps.updateCheckUrl", "http://127.0.0.1/");
pref("app.faqURL", "http://libreplanet.org/wiki/Group:IceCat/FAQ");

// Use old style preferences, that allow javascript to be disabled
pref("browser.preferences.inContent",false);

// Disable Freedom Violating DRM Feature
pref("browser.eme.ui.enabled", false);
pref("media.eme.enabled", false);
pref("media.eme.apiVisible", false);

// Disable plugin installer
pref("plugins.hide_infobar_for_missing_plugin", true);
pref("plugins.hide_infobar_for_outdated_plugin", true);
pref("plugins.notifyMissingFlash", false);

// PFS url
pref("pfs.datasource.url", "http://gnuzilla.gnu.org/plugins/PluginFinderService.php?mimetype=%PLUGIN_MIMETYPE%");
pref("pfs.filehint.url", "http://gnuzilla.gnu.org/plugins/PluginFinderService.php?mimetype=%PLUGIN_MIMETYPE%");

// Disable Link to FireFox Marketplace, currently loaded with non-free "apps"
pref("browser.apps.URL", "");
// Preferences for the Get Add-ons panel
pref ("extensions.webservice.discoverURL", "https://directory.fsf.org/wiki/GNU_IceCat");
pref ("extensions.getAddons.search.url", "https://directory.fsf.org/wiki/GNU_IceCat");
