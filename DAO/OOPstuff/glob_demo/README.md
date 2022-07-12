





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-PkbtxdWDpLChpxtWQ0KbvJoef4XMYPq5pfd/ZmylYZTzXYpCfGwN9d+bsSKcmOJLwTkfjFkfj5wz3poDrhJoSQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-f6e6ce21346c0d2eb22def1e8534afcb.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-EuadCD9/LFVfed/klpP7kj+qTP0hWhyJ9KN6kLBEXRSLjXEKjm4Z4JORqgppbiE/toxjWa60Fjsh9BtIJdLq9g==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-6353b64247f8dd959d2b123ae98fba98.css" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>node-glob/README.md at master · isaacs/node-glob</title>
    <meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/9287?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="isaacs/node-glob" /><meta property="og:url" content="https://github.com/isaacs/node-glob" /><meta property="og:description" content="node-glob - glob functionality for node.js" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjE5MTIwMzIwOjAxZjI0MjY0OWJhZTQ2MDAyY2M3YjJmYWVmOTQzOGRiNDJlNjYyNzFjZmM1ZWNjOGM1MTlkNjQ0ZDI3N2RkMWU=--903ed1c0d85958c5eb2c60994d3117e41235ea04">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="1FB5:3AD3:3E8ECD:711F3B:5B20C468" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="1FB5:3AD3:3E8ECD:711F3B:5B20C468" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="20471167" /><meta name="octolytics-actor-login" content="EasonMar" /><meta name="octolytics-actor-hash" content="8d827798bbe8f1a311ccb30e3069857dbea28457029dd4af8914efb62c8b743a" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="EasonMar">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OThmMzM1NTI2OGQwZDQxOTQ1Yjg0MTE2YzRkNGEyMWJjZjU1YjM5NDNmZGIzNWQ5ODUxYzgyNGM0MDgzZTIxZHx7InJlbW90ZV9hZGRyZXNzIjoiMjEwLjIxLjEyNS4yMTIiLCJyZXF1ZXN0X2lkIjoiMUZCNTozQUQzOjNFOEVDRDo3MTFGM0I6NUIyMEM0NjgiLCJ0aW1lc3RhbXAiOjE1Mjg4NzQwODgsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="a603b11039a1e0135572b0acfa5770006c2b0872">

  <meta http-equiv="x-pjax-version" content="41bcf4d7dc97bf550bed6050a5e2bd5b">
  

      <link href="https://github.com/isaacs/node-glob/commits/master.atom" rel="alternate" title="Recent Commits to node-glob:master" type="application/atom+xml">

  <meta name="description" content="node-glob - glob functionality for node.js">
  <meta name="go-import" content="github.com/isaacs/node-glob git https://github.com/isaacs/node-glob.git">

  <meta name="octolytics-dimension-user_id" content="9287" /><meta name="octolytics-dimension-user_login" content="isaacs" /><meta name="octolytics-dimension-repository_id" content="357681" /><meta name="octolytics-dimension-repository_nwo" content="isaacs/node-glob" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="357681" /><meta name="octolytics-dimension-repository_network_root_nwo" content="isaacs/node-glob" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/isaacs/node-glob/blob/master/README.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex flex-justify-between px-3 container-lg">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search position-relative" role="search">
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="357681" data-scoped-search-url="/isaacs/node-glob/search" data-unscoped-search-url="/search" action="/isaacs/node-glob/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          aria-label="Search this repository"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=XF0sVGg7rlrJ6C/szh/Ravxx0iBP12OF9eRgprhcXEyWs091zXgKc/Qbr/4esqrlp/QvpckZ49Ac6WsQMreM+w=="
          spellcheck="false"
          autocomplete="off"
          autocapitalize="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item">
                  <a class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" aria-label="Jump to..." href="">
                    <div class="jump-to-octicon js-jump-to-octicon mr-2 text-center d-none"></div>
                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar" alt="" src="" width="28" height="28">
                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none">
                        All GitHub
                      </span>
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
                <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-repo-octicon-template" title="Repository" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-project-octicon-template" title="Project" viewBox="0 0 15 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-search-octicon-template" title="Search" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li> 
              </ul>

              <ul class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
                <li>
                  <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar, group:" data-selected-links=" /marketplace" href="/marketplace">
                    Marketplace
