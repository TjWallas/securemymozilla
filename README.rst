******************************
Secure Firefox and Thunderbird
******************************

Generate a user preferences file (|user.js|_) for Firefox 42+ or Thunderbird 38+
to improve **security** and **privacy**. Features include:

* Limit the persistence of history, cookies and other sensitive data.

* Enforce more secure TLS encryption.

* Disable features that may reduce privacy (eg, geolocation) or security (eg,
  WebGL).

* Take measures to protect against browser fingerprinting.

* Easily configure to your needs. See |defaults-firefox.conf|_ and
  |defaults-thunderbird.conf|_.

Many settings are taken from `Tor Browser Bundle`_ (TBB), which is unrivaled for
privacy and anonymity. No amount of fiddling with preferences will make your
Firefox as good as the TBB, but we can at least improve on Mozilla’s defaults.

.. |user.js| replace:: ``user.js``
.. _user.js: http://kb.mozillazine.org/User.js_file
.. _Tor Browser Bundle: https://www.torproject.org/projects/torbrowser.html.en

securemyfirefox
===============

``securemyfirefox`` generates user preferences to standard output. Find your
profile folder (eg, ``~/.mozilla/firefox/xxxxxxxx.default/``) and generate
``user.js``:

.. code-block:: shell

    $ ./securemyfirefox > ~/.mozilla/firefox/xxxxxxxx.default/user.js

Optionally, source a configuration file. See |defaults-firefox.conf|_ for the
defaults.

.. |defaults-firefox.conf| replace:: ``defaults-firefox.conf``
.. _defaults-firefox.conf: defaults-firefox.conf

.. code-block:: shell

    $ ./securemyfirefox /path/to/my/defaults-firefox.conf \
          > ~/.mozilla/firefox/xxxxxxxx.default/user.js

**Important notes:**

* Some Firefox features are disabled by default (eg, WebRTC, Firefox Hello,
  PDF.js, Pocket, Reader View etc.). You may want to `re-enable these features
  <defaults-firefox.conf#L42-L66>`_.

* Some websites heavy on JavaScript (eg, games) may become unusably slow. You
  may want to `re-enable asm.js and JIT compilation
  <defaults-firefox.conf#L30-L34>`_.

* If you set ``TBB_USERAGENT=1``, the user agent matches the Tor Browser Bundle
  to hopefully make you appear less unique (NB: websites will think you’re on
  Windows). This is `disabled by default <defaults-firefox.conf#L104-L106>`_.

securemythunderbird
===================

``securemythunderbird`` generates user preferences to standard output. Find your
profile folder (eg, ``~/.thunderbird/xxxxxxxx.default/``) and generate
``user.js``:

.. code-block:: shell

    $ ./securemythunderbird > ~/.thunderbird/xxxxxxxx.default/user.js

Optionally, source a configuration file. See |defaults-thunderbird.conf|_ for
the defaults.

.. |defaults-thunderbird.conf| replace:: ``defaults-thunderbird.conf``
.. _defaults-thunderbird.conf: defaults-thunderbird.conf

.. code-block:: shell

    $ ./securemythunderbird /path/to/my/defaults-thunderbird.conf \
          > ~/.thunderbird/xxxxxxxx.default/user.js

**Important notes:**

* By default, TLSv1.2 is mandatory. This may prevent you from connecting to your
  email provider. If so, set ``TLS_DISABLE_NONPFS_CIPHERS=0`` and
  ``TLS_VERSION_MIN=1`` in your `configuration file
  <defaults-thunderbird.conf#L56-L62>`_. Consider moving to a more responsible
  email provider.

