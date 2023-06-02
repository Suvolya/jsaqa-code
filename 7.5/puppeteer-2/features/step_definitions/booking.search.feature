Feature: Ticket booking 
    Scenario: Should book ticket
        Given user is on "/navigation" page
        When user chooses date "дату"
        When user chooses time "время"
        Then the "buying-scheme" page should be visible
        When user chooses seat "место"
        Then user click on "забронровать"
                                                            