</a>                </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown">
    <span class="d-inline-block  px-2">
      

    </span>
  </li>

  <li class="dropdown">
    <details class="details-expanded details-reset js-dropdown-details d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="isaacs/node-glob">This repository</span>
  </div>
    <a class="dropdown-item" href="/isaacs/node-glob/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </details>
  </li>

  <li class="dropdown">

    <details class="details-expanded details-reset js-dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@EasonMar" class="avatar float-left mr-1" src="https://avatars1.githubusercontent.com/u/20471167?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">EasonMar</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/EasonMar" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/EasonMar?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="/fLangMo/ScW6aqVEi35YuLsfJlhZ+rMXdvDwHIUyYPHGIKy7bhwhEEOB4GWvsXpDmcURGUlSb8T9co5u1OPkQ==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="ICTyi2jif37xm1PiqMos9L9J5sMTWfek7jnohGKG+4oazqqnhnLy3aZ8/vYsWRB/U8KOHhcbVNegF+F9q8G9mA==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-autosubmit="true" data-remote="true" class="js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="CL+PPPhdBCYbFUVMjyQodH0gmXjuoUXy3xlJ0Ds9ylRfiCHEi8ijkMJjJjX/IlEtp/92YKSSjC1LxLXulQ0/LA==" />      <input type="hidden" name="repository_id" id="repository_id" value="357681" class="form-control" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/isaacs/node-glob/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/isaacs/node-glob/watchers"
            aria-label="102 users are watching this repository">
            102
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_included" value="included" checked="checked" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_subscribed" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_ignore" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/isaacs/node-glob/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="aNrqd1Qt+DzsP6nVKjgW1F2s4RndXFTo0pnG2yfUBNOdRCuvGHWu+QqFajWKw0o2OrUmDWx+LVjDSj29eHuCew==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar isaacs/node-glob"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/isaacs/node-glob/stargazers"
           aria-label="4688 users starred this repository">
          4,688
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/isaacs/node-glob/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="KNon1LNjFgOcg3rl6AAmZ4bs0hm7RxVMBirbhWagwPTPAcuBollDTgG80Uw6ukSEeY68ZdeEkDQzeXxog9EMQQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star isaacs/node-glob"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/isaacs/node-glob/stargazers"
           aria-label="4688 users starred this repository">
          4,688
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/isaacs/node-glob/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="iFC0q1Is6/fSZYtSxTHDIJY8agRimdqDecy+gis+daADrV3rQ8TWi1dQjpXXKHDXjQwUoHNXMvQ4chikhbefJw==" />
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of isaacs/node-glob to your account"
                aria-label="Fork your own copy of isaacs/node-glob to your account">
              <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/isaacs/node-glob/network" class="social-count"
       aria-label="326 users forked this repository">
      326
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/isaacs">isaacs</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/isaacs/node-glob">node-glob</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /isaacs/node-glob" href="/isaacs/node-glob">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /isaacs/node-glob/issues" href="/isaacs/node-glob/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">62</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /isaacs/node-glob/pulls" href="/isaacs/node-glob/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">25</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /isaacs/node-glob/projects" href="/isaacs/node-glob/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /isaacs/node-glob/wiki" href="/isaacs/node-glob/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /isaacs/node-glob/pulse" href="/isaacs/node-glob/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/isaacs/node-glob/blob/8fa8d561e08c9eed1d286c6a35be2cd8123b2fb7/README.md">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:4785cc8d64ed5780dff0ea81e76d36f6 -->

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/2.0.7-enginefix/README.md"
               data-name="2.0.7-enginefix"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                2.0.7-enginefix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/2.0.8-enginefix/README.md"
               data-name="2.0.8-enginefix"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                2.0.8-enginefix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/GH-135/README.md"
               data-name="GH-135"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                GH-135
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/a/README.md"
               data-name="a"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/bsd-glob/README.md"
               data-name="bsd-glob"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bsd-glob
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/debug/README.md"
               data-name="debug"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                debug
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/dot-ignore/README.md"
               data-name="dot-ignore"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dot-ignore
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/fix-245/README.md"
               data-name="fix-245"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-245
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/fix-ignore-branch/README.md"
               data-name="fix-ignore-branch"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-ignore-branch
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/globstar43-wip/README.md"
               data-name="globstar43-wip"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                globstar43-wip
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/globstar43/README.md"
               data-name="globstar43"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                globstar43
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/greenkeeper-tap-6.3.0/README.md"
               data-name="greenkeeper-tap-6.3.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                greenkeeper-tap-6.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/greenkeeper-tap-6.3.1/README.md"
               data-name="greenkeeper-tap-6.3.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                greenkeeper-tap-6.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/greenkeeper-tap-6.3.2/README.md"
               data-name="greenkeeper-tap-6.3.2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                greenkeeper-tap-6.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/greenkeeper-tap-7.0.1/README.md"
               data-name="greenkeeper-tap-7.0.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                greenkeeper-tap-7.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/greenkeeper-tap-7.1.0/README.md"
               data-name="greenkeeper-tap-7.1.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                greenkeeper-tap-7.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/greenkeeper-tap-7.1.1/README.md"
               data-name="greenkeeper-tap-7.1.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                greenkeeper-tap-7.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/greenkeeper-tap-7.1.2/README.md"
               data-name="greenkeeper-tap-7.1.2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                greenkeeper-tap-7.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/greenkeeper-update-all/README.md"
               data-name="greenkeeper-update-all"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                greenkeeper-update-all
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/issue-83/README.md"
               data-name="issue-83"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                issue-83
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/isaacs/node-glob/blob/master/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/nodir/README.md"
               data-name="nodir"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                nodir
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/npm-test/README.md"
               data-name="npm-test"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                npm-test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/pr-151/README.md"
               data-name="pr-151"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                pr-151
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/simplified/README.md"
               data-name="simplified"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                simplified
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/splitsync/README.md"
               data-name="splitsync"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                splitsync
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/v4.5/README.md"
               data-name="v4.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                v4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/isaacs/node-glob/blob/working/README.md"
               data-name="working"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                working
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.1.2/README.md"
              data-name="v7.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.1.2">
                v7.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.1.1/README.md"
              data-name="v7.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.1.1">
                v7.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.1.0/README.md"
              data-name="v7.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.1.0">
                v7.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.0.6/README.md"
              data-name="v7.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.0.6">
                v7.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.0.5/README.md"
              data-name="v7.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.0.5">
                v7.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.0.4/README.md"
              data-name="v7.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.0.4">
                v7.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.0.3/README.md"
              data-name="v7.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.0.3">
                v7.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.0.2/README.md"
              data-name="v7.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.0.2">
                v7.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.0.1/README.md"
              data-name="v7.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.0.1">
                v7.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v7.0.0/README.md"
              data-name="v7.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v7.0.0">
                v7.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v6.0.4/README.md"
              data-name="v6.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.4">
                v6.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v6.0.3/README.md"
              data-name="v6.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.3">
                v6.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v6.0.2/README.md"
              data-name="v6.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.2">
                v6.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v6.0.1/README.md"
              data-name="v6.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.1">
                v6.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v6.0.0/README.md"
              data-name="v6.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v6.0.0">
                v6.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.15/README.md"
              data-name="v5.0.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.15">
                v5.0.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.14/README.md"
              data-name="v5.0.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.14">
                v5.0.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.13/README.md"
              data-name="v5.0.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.13">
                v5.0.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.12/README.md"
              data-name="v5.0.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.12">
                v5.0.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.11/README.md"
              data-name="v5.0.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.11">
                v5.0.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.10/README.md"
              data-name="v5.0.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.10">
                v5.0.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.9/README.md"
              data-name="v5.0.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.9">
                v5.0.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.8/README.md"
              data-name="v5.0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.8">
                v5.0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.7/README.md"
              data-name="v5.0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.7">
                v5.0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.6/README.md"
              data-name="v5.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.6">
                v5.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.5/README.md"
              data-name="v5.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.5">
                v5.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.4/README.md"
              data-name="v5.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.4">
                v5.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.3/README.md"
              data-name="v5.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.3">
                v5.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.2/README.md"
              data-name="v5.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.2">
                v5.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.1/README.md"
              data-name="v5.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.1">
                v5.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v5.0.0/README.md"
              data-name="v5.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v5.0.0">
                v5.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.5.3/README.md"
              data-name="v4.5.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.5.3">
                v4.5.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.5.2/README.md"
              data-name="v4.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.5.2">
                v4.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.5.1/README.md"
              data-name="v4.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.5.1">
                v4.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.5.0/README.md"
              data-name="v4.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.5.0">
                v4.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.4.2/README.md"
              data-name="v4.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.4.2">
                v4.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.4.1/README.md"
              data-name="v4.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.4.1">
                v4.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.4.0/README.md"
              data-name="v4.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.4.0">
                v4.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.3.5/README.md"
              data-name="v4.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.5">
                v4.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.3.4/README.md"
              data-name="v4.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.4">
                v4.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.3.3/README.md"
              data-name="v4.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.3">
                v4.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.3.2/README.md"
              data-name="v4.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.2">
                v4.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.3.1/README.md"
              data-name="v4.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.1">
                v4.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.3.0/README.md"
              data-name="v4.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.3.0">
                v4.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.2.2/README.md"
              data-name="v4.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.2">
                v4.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.2.1/README.md"
              data-name="v4.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.1">
                v4.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.2.0/README.md"
              data-name="v4.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.2.0">
                v4.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.1.6/README.md"
              data-name="v4.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.6">
                v4.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.1.5/README.md"
              data-name="v4.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.5">
                v4.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.1.4/README.md"
              data-name="v4.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.4">
                v4.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.1.3/README.md"
              data-name="v4.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.3">
                v4.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.1.2/README.md"
              data-name="v4.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.2">
                v4.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.1.1/README.md"
              data-name="v4.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.1">
                v4.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.1.0/README.md"
              data-name="v4.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.1.0">
                v4.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.0.6/README.md"
              data-name="v4.0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.6">
                v4.0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.0.5/README.md"
              data-name="v4.0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.5">
                v4.0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.0.4/README.md"
              data-name="v4.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.4">
                v4.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.0.3/README.md"
              data-name="v4.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.3">
                v4.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.0.2/README.md"
              data-name="v4.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.2">
                v4.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.0.1/README.md"
              data-name="v4.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.1">
                v4.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v4.0.0/README.md"
              data-name="v4.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v4.0.0">
                v4.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.11/README.md"
              data-name="v3.2.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.11">
                v3.2.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.10/README.md"
              data-name="v3.2.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.10">
                v3.2.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.9/README.md"
              data-name="v3.2.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.9">
                v3.2.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.8/README.md"
              data-name="v3.2.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.8">
                v3.2.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.7/README.md"
              data-name="v3.2.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.7">
                v3.2.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.6/README.md"
              data-name="v3.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.6">
                v3.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.5/README.md"
              data-name="v3.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.5">
                v3.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.4/README.md"
              data-name="v3.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.4">
                v3.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.3/README.md"
              data-name="v3.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.3">
                v3.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.2/README.md"
              data-name="v3.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.2">
                v3.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.1/README.md"
              data-name="v3.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.1">
                v3.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.2.0/README.md"
              data-name="v3.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.2.0">
                v3.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.21/README.md"
              data-name="v3.1.21"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.21">
                v3.1.21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.20/README.md"
              data-name="v3.1.20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.20">
                v3.1.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.19/README.md"
              data-name="v3.1.19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.19">
                v3.1.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.18/README.md"
              data-name="v3.1.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.18">
                v3.1.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.17/README.md"
              data-name="v3.1.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.17">
                v3.1.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.16/README.md"
              data-name="v3.1.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.16">
                v3.1.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.15/README.md"
              data-name="v3.1.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.15">
                v3.1.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.14/README.md"
              data-name="v3.1.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.14">
                v3.1.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.13/README.md"
              data-name="v3.1.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.13">
                v3.1.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.12/README.md"
              data-name="v3.1.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.12">
                v3.1.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v3.1.11/README.md"
              data-name="v3.1.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v3.1.11">
                v3.1.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v2.0.4/README.md"
              data-name="v2.0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.4">
                v2.0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v2.0.3/README.md"
              data-name="v2.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.3">
                v2.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v2.0.2/README.md"
              data-name="v2.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.2">
                v2.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v2.0.1/README.md"
              data-name="v2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.1">
                v2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v1.1.0/README.md"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v1.0.2/README.md"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/v1.0.0/README.md"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/less-leaky/README.md"
              data-name="less-leaky"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="less-leaky">
                less-leaky
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/3.1.10/README.md"
              data-name="3.1.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.1.10">
                3.1.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/3.1.9/README.md"
              data-name="3.1.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.1.9">
                3.1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/3.1.7/README.md"
              data-name="3.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.1.7">
                3.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/3.1.6/README.md"
              data-name="3.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.1.6">
                3.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/3.1.5/README.md"
              data-name="3.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.1.5">
                3.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/3.1.4/README.md"
              data-name="3.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.1.4">
                3.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/3.1.3/README.md"
              data-name="3.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.1.3">
                3.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/isaacs/node-glob/tree/3.1.2/README.md"
              data-name="3.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.1.2">
                3.1.2
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/isaacs/node-glob/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/isaacs/node-glob"><span>node-glob</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/isaacs/node-glob/commit/efdfead73ab1c62435ce2c6bea357b3c2ac8cf41" data-pjax>
          efdfead
        </a>
        <relative-time datetime="2016-09-20T18:28:04Z">Sep 20, 2016</relative-time>
      </span>
      <div>
        <a rel="author" data-skip-pjax="true" data-hovercard-user-id="9287" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs"><img class="avatar" src="https://avatars3.githubusercontent.com/u/9287?s=40&amp;v=4" width="20" height="20" alt="@isaacs" /></a>
        <a class="user-mention" rel="author" data-hovercard-user-id="9287" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs">isaacs</a>
          <a data-pjax="true" title="Make absolute work with sync, results, mark:true

