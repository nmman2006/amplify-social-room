//import { defineAuth } from "@aws-amplify/backend"
import { Auth } from '@aws-amplify/backend-auth';
import { createAuthChallenge } from "./create-auth-challenge/resource"
import { defineAuthChallenge } from "./define-auth-challenge/resource"
import { verifyAuthChallengeResponse } from "./verify-auth-challenge-response/resource"

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
// export const auth = defineAuth({
//   loginWith: {
//     email: true,
//   },
const auth = new Auth({
  loginWith: {
    custom: {
      enabled: true  // Make sure this is true
    },
    triggers: {
      createAuthChallenge,
      defineAuthChallenge,
      verifyAuthChallengeResponse,
    },
  }
})
