Step 1 — Wire up the submit event
Add a addEventListener('submit', ...) that calls event.preventDefault() and logs "form submitted" to the console. Test that the page no longer reloads on submit.

Step 2 — Add "required field" validation for name and message
Write a validate() function that checks if name and message are empty. For now, just console.log which fields failed. Test by submitting with those fields empty vs. filled.

Step 3 — Add email format validation
Extend validate() to check the email field with a simple regex (e.g. /.+@.+\..+/). Log pass/fail to the console. Test with a valid address, a missing @, and an empty field.

Step 4 — Create and inject inline error messages
For each field, add an empty <span class="error-msg"> below its input in the HTML. Update validate() to write error text into those spans (and clear them when valid). Test that the right message appears next to the right field.

Step 5 — Add/remove a CSS error class on the inputs
Style the error state — add a red border (or similar) to the input itself when invalid, and remove it when the field passes. This just means toggling a class alongside the span text from Step 4.

Step 6 — Clear errors on input
Add an addEventListener('input', ...) to each field so its error clears as soon as the user starts typing a correction. Test that the red border and message disappear immediately when you begin fixing a field.

Step 7 — Show a success state
If all fields pass, hide the form and show a success message (a <div id="success-msg"> you already have in the HTML but keep hidden). Test by submitting a fully valid form.

Step 8 — Polish and edge cases
Trim whitespace from field values before validating (so a name of "   " fails). Make sure tabbing through the form and hitting Enter both trigger validation. Do a final check across Chrome and Firefox.