This involes a refactor of the GlobSync._emitMatch method, which it turns
out, was not being used at all.

Close #293" class="message" href="/isaacs/node-glob/commit/efdfead73ab1c62435ce2c6bea357b3c2ac8cf41">Make absolute work with sync, results, mark:true</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>11</strong>
         contributors
      </button>
          <a class="avatar-link" data-hovercard-user-id="9287" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=isaacs">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/9287?s=40&amp;v=4" width="20" height="20" alt="@isaacs" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="4530830" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=vkichline">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/4530830?s=40&amp;v=4" width="20" height="20" alt="@vkichline" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="1330851" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=vegetableman">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/1330851?s=40&amp;v=4" width="20" height="20" alt="@vegetableman" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="138627" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=oncletom">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/138627?s=40&amp;v=4" width="20" height="20" alt="@oncletom" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="112484" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=marclipovsky">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/112484?s=40&amp;v=4" width="20" height="20" alt="@marclipovsky" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="5259" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=kimjoar">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/5259?s=40&amp;v=4" width="20" height="20" alt="@kimjoar" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="849592" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=jldec">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/849592?s=40&amp;v=4" width="20" height="20" alt="@jldec" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="3691490" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=PeterDaveHello">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/3691490?s=40&amp;v=4" width="20" height="20" alt="@PeterDaveHello" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="992373" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=phated">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/992373?s=40&amp;v=4" width="20" height="20" alt="@phated" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="205815" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=benhutchins">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/205815?s=40&amp;v=4" width="20" height="20" alt="@benhutchins" /> 
