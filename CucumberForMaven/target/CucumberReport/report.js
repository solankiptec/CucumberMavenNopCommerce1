$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Cucumber/orangeHRM.feature");
formatter.feature({
  "line": 4,
  "name": "Log in",
  "description": "",
  "id": "log-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@raj"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User should not able to log in with invalid credentials",
  "description": "",
  "id": "log-in;user-should-not-able-to-log-in-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I enter invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should not able to log in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "log-in;user-should-not-able-to-log-in-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "log-in;user-should-not-able-to-log-in-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "admin"
      ],
      "line": 14,
      "id": "log-in;user-should-not-able-to-log-in-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "",
        "password"
      ],
      "line": 15,
      "id": "log-in;user-should-not-able-to-log-in-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "testtest",
        "password"
      ],
      "line": 16,
      "id": "log-in;user-should-not-able-to-log-in-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47672007205,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nap method startup on firefox@getpocket.com version 1.0.5\r\n1523112578582\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\screenshots@mozilla.org.xpi\r\n1523112578584\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 6.6.0\r\n1523112578586\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1523112578589\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.1\r\n1523112578618\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1523112578619\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1523112578619\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1523112578619\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1523112578620\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1523112578624\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1523112578662\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1523112578664\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1523112578665\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1523112578666\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1523112578667\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1523112578672\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1523112581528\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1523112581528\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112581529\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1523112582073\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112582073\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 19\r\n1523112582073\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1523112582105\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1523112582135\taddons.repository\tDEBUG\tNo addons.json found.\r\n1523112582137\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1523112582147\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1523112582226\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1523112582227\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1523112582227\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1523112582236\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1523112582261\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112582420\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n1523112613092\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on webcompat@mozilla.org version 1.1\r\n1523112613094\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on screenshots@mozilla.org version 6.6.0\r\n1523112613097\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0.5\r\n1523112613101\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 1.50\r\n1523112613105\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on aushelper@mozilla.org version 2.0\r\n[Child 4996] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w64-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n1523112613586\taddons.manager\tDEBUG\tshutdown\r\n1523112613588\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1523112613589\taddons.xpi\tDEBUG\tshutdown\r\n1523112613590\taddons.xpi-utils\tDEBUG\tshutdown\r\n1523112613592\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1523112613595\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1523112613603\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1523112613604\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112613609\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1523112613649\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1523112613663\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Welcome-PC\u0027, ip: \u0027192.168.0.25\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:119)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat Cucumber.BrowserSelector.selectBrowser(BrowserSelector.java:19)\r\n\tat Cucumber.Hooks.openBrowser(Hooks.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\nap method startup on firefox@getpocket.com version 1.0.5\r\n1523112578582\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\screenshots@mozilla.org.xpi\r\n1523112578584\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 6.6.0\r\n1523112578586\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1523112578589\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.1\r\n1523112578618\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1523112578619\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1523112578619\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1523112578619\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1523112578620\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1523112578624\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1523112578662\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1523112578664\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1523112578665\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1523112578666\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1523112578667\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1523112578672\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1523112581528\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1523112581528\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112581529\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1523112582073\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112582073\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 19\r\n1523112582073\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1523112582105\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1523112582135\taddons.repository\tDEBUG\tNo addons.json found.\r\n1523112582137\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1523112582147\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1523112582226\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1523112582227\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1523112582227\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1523112582236\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1523112582261\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112582420\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n1523112613092\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on webcompat@mozilla.org version 1.1\r\n1523112613094\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on screenshots@mozilla.org version 6.6.0\r\n1523112613097\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0.5\r\n1523112613101\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 1.50\r\n1523112613105\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on aushelper@mozilla.org version 2.0\r\n[Child 4996] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w64-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n1523112613586\taddons.manager\tDEBUG\tshutdown\r\n1523112613588\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1523112613589\taddons.xpi\tDEBUG\tshutdown\r\n1523112613590\taddons.xpi-utils\tDEBUG\tshutdown\r\n1523112613592\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1523112613595\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1523112613603\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1523112613604\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112613609\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1523112613649\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1523112613663\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:113)\r\n\t... 62 more\r\n",
  "status": "failed"
});
formatter.background({
  "line": 6,
  "name": "qughouq;ef",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.i_am_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "User should not able to log in with invalid credentials",
  "description": "",
  "id": "log-in;user-should-not-able-to-log-in-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@raj"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter invalid \"Admin\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should not able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 17
    },
    {
      "val": "admin",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.iEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.i_should_not_able_to_log_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 45774500891,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nte\":1502485992134,\"applyBackgroundUpdates\":1,\"bootstrap\":false,\"skinnable\":false,\"size\":307848,\"sourceURI\":null,\"releaseNotesURI\":null,\"softDisabled\":false,\"foreignInstall\":true,\"hasBinaryComponents\":false,\"strictCompatibility\":false,\"locales\":[],\"targetApplications\":[{\"id\":\"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}\",\"minVersion\":\"26.0\",\"maxVersion\":\"51.*\"}],\"targetPlatforms\":[],\"multiprocessCompatible\":false,\"signedState\":2,\"seen\":true,\"dependencies\":[],\"hasEmbeddedWebExtension\":false,\"mpcOptedOut\":true,\"userPermissions\":null}\r\n1523112623754\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1523112623754\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1523112623754\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1523112623758\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1523112623768\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\aushelper@mozilla.org.xpi\r\n1523112623769\taddons.xpi\tDEBUG\tCalling bootstrap method startup on aushelper@mozilla.org version 2.0\r\n1523112623774\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1523112623777\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.50\r\n1523112623779\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1523112623781\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0.5\r\n1523112623784\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\screenshots@mozilla.org.xpi\r\n1523112623785\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 6.6.0\r\n1523112623786\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1523112623788\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.1\r\n1523112623801\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1523112623802\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1523112623802\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1523112623802\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1523112623803\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1523112623804\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1523112623821\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1523112623823\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1523112623823\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1523112623824\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1523112623824\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1523112623826\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1523112626498\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1523112626498\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112626499\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1523112627034\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112627034\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 19\r\n1523112627034\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1523112627070\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1523112627082\taddons.repository\tDEBUG\tNo addons.json found.\r\n1523112627084\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1523112627093\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1523112627171\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1523112627172\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1523112627173\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1523112627184\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1523112627267\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112627365\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Welcome-PC\u0027, ip: \u0027192.168.0.25\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:119)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat Cucumber.BrowserSelector.selectBrowser(BrowserSelector.java:19)\r\n\tat Cucumber.Hooks.openBrowser(Hooks.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\nte\":1502485992134,\"applyBackgroundUpdates\":1,\"bootstrap\":false,\"skinnable\":false,\"size\":307848,\"sourceURI\":null,\"releaseNotesURI\":null,\"softDisabled\":false,\"foreignInstall\":true,\"hasBinaryComponents\":false,\"strictCompatibility\":false,\"locales\":[],\"targetApplications\":[{\"id\":\"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}\",\"minVersion\":\"26.0\",\"maxVersion\":\"51.*\"}],\"targetPlatforms\":[],\"multiprocessCompatible\":false,\"signedState\":2,\"seen\":true,\"dependencies\":[],\"hasEmbeddedWebExtension\":false,\"mpcOptedOut\":true,\"userPermissions\":null}\r\n1523112623754\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1523112623754\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1523112623754\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1523112623758\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1523112623768\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\aushelper@mozilla.org.xpi\r\n1523112623769\taddons.xpi\tDEBUG\tCalling bootstrap method startup on aushelper@mozilla.org version 2.0\r\n1523112623774\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\e10srollout@mozilla.org.xpi\r\n1523112623777\taddons.xpi\tDEBUG\tCalling bootstrap method startup on e10srollout@mozilla.org version 1.50\r\n1523112623779\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1523112623781\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0.5\r\n1523112623784\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\screenshots@mozilla.org.xpi\r\n1523112623785\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 6.6.0\r\n1523112623786\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1523112623788\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.1\r\n1523112623801\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1523112623802\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1523112623802\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1523112623802\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1523112623803\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1523112623804\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1523112623821\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1523112623823\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1523112623823\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1523112623824\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1523112623824\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1523112623826\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1523112626498\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1523112626498\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112626499\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1523112627034\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112627034\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 19\r\n1523112627034\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1523112627070\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1523112627082\taddons.repository\tDEBUG\tNo addons.json found.\r\n1523112627084\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1523112627093\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1523112627171\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1523112627172\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1523112627173\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1523112627184\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1523112627267\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112627365\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:113)\r\n\t... 62 more\r\n",
  "status": "failed"
});
formatter.background({
  "line": 6,
  "name": "qughouq;ef",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.i_am_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "User should not able to log in with invalid credentials",
  "description": "",
  "id": "log-in;user-should-not-able-to-log-in-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@raj"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter invalid \"\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should not able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    },
    {
      "val": "password",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.iEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.i_should_not_able_to_log_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 45602460331,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \n4\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1523112669607\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0.5\r\n1523112669610\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\screenshots@mozilla.org.xpi\r\n1523112669612\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 6.6.0\r\n1523112669613\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1523112669615\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.1\r\n1523112669628\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1523112669629\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1523112669629\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1523112669630\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1523112669631\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1523112669632\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1523112669647\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1523112669648\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1523112669648\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1523112669650\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1523112669651\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1523112669652\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1523112672362\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1523112672363\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112672364\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1523112672930\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112672930\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 19\r\n1523112672931\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1523112672956\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1523112672977\taddons.repository\tDEBUG\tNo addons.json found.\r\n1523112672978\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1523112672987\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1523112673063\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1523112673063\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1523112673064\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1523112673072\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1523112673097\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112673191\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n1523112689695\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on webcompat@mozilla.org version 1.1\r\n1523112689697\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on screenshots@mozilla.org version 6.6.0\r\n1523112689701\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0.5\r\n1523112689705\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 1.50\r\n1523112689709\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on aushelper@mozilla.org version 2.0\r\n1523112690291\taddons.manager\tDEBUG\tshutdown\r\n1523112690293\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1523112690294\taddons.xpi\tDEBUG\tshutdown\r\n1523112690295\taddons.xpi-utils\tDEBUG\tshutdown\r\n1523112690302\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1523112690307\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1523112690317\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1523112690319\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112690327\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1523112690340\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1523112690358\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Welcome-PC\u0027, ip: \u0027192.168.0.25\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:119)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat Cucumber.BrowserSelector.selectBrowser(BrowserSelector.java:19)\r\n\tat Cucumber.Hooks.openBrowser(Hooks.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:51)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\n4\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\firefox@getpocket.com.xpi\r\n1523112669607\taddons.xpi\tDEBUG\tCalling bootstrap method startup on firefox@getpocket.com version 1.0.5\r\n1523112669610\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\screenshots@mozilla.org.xpi\r\n1523112669612\taddons.xpi\tDEBUG\tCalling bootstrap method startup on screenshots@mozilla.org version 6.6.0\r\n1523112669613\taddons.xpi\tDEBUG\tRegistering manifest for C:\\Program Files\\Mozilla Firefox\\browser\\features\\webcompat@mozilla.org.xpi\r\n1523112669615\taddons.xpi\tDEBUG\tCalling bootstrap method startup on webcompat@mozilla.org version 1.1\r\n1523112669628\taddons.manager\tDEBUG\tRegistering shutdown blocker for XPIProvider\r\n1523112669629\taddons.manager\tDEBUG\tProvider finished startup: XPIProvider\r\n1523112669629\taddons.manager\tDEBUG\tStarting provider: LightweightThemeManager\r\n1523112669630\taddons.manager\tDEBUG\tRegistering shutdown blocker for LightweightThemeManager\r\n1523112669631\taddons.manager\tDEBUG\tProvider finished startup: LightweightThemeManager\r\n1523112669632\taddons.manager\tDEBUG\tStarting provider: GMPProvider\r\n1523112669647\taddons.manager\tDEBUG\tRegistering shutdown blocker for GMPProvider\r\n1523112669648\taddons.manager\tDEBUG\tProvider finished startup: GMPProvider\r\n1523112669648\taddons.manager\tDEBUG\tStarting provider: PluginProvider\r\n1523112669650\taddons.manager\tDEBUG\tRegistering shutdown blocker for PluginProvider\r\n1523112669651\taddons.manager\tDEBUG\tProvider finished startup: PluginProvider\r\n1523112669652\taddons.manager\tDEBUG\tCompleted startup sequence\r\n1523112672362\taddons.manager\tDEBUG\tStarting provider: \u003cunnamed-provider\u003e\r\n1523112672363\taddons.manager\tDEBUG\tRegistering shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112672364\taddons.manager\tDEBUG\tProvider finished startup: \u003cunnamed-provider\u003e\r\n1523112672930\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112672930\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 19\r\n1523112672931\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1523112672956\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1523112672977\taddons.repository\tDEBUG\tNo addons.json found.\r\n1523112672978\tDeferredSave.addons.json\tDEBUG\tSave changes\r\n1523112672987\tDeferredSave.addons.json\tDEBUG\tStarting timer\r\n1523112673063\taddons.manager\tDEBUG\tStarting provider: PreviousExperimentProvider\r\n1523112673063\taddons.manager\tDEBUG\tRegistering shutdown blocker for PreviousExperimentProvider\r\n1523112673064\taddons.manager\tDEBUG\tProvider finished startup: PreviousExperimentProvider\r\n1523112673072\tDeferredSave.addons.json\tDEBUG\tStarting write\r\n1523112673097\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1523112673191\tDeferredSave.addons.json\tDEBUG\tWrite succeeded\r\n1523112689695\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on webcompat@mozilla.org version 1.1\r\n1523112689697\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on screenshots@mozilla.org version 6.6.0\r\n1523112689701\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0.5\r\n1523112689705\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 1.50\r\n1523112689709\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on aushelper@mozilla.org version 2.0\r\n1523112690291\taddons.manager\tDEBUG\tshutdown\r\n1523112690293\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1523112690294\taddons.xpi\tDEBUG\tshutdown\r\n1523112690295\taddons.xpi-utils\tDEBUG\tshutdown\r\n1523112690302\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1523112690307\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1523112690317\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1523112690319\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1523112690327\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1523112690340\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1523112690358\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:113)\r\n\t... 62 more\r\n",
  "status": "failed"
});
formatter.background({
  "line": 6,
  "name": "qughouq;ef",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.i_am_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "User should not able to log in with invalid credentials",
  "description": "",
  "id": "log-in;user-should-not-able-to-log-in-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@raj"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter invalid \"testtest\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should not able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testtest",
      "offset": 17
    },
    {
      "val": "password",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.iEnterInvalidAnd(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.i_should_not_able_to_log_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
});