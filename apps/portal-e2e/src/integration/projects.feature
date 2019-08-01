Feature: Projects
  As an authenticated user
  I need to be work with projects

  Scenario: Create a project
    Given I am logged in as an "admin"
    And I type new project details
      | Title     | getRandomTitle   |
      | Notes     | getRandomNotes   |
      | Completed | getRandomPercent |
    And I select a new project client
    And I save the new project
    Then I should see the new project in the projects list