</a>    <a class="avatar-link" data-hovercard-user-id="874898" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs/node-glob/commits/master/README.md?author=basarat">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/874898?s=40&amp;v=4" width="20" height="20" alt="@basarat" /> 
</a>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="9287" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs"><img src="https://avatars2.githubusercontent.com/u/9287?s=48&amp;v=4" width="24" height="24" alt="@isaacs" /></a>
            <a data-hovercard-user-id="9287" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/isaacs">isaacs</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="4530830" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/vkichline"><img src="https://avatars1.githubusercontent.com/u/4530830?s=48&amp;v=4" width="24" height="24" alt="@vkichline" /></a>
            <a data-hovercard-user-id="4530830" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/vkichline">vkichline</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="1330851" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/vegetableman"><img src="https://avatars0.githubusercontent.com/u/1330851?s=48&amp;v=4" width="24" height="24" alt="@vegetableman" /></a>
            <a data-hovercard-user-id="1330851" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/vegetableman">vegetableman</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="138627" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/oncletom"><img src="https://avatars0.githubusercontent.com/u/138627?s=48&amp;v=4" width="24" height="24" alt="@oncletom" /></a>
            <a data-hovercard-user-id="138627" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/oncletom">oncletom</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="112484" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/marclipovsky"><img src="https://avatars3.githubusercontent.com/u/112484?s=48&amp;v=4" width="24" height="24" alt="@marclipovsky" /></a>
            <a data-hovercard-user-id="112484" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/marclipovsky">marclipovsky</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="5259" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kimjoar"><img src="https://avatars1.githubusercontent.com/u/5259?s=48&amp;v=4" width="24" height="24" alt="@kimjoar" /></a>
            <a data-hovercard-user-id="5259" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/kimjoar">kimjoar</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="849592" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jldec"><img src="https://avatars2.githubusercontent.com/u/849592?s=48&amp;v=4" width="24" height="24" alt="@jldec" /></a>
            <a data-hovercard-user-id="849592" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jldec">jldec</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="3691490" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/PeterDaveHello"><img src="https://avatars2.githubusercontent.com/u/3691490?s=48&amp;v=4" width="24" height="24" alt="@PeterDaveHello" /></a>
            <a data-hovercard-user-id="3691490" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/PeterDaveHello">PeterDaveHello</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="992373" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/phated"><img src="https://avatars2.githubusercontent.com/u/992373?s=48&amp;v=4" width="24" height="24" alt="@phated" /></a>
            <a data-hovercard-user-id="992373" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/phated">phated</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="205815" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/benhutchins"><img src="https://avatars2.githubusercontent.com/u/205815?s=48&amp;v=4" width="24" height="24" alt="@benhutchins" /></a>
            <a data-hovercard-user-id="205815" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/benhutchins">benhutchins</a>
          </li>
          <li class="facebox-user-list-item">
            <a class="d-inline-block" data-hovercard-user-id="874898" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/basarat"><img src="https://avatars0.githubusercontent.com/u/874898?s=48&amp;v=4" width="24" height="24" alt="@basarat" /></a>
            <a data-hovercard-user-id="874898" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/basarat">basarat</a>
          </li>
      </ul>
    </div>
  </div>



  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/isaacs/node-glob/raw/master/README.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/isaacs/node-glob/blame/master/README.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/isaacs/node-glob/commits/master/README.md">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/isaacs/node-glob?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/isaacs/node-glob/edit/master/README.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="aU8XrBZ54w5inA009DMB2BURLQ8dtbaAFUw4R3QrTfcPH8iznigVGWzTmaNPpM9S/nEzKcmhgcJ77PCUDVlPjw==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/isaacs/node-glob/delete/master/README.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="V4zcTvSrCIBq5lb1rIE/1rwzZQBTxGVWcKqDgQ4xoccsGJ5lxCpAC0hi+ynFY9B6CYfqGr4buXQjygPxFYm4hA==" />
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      369 lines (288 sloc)
      <span class="file-info-divider"></span>
    14.3 KB
  </div>
