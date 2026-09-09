import type { FormSubmittedEvent } from "@netlify/functions";

export default {
  formSubmitted(event: FormSubmittedEvent) {
    console.log("LostPaws form submission received");
    console.log("Data:", event.data);
  },
};
