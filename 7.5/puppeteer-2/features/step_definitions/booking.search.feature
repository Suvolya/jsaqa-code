Feature: Ticket booking 

    Background:
        Given user is on "/navigation" page


    Scenario: Should successful book ticket
        When user chooses date "дату"
        When user chooses time "время"
        Then the "buying-scheme" page should be visible
        When user chooses seat "место"
        Then user click on "забронровать"
        Then user get text "Получить код бронирования"

    
    Scenario: Should successful book a few tickets
        When user chooses date "дату"
        When user chooses time "время"
        Then the "buying-scheme" page should be visible
        When user chooses first seat "место"
        When user chooses second seat "место"
        Then user click on "забронровать"
        Then user get text "Получить код бронирования"

    
    Scenario: Should unsuccessful book ticket
        When user chooses date "дату"
        When user chooses time "время"
        Then the "buying-scheme" page should be visible
        When user chooses occupied seat "место"
        Then user sees disabled button "забронровать"
        