</div>

    
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-glob" class="anchor" aria-hidden="true" href="#glob"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Glob</h1>
<p>Match files using the patterns the shell uses, like stars and stuff.</p>
<p><a href="https://travis-ci.org/isaacs/node-glob/" rel="nofollow"><img src="https://camo.githubusercontent.com/0d2703663f4aadacec8616a56ca5ea0b1db15739/68747470733a2f2f7472617669732d63692e6f72672f6973616163732f6e6f64652d676c6f622e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/isaacs/node-glob.svg?branch=master" style="max-width:100%;"></a> <a href="https://ci.appveyor.com/project/isaacs/node-glob" rel="nofollow"><img src="https://camo.githubusercontent.com/e99ea4f93e558483e2b0ad4c08c59508224f2033/68747470733a2f2f63692e6170707665796f722e636f6d2f6170692f70726f6a656374732f7374617475732f6b643766337966746637756e786c73783f7376673d74727565" alt="Build Status" data-canonical-src="https://ci.appveyor.com/api/projects/status/kd7f3yftf7unxlsx?svg=true" style="max-width:100%;"></a> <a href="https://coveralls.io/github/isaacs/node-glob?branch=master" rel="nofollow"><img src="https://camo.githubusercontent.com/95893acbe8ccbcbd4bb0f04cb11a567dce7fe33f/68747470733a2f2f636f766572616c6c732e696f2f7265706f732f6973616163732f6e6f64652d676c6f622f62616467652e7376673f6272616e63683d6d617374657226736572766963653d676974687562" alt="Coverage Status" data-canonical-src="https://coveralls.io/repos/isaacs/node-glob/badge.svg?branch=master&amp;service=github" style="max-width:100%;"></a></p>
<p>This is a glob implementation in JavaScript.  It uses the <code>minimatch</code>
library to do its matching.</p>
<p><a target="_blank" href="/isaacs/node-glob/blob/master/oh-my-glob.gif"><img src="/isaacs/node-glob/raw/master/oh-my-glob.gif" alt="" style="max-width:100%;"></a></p>
<h2><a id="user-content-usage" class="anchor" aria-hidden="true" href="#usage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>
<p>Install with npm</p>
<pre><code>npm i glob
</code></pre>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> glob <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>glob<span class="pl-pds">"</span></span>)

