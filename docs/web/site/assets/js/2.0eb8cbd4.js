(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,t,s){e.exports=s.p+"assets/img/karma_browser.0f92852a.png"},146:function(e,t,s){e.exports=s.p+"assets/img/karma_debug.14c3998f.png"},152:function(e,t,s){"use strict";s.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"testing-for-sap-web-ide-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing-for-sap-web-ide-features","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing for SAP Web IDE Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Terms and Definitions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v("Service test")]),this._v(" - A test that manipulates SAP Web IDE services in a running SAP Web IDE instance.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v("Unit test")]),this._v(" - A test that manipulates JavaScript modules directly ("),t("strong",[this._v("No")]),this._v(" SAP Web IDE instance involved).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"running-tests-for-the-provided-example-feature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-tests-for-the-provided-example-feature","aria-hidden":"true"}},[this._v("#")]),this._v(" Running Tests for the Provided Example Feature")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Prerequisites")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Node.js 6 or later")]),this._v(" "),t("li",[this._v("Google Chrome browser")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Procedure")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("Clone the repository.")]),e._v(" "),s("li",[e._v("Open the "),s("a",{attrs:{href:"../example"}},[e._v("example")]),e._v(" directory.")]),e._v(" "),s("li",[e._v("Run the following:\n"),s("code",[e._v("npm install")]),e._v(" "),s("code",[e._v("npm test")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"debugging-the-provided-example-feature-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debugging-the-provided-example-feature-tests","aria-hidden":"true"}},[this._v("#")]),this._v(" Debugging the Provided Example Feature Tests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Additional Prerequisite")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("em",[this._v("karma-cli")]),this._v(" package installed "),t("strong",[this._v("globally")]),this._v("\nnpm install -g karma-cli")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Procedure")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("karma start")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("img",{attrs:{src:s(145),alt:"Karma Chrome Window"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Press the "),t("strong",[this._v("DEBUG")]),this._v(" button at the top right corner of the screen.\nIt now opens the URL: http://localhost:9877/debug.html\n"),t("img",{attrs:{src:s(146),alt:"Karma Debug Window"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Open Chrome Developer Tools and search for one of the test files, for example: "),t("em",[this._v("utilsUnitTestSpec.js")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Set a breakpoint in that file.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Refresh the page.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note")]),this._v(": The UI/UX in the "),t("em",[this._v("debug.html")]),this._v(" file is quite useful.\nClick on a test name to "),t("strong",[this._v("only")]),this._v(" run that test. Test failures are shown with detailed error messages in the UI.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"integrating-the-testing-infrastructure-into-another-feature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#integrating-the-testing-infrastructure-into-another-feature","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrating the Testing Infrastructure into Another Feature")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Instead of creating a very large step-by-step guide which quickly becomes obsolete and incorrect,\nthe components of the example are listed with their purpose and are used as "),t("strong",[this._v("live docs")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-components","aria-hidden":"true"}},[this._v("#")]),this._v(" The Components:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"devdependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devdependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" DevDependencies:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("The "),t("em",[this._v("webide-client-tools")]),this._v(" package dependency is the "),t("strong",[this._v("same")]),this._v(' library developed in this repository.\nIt is highly recommended for a more specific version range constraint; the usage of "*" (latest) here is only for internal testing purposes.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("The "),t("em",[this._v("webide")]),this._v(" package dependency provides the static resources needed to run SAP Web IDE locally.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"karma-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#karma-configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("em",[this._v("karma")]),this._v(" configurations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Defines the options for Karma to use.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[e._v("const")]),e._v(" karmaTools "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{attrs:{class:"token function"}},[e._v("require")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{attrs:{class:"token string"}},[e._v('"@sap-webide/webide-client-tools"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("karma\n"),s("span",{attrs:{class:"token keyword"}},[e._v("const")]),e._v(" webideConfig "),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" karmaTools"),s("span",{attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{attrs:{class:"token function"}},[e._v("defaultProps")]),s("span",{attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("is used to obtain the default settings for the SAP Web IDE testing scenario.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("It is possible to add or overwrite configurations to support custom scenarios.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("p",[e._v('By default, end users must "include" a reference to their '),s("em",[e._v("testSetup.js")]),e._v(' file and "serve" their test and production resources.\n'),s("strong",[e._v("Note")]),e._v(": The "),s("em",[e._v("node_modules/chai/chai.js")]),e._v(" open source assertion library is used in the example tests.\nHowever, it is "),s("strong",[e._v("not")]),e._v(" part of the testing infrastructure and must be manually included if needed.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"tests-runtime-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tests-runtime-configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" Tests Runtime Configurations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("This file is loaded in the browser to configure globals ("),t("em",[this._v("window")]),this._v(" global object properties) for enabling the test bootstrapping.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("The most important global is "),t("em",[this._v("window.TEST_FILE_PATTERN")]),this._v(", which defines a regular expression for identifying test files and loading them as "),t("em",[this._v("require.js")]),this._v(" file dependencies.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("strong",[this._v("Note")]),this._v(': This file can also be used to define "end user" globals. In this example, '),t("em",[this._v("chai")]),this._v(" APIs are exposed as globals.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-tests-themselves"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-tests-themselves","aria-hidden":"true"}},[this._v("#")]),this._v(" The Tests Themselves")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("The tests are written using Mocha "),t("em",[this._v("bdd")]),this._v(" APIs (describe/it/before/...) with "),t("em",[this._v("chai")]),this._v(" "),t("em",[this._v("expect")]),this._v(" APIs for assertions.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("The tests use "),t("em",[this._v("require.js")]),this._v(" to load dependencies.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The service test loads STF (Service Tests Framework), which exposes APIs for testing SAP Web IDE in an "),t("em",[this._v("iframe")]),this._v(".")])}],n=s(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://karma-runner.github.io/1.0/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Karma"),s("OutboundLink")],1),e._v(" - is an open source test "),s("strong",[e._v("runner")]),e._v(" for JavaScript capable of executing tests on browsers.")])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mocha"),s("OutboundLink")],1),e._v(" - is an open source JavaScript testing framework. It provides APIs for writing the test suites.")])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/SAP/webide-client-tools/blob/master/resources/tests/serviceTestFramework.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("STF - Service Test Framework"),s("OutboundLink")],1),e._v(" - is a proprietary JavaScript module that provides utilities for starting SAP Web IDE inside an "),s("em",[e._v("iframe")]),e._v(" for testing purposes.")])]),e._v(" "),e._m(3),e._v(" "),e._m(4)]),e._v(" "),s("p",[e._v("The SAP Web IDE client tools repository contains utilities and an "),s("a",{attrs:{href:"https://github.com/SAP/webide-client-tools/tree/master/example",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),s("OutboundLink")],1),e._v(" on how to integrate the above tools to bootstrap a testing infrastructure for SAP Web IDE features.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(': "karma_tests" is simply an npm script that triggers the Karma CLI command:\n'),s("code",[e._v("karma start --singleRun")]),e._v("\nAdditional information about karma configurations and CLI can be found in the "),s("a",{attrs:{href:"http://karma-runner.github.io/1.0/intro/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official karma documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("ol",[s("li",[s("p",[e._v("Open "),s("a",{attrs:{href:"https://github.com/SAP/webide-client-tools/tree/master/example",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),s("OutboundLink")],1),e._v(" directory.")]),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("A new Chrome browser opens in a URL similar to: http://localhost:9877/?id=16652698")]),e._v(" "),e._m(15)]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19)]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),s("ul",[s("li",[s("p",[e._v("Found in "),s("a",{attrs:{href:"https://github.com/SAP/webide-client-tools/blob/master/example/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[e._v("The "),s("em",[e._v("karma-*")]),e._v(" package dependencies are plugins for Karma, for example: "),s("em",[e._v("karma-chrome-launcher")]),e._v("\nallows Karma to launch Chrome for testing. However, if we want to use Firefox we can install and configure\nthe "),s("a",{attrs:{href:"https://www.npmjs.com/package/karma-firefox-launcher",target:"_blank",rel:"noopener noreferrer"}},[e._v("karma-firefox-launcher"),s("OutboundLink")],1),e._v(" plugin.")])]),e._v(" "),e._m(25),e._v(" "),e._m(26)]),e._v(" "),e._m(27),e._v(" "),s("ul",[s("li",[s("p",[e._v("Found in "),s("a",{attrs:{href:"https://github.com/SAP/webide-client-tools/blob/master/example/karma.conf.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("karma.conf.js"),s("OutboundLink")],1)])]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),s("li",[s("p",[e._v("Consult the "),s("a",{attrs:{href:"http://karma-runner.github.io/1.0/config/configuration-file.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation for Karma configurations"),s("OutboundLink")],1),e._v("\nwhen making changes.")])]),e._v(" "),e._m(31)]),e._v(" "),e._m(32),e._v(" "),s("ul",[s("li",[s("p",[e._v("Found in "),s("a",{attrs:{href:"https://github.com/SAP/webide-client-tools/blob/master/example/test/testsSetup.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("testSetup.js"),s("OutboundLink")],1)])]),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35)]),e._v(" "),e._m(36),e._v(" "),s("ul",[s("li",[s("p",[e._v("Found in "),s("a",{attrs:{href:"https://github.com/SAP/webide-client-tools/blob/master/example/test/serviceTestSpec.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("serviceTestSpec.js"),s("OutboundLink")],1),e._v(" and\n"),s("a",{attrs:{href:"https://github.com/SAP/webide-client-tools/blob/master/example/test/utilsUnitTestSpec.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("utilsUnitTestSpec.js"),s("OutboundLink")],1)])]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),s("li",[e._m(39),e._v(" "),s("ul",[s("li",[e._v("STF.startWebIDE(...)")]),e._v(" "),s("li",[e._v("See "),s("a",{attrs:{href:"https://sap.github.io/webide-client-tools/web/html_docs/interfaces/_api_d_.stf_api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("API Docs"),s("OutboundLink")],1),e._v(" for detailed info.")])])])])])},r,!1,null,null,null);i.options.__file="testing.md";t.default=i.exports}}]);