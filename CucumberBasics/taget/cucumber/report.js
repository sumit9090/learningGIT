$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/qtpselenium/cucumber/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "In order to login into facebook",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user entered the \"\u003cUsername\u003e\" username and \"\u003cPassword\u003e\" password",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects age category",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ]
    },
    {
      "cells": [
        "above 18",
        "USA"
      ]
    },
    {
      "cells": [
        "below 18",
        "INDIA"
      ]
    }
  ]
});
formatter.step({
  "name": "user \"\u003cStatus\u003e\" sucessfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Status"
      ]
    },
    {
      "cells": [
        "valid",
        "valid",
        "shouldbe"
      ]
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "shouldnotbe"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "In order to login into facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user entered the \"valid\" username and \"valid\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_entered_the_username(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ]
    },
    {
      "cells": [
        "above 18",
        "USA"
      ]
    },
    {
      "cells": [
        "below 18",
        "INDIA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_selects_age_category(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"shouldbe\" sucessfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_should_be_sucessfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "In order to login into facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user entered the \"invalid\" username and \"invalid\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_entered_the_username(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ]
    },
    {
      "cells": [
        "above 18",
        "USA"
      ]
    },
    {
      "cells": [
        "below 18",
        "INDIA"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.user_selects_age_category(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"shouldnotbe\" sucessfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_should_be_sucessfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/com/qtpselenium/cucumber/Logintoprod.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@functional"
    }
  ]
});
formatter.scenarioOutline({
  "name": "In order to login into facebook",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user entered the \"\u003cUsername\u003e\" username and \"\u003cPassword\u003e\" password",
  "keyword": "Then "
});
formatter.step({
  "name": "user validates the capcha image",
  "keyword": "And "
});
formatter.step({
  "name": "user \"\u003cStatus\u003e\" sucessfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Status"
      ]
    },
    {
      "cells": [
        "valid",
        "valid",
        "shouldbe"
      ]
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "shouldnotbe"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "In order to login into facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functional"
    }
  ]
});
formatter.step({
  "name": "user entered the \"valid\" username and \"valid\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_entered_the_username(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the capcha image",
  "keyword": "And "
});
formatter.match({
  "location": "prodlogin.user_validates_the_capcha_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"shouldbe\" sucessfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_should_be_sucessfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "In order to login into facebook",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@functional"
    }
  ]
});
formatter.step({
  "name": "user entered the \"invalid\" username and \"invalid\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_entered_the_username(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the capcha image",
  "keyword": "And "
});
formatter.match({
  "location": "prodlogin.user_validates_the_capcha_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user \"shouldnotbe\" sucessfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_should_be_sucessfully_logged_in(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});