<span class="pl-c"><span class="pl-c">//</span> options is optional</span>
<span class="pl-en">glob</span>(<span class="pl-s"><span class="pl-pds">"</span>**/*.js<span class="pl-pds">"</span></span>, options, <span class="pl-k">function</span> (<span class="pl-smi">er</span>, <span class="pl-smi">files</span>) {
  <span class="pl-c"><span class="pl-c">//</span> files is an array of filenames.</span>
  <span class="pl-c"><span class="pl-c">//</span> If the `nonull` option is set, and nothing</span>
  <span class="pl-c"><span class="pl-c">//</span> was found, then files is ["**/*.js"]</span>
  <span class="pl-c"><span class="pl-c">//</span> er is an error object or null.</span>
})</pre></div>
<h2><a id="user-content-glob-primer" class="anchor" aria-hidden="true" href="#glob-primer"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Glob Primer</h2>
<p>"Globs" are the patterns you type when you do stuff like <code>ls *.js</code> on
the command line, or put <code>build/*</code> in a <code>.gitignore</code> file.</p>
<p>Before parsing the path part patterns, braced sections are expanded
into a set.  Braced sections start with <code>{</code> and end with <code>}</code>, with any
number of comma-delimited sections within.  Braced sections may contain
slash characters, so <code>a{/b/c,bcd}</code> would expand into <code>a/b/c</code> and <code>abcd</code>.</p>
<p>The following characters have special magic meaning when used in a
path portion:</p>
<ul>
<li><code>*</code> Matches 0 or more characters in a single path portion</li>
<li><code>?</code> Matches 1 character</li>
<li><code>[...]</code> Matches a range of characters, similar to a RegExp range.
If the first character of the range is <code>!</code> or <code>^</code> then it matches
any character not in the range.</li>
<li><code>!(pattern|pattern|pattern)</code> Matches anything that does not match
any of the patterns provided.</li>
<li><code>?(pattern|pattern|pattern)</code> Matches zero or one occurrence of the
patterns provided.</li>
<li><code>+(pattern|pattern|pattern)</code> Matches one or more occurrences of the
patterns provided.</li>
<li><code>*(a|b|c)</code> Matches zero or more occurrences of the patterns provided</li>
<li><code>@(pattern|pat*|pat?erN)</code> Matches exactly one of the patterns
provided</li>
<li><code>**</code> If a "globstar" is alone in a path portion, then it matches
zero or more directories and subdirectories searching for matches.
It does not crawl symlinked directories.</li>
</ul>
<h3><a id="user-content-dots" class="anchor" aria-hidden="true" href="#dots"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dots</h3>
<p>If a file or directory path portion has a <code>.</code> as the first character,
then it will not match any glob pattern unless that pattern's
corresponding path part also has a <code>.</code> as its first character.</p>
<p>For example, the pattern <code>a/.*/c</code> would match the file at <code>a/.b/c</code>.
However the pattern <code>a/*/c</code> would not, because <code>*</code> does not start with
a dot character.</p>
<p>You can make glob treat dots as normal characters by setting
<code>dot:true</code> in the options.</p>
<h3><a id="user-content-basename-matching" class="anchor" aria-hidden="true" href="#basename-matching"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basename Matching</h3>
<p>If you set <code>matchBase:true</code> in the options, and the pattern has no
slashes in it, then it will seek for any file anywhere in the tree
with a matching basename.  For example, <code>*.js</code> would match
<code>test/simple/basic.js</code>.</p>
<h3><a id="user-content-empty-sets" class="anchor" aria-hidden="true" href="#empty-sets"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Empty Sets</h3>
<p>If no matching files are found, then an empty array is returned.  This
differs from the shell, where the pattern itself is returned.  For
example:</p>
<pre><code>$ echo a*s*d*f
a*s*d*f
</code></pre>
<p>To get the bash-style behavior, set the <code>nonull:true</code> in the options.</p>
<h3><a id="user-content-see-also" class="anchor" aria-hidden="true" href="#see-also"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>See Also:</h3>
<ul>
<li><code>man sh</code></li>
<li><code>man bash</code> (Search for "Pattern Matching")</li>
<li><code>man 3 fnmatch</code></li>
<li><code>man 5 gitignore</code></li>
<li><a href="https://github.com/isaacs/minimatch">minimatch documentation</a></li>
</ul>
<h2><a id="user-content-globhasmagicpattern-options" class="anchor" aria-hidden="true" href="#globhasmagicpattern-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>glob.hasMagic(pattern, [options])</h2>
<p>Returns <code>true</code> if there are any special characters in the pattern, and
<code>false</code> otherwise.</p>
<p>Note that the options affect the results.  If <code>noext:true</code> is set in
the options object, then <code>+(a|b)</code> will not be considered a magic
pattern.  If the pattern has a brace expansion, like <code>a/{b/c,x/y}</code>
then that is considered magical, unless <code>nobrace:true</code> is set in the
options.</p>
<h2><a id="user-content-globpattern-options-cb" class="anchor" aria-hidden="true" href="#globpattern-options-cb"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>glob(pattern, [options], cb)</h2>
<ul>
<li><code>pattern</code> <code>{String}</code> Pattern to be matched</li>
<li><code>options</code> <code>{Object}</code></li>
<li><code>cb</code> <code>{Function}</code>
<ul>
<li><code>err</code> <code>{Error | null}</code></li>
<li><code>matches</code> <code>{Array&lt;String&gt;}</code> filenames found matching the pattern</li>
</ul>
</li>
</ul>
<p>Perform an asynchronous glob search.</p>
<h2><a id="user-content-globsyncpattern-options" class="anchor" aria-hidden="true" href="#globsyncpattern-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>glob.sync(pattern, [options])</h2>
<ul>
<li><code>pattern</code> <code>{String}</code> Pattern to be matched</li>
<li><code>options</code> <code>{Object}</code></li>
<li>return: <code>{Array&lt;String&gt;}</code> filenames found matching the pattern</li>
</ul>
<p>Perform a synchronous glob search.</p>
<h2><a id="user-content-class-globglob" class="anchor" aria-hidden="true" href="#class-globglob"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Class: glob.Glob</h2>
<p>Create a Glob object by instantiating the <code>glob.Glob</code> class.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> Glob <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">"</span>glob<span class="pl-pds">"</span></span>).<span class="pl-smi">Glob</span>
<span class="pl-k">var</span> mg <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Glob</span>(pattern, options, cb)</pre></div>
<p>It's an EventEmitter, and starts walking the filesystem to find matches
immediately.</p>
<h3><a id="user-content-new-globglobpattern-options-cb" class="anchor" aria-hidden="true" href="#new-globglobpattern-options-cb"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>new glob.Glob(pattern, [options], [cb])</h3>
<ul>
<li><code>pattern</code> <code>{String}</code> pattern to search for</li>
<li><code>options</code> <code>{Object}</code></li>
<li><code>cb</code> <code>{Function}</code> Called when an error occurs, or matches are found
<ul>
<li><code>err</code> <code>{Error | null}</code></li>
<li><code>matches</code> <code>{Array&lt;String&gt;}</code> filenames found matching the pattern</li>
</ul>
</li>
</ul>
<p>Note that if the <code>sync</code> flag is set in the options, then matches will
be immediately available on the <code>g.found</code> member.</p>
<h3><a id="user-content-properties" class="anchor" aria-hidden="true" href="#properties"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Properties</h3>
<ul>
<li><code>minimatch</code> The minimatch object that the glob uses.</li>
<li><code>options</code> The options object passed in.</li>
<li><code>aborted</code> Boolean which is set to true when calling <code>abort()</code>.  There
is no way at this time to continue a glob search after aborting, but
you can re-use the statCache to avoid having to duplicate syscalls.</li>
<li><code>cache</code> Convenience object.  Each field has the following possible
values:
<ul>
<li><code>false</code> - Path does not exist</li>
<li><code>true</code> - Path exists</li>
<li><code>'FILE'</code> - Path exists, and is not a directory</li>
<li><code>'DIR'</code> - Path exists, and is a directory</li>
<li><code>[file, entries, ...]</code> - Path exists, is a directory, and the
array value is the results of <code>fs.readdir</code></li>
</ul>
</li>
<li><code>statCache</code> Cache of <code>fs.stat</code> results, to prevent statting the same
path multiple times.</li>
<li><code>symlinks</code> A record of which paths are symbolic links, which is
relevant in resolving <code>**</code> patterns.</li>
<li><code>realpathCache</code> An optional object which is passed to <code>fs.realpath</code>
to minimize unnecessary syscalls.  It is stored on the instantiated
Glob object, and may be re-used.</li>
</ul>
<h3><a id="user-content-events" class="anchor" aria-hidden="true" href="#events"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h3>
<ul>
<li><code>end</code> When the matching is finished, this is emitted with all the
matches found.  If the <code>nonull</code> option is set, and no match was found,
then the <code>matches</code> list contains the original pattern.  The matches
are sorted, unless the <code>nosort</code> flag is set.</li>
<li><code>match</code> Every time a match is found, this is emitted with the specific
thing that matched. It is not deduplicated or resolved to a realpath.</li>
<li><code>error</code> Emitted when an unexpected error is encountered, or whenever
any fs error occurs if <code>options.strict</code> is set.</li>
<li><code>abort</code> When <code>abort()</code> is called, this event is raised.</li>
</ul>
<h3><a id="user-content-methods" class="anchor" aria-hidden="true" href="#methods"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Methods</h3>
<ul>
<li><code>pause</code> Temporarily stop the search</li>
<li><code>resume</code> Resume the search</li>
<li><code>abort</code> Stop the search forever</li>
</ul>
<h3><a id="user-content-options" class="anchor" aria-hidden="true" href="#options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Options</h3>
<p>All the options that can be passed to Minimatch can also be passed to
Glob to change pattern matching behavior.  Also, some have been added,
or have glob-specific ramifications.</p>
<p>All options are false by default, unless otherwise noted.</p>
<p>All options are added to the Glob object, as well.</p>
<p>If you are running many <code>glob</code> operations, you can pass a Glob object
as the <code>options</code> argument to a subsequent operation to shortcut some
<code>stat</code> and <code>readdir</code> calls.  At the very least, you may pass in shared
<code>symlinks</code>, <code>statCache</code>, <code>realpathCache</code>, and <code>cache</code> options, so that
parallel glob operations will be sped up by sharing information about
the filesystem.</p>
<ul>
<li><code>cwd</code> The current working directory in which to search.  Defaults
to <code>process.cwd()</code>.</li>
<li><code>root</code> The place where patterns starting with <code>/</code> will be mounted
onto.  Defaults to <code>path.resolve(options.cwd, "/")</code> (<code>/</code> on Unix
systems, and <code>C:\</code> or some such on Windows.)</li>
<li><code>dot</code> Include <code>.dot</code> files in normal matches and <code>globstar</code> matches.
Note that an explicit dot in a portion of the pattern will always
match dot files.</li>
<li><code>nomount</code> By default, a pattern starting with a forward-slash will be
"mounted" onto the root setting, so that a valid filesystem path is
returned.  Set this flag to disable that behavior.</li>
<li><code>mark</code> Add a <code>/</code> character to directory matches.  Note that this
requires additional stat calls.</li>
<li><code>nosort</code> Don't sort the results.</li>
<li><code>stat</code> Set to true to stat <em>all</em> results.  This reduces performance
somewhat, and is completely unnecessary, unless <code>readdir</code> is presumed
to be an untrustworthy indicator of file existence.</li>
<li><code>silent</code> When an unusual error is encountered when attempting to
read a directory, a warning will be printed to stderr.  Set the
<code>silent</code> option to true to suppress these warnings.</li>
<li><code>strict</code> When an unusual error is encountered when attempting to
read a directory, the process will just continue on in search of
other matches.  Set the <code>strict</code> option to raise an error in these
cases.</li>
<li><code>cache</code> See <code>cache</code> property above.  Pass in a previously generated
cache object to save some fs calls.</li>
<li><code>statCache</code> A cache of results of filesystem information, to prevent
unnecessary stat calls.  While it should not normally be necessary
to set this, you may pass the statCache from one glob() call to the
options object of another, if you know that the filesystem will not
change between calls.  (See "Race Conditions" below.)</li>
<li><code>symlinks</code> A cache of known symbolic links.  You may pass in a
previously generated <code>symlinks</code> object to save <code>lstat</code> calls when
resolving <code>**</code> matches.</li>
<li><code>sync</code> DEPRECATED: use <code>glob.sync(pattern, opts)</code> instead.</li>
<li><code>nounique</code> In some cases, brace-expanded patterns can result in the
same file showing up multiple times in the result set.  By default,
this implementation prevents duplicates in the result set.  Set this
flag to disable that behavior.</li>
<li><code>nonull</code> Set to never return an empty set, instead returning a set
containing the pattern itself.  This is the default in glob(3).</li>
<li><code>debug</code> Set to enable debug logging in minimatch and glob.</li>
<li><code>nobrace</code> Do not expand <code>{a,b}</code> and <code>{1..3}</code> brace sets.</li>
<li><code>noglobstar</code> Do not match <code>**</code> against multiple filenames.  (Ie,
treat it as a normal <code>*</code> instead.)</li>
<li><code>noext</code> Do not match <code>+(a|b)</code> "extglob" patterns.</li>
<li><code>nocase</code> Perform a case-insensitive match.  Note: on
case-insensitive filesystems, non-magic patterns will match by
default, since <code>stat</code> and <code>readdir</code> will not raise errors.</li>
<li><code>matchBase</code> Perform a basename-only match if the pattern does not
contain any slash characters.  That is, <code>*.js</code> would be treated as
equivalent to <code>**/*.js</code>, matching all js files in all directories.</li>
<li><code>nodir</code> Do not match directories, only files.  (Note: to match
<em>only</em> directories, simply put a <code>/</code> at the end of the pattern.)</li>
<li><code>ignore</code> Add a pattern or an array of glob patterns to exclude matches.
Note: <code>ignore</code> patterns are <em>always</em> in <code>dot:true</code> mode, regardless
of any other settings.</li>
<li><code>follow</code> Follow symlinked directories when expanding <code>**</code> patterns.
Note that this can result in a lot of duplicate references in the
presence of cyclic links.</li>
<li><code>realpath</code> Set to true to call <code>fs.realpath</code> on all of the results.
In the case of a symlink that cannot be resolved, the full absolute
path to the matched entry is returned (though it will usually be a
broken symlink)</li>
<li><code>absolute</code> Set to true to always receive absolute paths for matched
files.  Unlike <code>realpath</code>, this also affects the values returned in
the <code>match</code> event.</li>
</ul>
<h2><a id="user-content-comparisons-to-other-fnmatchglob-implementations" class="anchor" aria-hidden="true" href="#comparisons-to-other-fnmatchglob-implementations"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comparisons to other fnmatch/glob implementations</h2>
<p>While strict compliance with the existing standards is a worthwhile
goal, some discrepancies exist between node-glob and other
implementations, and are intentional.</p>
<p>The double-star character <code>**</code> is supported by default, unless the
<code>noglobstar</code> flag is set.  This is supported in the manner of bsdglob
and bash 4.3, where <code>**</code> only has special significance if it is the only
thing in a path part.  That is, <code>a/**/b</code> will match <code>a/x/y/b</code>, but
<code>a/**b</code> will not.</p>
<p>Note that symlinked directories are not crawled as part of a <code>**</code>,
though their contents may match against subsequent portions of the
pattern.  This prevents infinite loops and duplicates and the like.</p>
<p>If an escaped pattern has no matches, and the <code>nonull</code> flag is set,
then glob returns the pattern as-provided, rather than
interpreting the character escapes.  For example,
<code>glob.match([], "\\*a\\?")</code> will return <code>"\\*a\\?"</code> rather than
<code>"*a?"</code>.  This is akin to setting the <code>nullglob</code> option in bash, except
that it does not resolve escaped pattern characters.</p>
<p>If brace expansion is not disabled, then it is performed before any
other interpretation of the glob pattern.  Thus, a pattern like
<code>+(a|{b),c)}</code>, which would not be valid in bash or zsh, is expanded
<strong>first</strong> into the set of <code>+(a|b)</code> and <code>+(a|c)</code>, and those patterns are
checked for validity.  Since those two are valid, matching proceeds.</p>
<h3><a id="user-content-comments-and-negation" class="anchor" aria-hidden="true" href="#comments-and-negation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comments and Negation</h3>
<p>Previously, this module let you mark a pattern as a "comment" if it
started with a <code>#</code> character, or a "negated" pattern if it started
with a <code>!</code> character.</p>
<p>These options were deprecated in version 5, and removed in version 6.</p>
<p>To specify things that should not match, use the <code>ignore</code> option.</p>
<h2><a id="user-content-windows" class="anchor" aria-hidden="true" href="#windows"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Windows</h2>
<p><strong>Please only use forward-slashes in glob expressions.</strong></p>
<p>Though windows uses either <code>/</code> or <code>\</code> as its path separator, only <code>/</code>
characters are used by this glob implementation.  You must use
forward-slashes <strong>only</strong> in glob expressions.  Back-slashes will always
be interpreted as escape characters, not path separators.</p>
<p>Results from absolute patterns such as <code>/foo/*</code> are mounted onto the
root setting using <code>path.join</code>.  On windows, this will by default result
in <code>/foo/*</code> matching <code>C:\foo\bar.txt</code>.</p>
<h2><a id="user-content-race-conditions" class="anchor" aria-hidden="true" href="#race-conditions"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Race Conditions</h2>
<p>Glob searching, by its very nature, is susceptible to race conditions,
since it relies on directory walking and such.</p>
<p>As a result, it is possible that a file that exists when glob looks for
it may have been deleted or modified by the time it returns the result.</p>
<p>As part of its internal implementation, this program caches all stat
and readdir calls that it makes, in order to cut down on system
overhead.  However, this also makes it even more susceptible to races,
especially if the cache or statCache objects are reused between glob
calls.</p>
<p>Users are thus advised not to use a glob result as a guarantee of
filesystem state in the face of rapid changes.  For the vast majority
of operations, this is never a problem.</p>
<h2><a id="user-content-contributing" class="anchor" aria-hidden="true" href="#contributing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>
<p>Any change to behavior (including bugfixes) must come with a test.</p>
<p>Patches that fail tests or reduce performance will be rejected.</p>
<pre><code># to run tests
npm test

# to re-generate test fixtures
npm run test-regen

# to benchmark against bash/zsh
npm run bench

# to profile javascript
npm run prof
</code></pre>
</article>
  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.34297s from unicorn-7ffb8757fb-49k8z">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-REnv/1fvcM8kLoF0Q6pSR8eEDJgXBPo98lvK1sHUNXbBZURWGJoltSW1aZJ1sM+J++nppXioahrZr6ve9JjcFw==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-73770455a755e3bbebd0ce44e5036526.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-qwRH+JBqdHjUkqV9ylNluZ+HlVL4wH63l4CnqLTeO801hGVmshEkxEeDXQdcV0YJhwm+7JBojhuira7e2kBUIg==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-0473cf155c63a890669308cea5816d90.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

