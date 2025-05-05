# Lab 5 - Starter
Name: Joshua Caneday

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: No, I would not use a unit test to test the full “message” feature because it involves multiple components working together—such as user input, network communication, and data storage—which makes it an integration or end-to-end test scenario. Unit tests are best suited for isolated components. However, individual parts of the messaging feature (e.g., message formatting or validation logic) could be tested with unit tests.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Answer: Yes, I would use a unit test to test the “max message length” feature. This feature likely relies on a small, isolated function that checks or restricts input length, which makes it ideal for unit testing. Unit tests can easily verify that inputs over 80 characters are rejected or trimmed and that valid inputs are accepted correctly.

Expose: https://joshcaneday.github.io/Lab5_Starter/expose.html
Explore: https://joshcaneday.github.io/Lab5_Starter/explore.html