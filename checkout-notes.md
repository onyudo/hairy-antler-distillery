# Hairy Antler Distillery: Simulated Checkout Sequence Notes

In order to complete the simulated checkout sequence correctly—or to see my form validations at work—please keep the following in mind:

## Full Name, Street Address and City

These input fields are required and will take any text input but do not affect validation.

## State

Under the best case circumstances, Kentucky distilleries can legally ship spirits to customers in only ten states: Alaska, Arizona, Connecticut, Hawaii, Kentucky, Nebraska, Nevada, New Hampshire, North Dakota and Rhode Island. Any selection that is not one of these ten states will result in the checkout form not passing validation.

## Zip Code

Any sequence of 5 digits can be entered into this input field in order to pass validation.

## Email

A properly formated email address is required for this input field to pass validation.

## Payment Method

A properly formated sequence of numbers is required for this input field to pass validation.
Only the following types and formats of Credit Cards will pass validation: Visa, MasterCard, American Express, Discover and Diners Club. The numbers should be entered without any dashes or spaces. Below is a list of valid input entries for testing purposes only:

- Visa (starts with 4) (13 or 16 digits):

  - 4111111111111111 
  - 4111111111111112 

- MasterCard (starts with 51-55):

  - 5105105105105100
    -5555555555554444

- American Express (starts with 34 or 37):
  - 378282246310005
  - 371449635398431

- Discover (starts with 6011 or 65):
    - 6011111111111117
    - 6500000000000000

- Diners Club (starts with 36 or 38):

    - 3600000000000000

These numbers are not real, but they will work with most credit card validation systems designed for testing.

## Payment Method

This input field requires a sequence of numbers in the basic month/year format (i.e, MM/YY, 02/29) to pass validation.

## CVC

This input field requires any sequence of three numbers (i.e., 333) to pass validation.

## Age Verficiation

The checkbox that attests that the user is 21 years of age or older must be checked in order for the final step of the validation process to successfully complete.

## Order Completeion

Upon successful input entry and validation the user will be redirected to the Order Confirmation page (order-confirmation.html).