/* First line must be a comment */

// Disable initial notifications
user_pref("browser.search.update", false);
user_pref("calender.integration.notify", false);
user_pref("general.warnOnAboutConfig", false);
user_pref("mail.provider.enabled", false);
user_pref("mail.rights.version", 1);
user_pref("mail.shell.checkDefaultClient", false);
user_pref("mailnews.start_page.enabled", false);

// Disable history
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.manager.retention", 0);
user_pref("dom.storage.enabled", false);
user_pref("layout.css.visited_links_enabled", false);
user_pref("network.cookie.cookieBehavior", 2);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("places.history.enabled", false);

// Disable miscellaneous remote connections
user_pref("beacon.enabled", false);
user_pref("browser.send_pings", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("toolkit.telemetry.enabled", false);

// Disable JavaScript
user_pref("javascript.enabled", false);
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.ion", false);

// Disable fonts
user_pref("browser.display.use_document_fonts", 0);
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

// Disable geolocation
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoip.url", "");
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");

// Disable hardware acceleration
user_pref("layers.acceleration.disabled", true);

// Disable WebGL
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disabled", true);
user_pref("webgl.min_capability_mode", true);

// Disable WebRTC
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.video.enabled", false);

// Disable plugins
user_pref("plugin.default.state", 0);
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);
user_pref("plugins.enumerable_names", "");
user_pref("security.xpconnect.plugin.unrestricted", false);

// Disable HTML
user_pref("mail.inline_attachments", false);
user_pref("mailnews.display.disallow_mime_handlers", 3);
user_pref("mailnews.display.html_as", 1);
user_pref("mailnews.display.prefer_plaintext", true);
user_pref("mailnews.message_display.allow_plugins", false);
user_pref("rss.display.prefer_plaintext", false);

// Disable remote images
user_pref("dom.disable_image_src_set", true);
user_pref("permissions.default.image", false);

// Disable useragent
user_pref("general.useragent.override", "");

// Network hardening
user_pref("network.IDN_show_punycode", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.sendRefererHeader", 0);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.proxy.socks_remote_dns", true);

// TLS security
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Disable TLS ciphers that do not utilize perfect forward secrecy
user_pref("security.ssl3.rsa_aes_128_sha", false);
user_pref("security.ssl3.rsa_aes_256_sha", false);

// Disable TLS RC4 ciphers
user_pref("security.tls.unrestricted_rc4_fallback", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);

// Disable TLS 3DES ciphers
user_pref("security.ssl3.rsa_des_ede3_sha", false);

// Disable DHE ciphers to protect against weak DH groups
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);

// TLS minimum protocol version
user_pref("security.tls.version.min", 3);

// Enhance chat privacy
user_pref("purple.logging.log_chats", false);
user_pref("purple.logging.log_ims", false);
user_pref("purple.logging.log_system", false);
user_pref("purple.conversations.im.send_typing", false);
user_pref("messenger.startup.action", 0); // disable autostart
user_pref("messenger.status.reportIdle", false);
user_pref("messenger.status.awayWhenIdle", false);
user_pref("messenger.conversations.autoAcceptChatInvitations", false);
user_pref("messenger.options.filterMode", 0); // do not format incoming msgs

